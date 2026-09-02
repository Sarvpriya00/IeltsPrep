/**
 * Universal Interactive Exercise Renderer Engine
 */

import { addXP, logLocalMistake } from './gamification.js';

export function renderExercise(container, item, onNextCallback) {
  if (!container || !item) return;

  let html = `
    <div class="workout-card">
      <span class="stage-badge stage-${item.stage || 'practice'}">${(item.stage || 'practice').toUpperCase()}</span>
      <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--tr-text-main);">${item.skill ? item.skill.toUpperCase() + ' DRILL' : 'Writing Drill'}</h3>
  `;

  if (item.conceptExplanation) {
    html += `
      <div style="background: var(--tr-bg); border-left: 4px solid var(--tr-primary); padding: 0.85rem; border-radius: 6px; font-size: 0.9rem; margin-bottom: 1.25rem;">
        <strong>${item.conceptTitle || 'Key Rule'}:</strong> ${item.conceptExplanation}
      </div>
    `;
  }

  html += `<p style="font-size: 1.05rem; font-weight: 600; margin-bottom: 1.25rem;">${item.question || ''}</p>`;

  // Render context text if available (used in error-spot, tap-choice)
  if (item.text) {
    html += `<div style="background: var(--tr-card-bg); padding: 1rem; border-radius: 8px; border: 1px solid var(--tr-border); margin-bottom: 1.25rem; font-size: 1.1rem;">${item.text}</div>`;
  }
  
  // Render sentences array (used in sentence-combine)
  if (item.sentences && item.sentences.length > 0) {
    html += `<div style="background: var(--tr-card-bg); padding: 1rem; border-radius: 8px; border: 1px solid var(--tr-border); margin-bottom: 1.25rem;">`;
    item.sentences.forEach((s, i) => {
      html += `<p style="margin-bottom: ${i === item.sentences.length - 1 ? '0' : '0.5rem'};"><strong>${i+1}.</strong> ${s}</p>`;
    });
    html += `</div>`;
  }

  if (item.hint) {
    html += `<p style="font-size: 0.9rem; color: var(--tr-primary); margin-bottom: 1rem;">💡 Hint: ${item.hint}</p>`;
  }

  // --- RENDER INPUTS BASED ON TYPE ---
  
  if (item.type === 'multiple-choice' || item.type === 'tap-choice' || item.type === 'mcq') {
    html += `
      <div class="option-grid" id="exercise-options">
        ${(item.options || []).map((opt, idx) => `
          <div class="option-card" data-val="${opt.replace(/"/g, '&quot;')}" onclick="window.selectTrainingOption(this)">
            <span>${opt}</span>
          </div>
        `).join('')}
      </div>
    `;
  } 
  else if (item.type === 'typing' || item.type === 'sentence-combine' || item.type === 'error-spot') {
    let placeholder = "Type your answer here...";
    if (item.type === 'error-spot') placeholder = "Type the corrected phrase here...";
    if (item.type === 'sentence-combine') placeholder = "Type the combined sentence...";
    
    html += `
      <div style="margin: 1.5rem 0;">
        <textarea id="typing-answer-input" class="form-input" placeholder="${placeholder}" style="width: 100%; padding: 0.85rem; font-size: 1rem; border-radius: 8px; border: 2px solid var(--tr-border); min-height: 80px;"></textarea>
      </div>
    `;
  }
  else if (item.type === 'ordering') {
    html += `<p style="font-size: 0.9rem; color: var(--tr-text-sub); margin-bottom: 0.5rem;">Click the sentences in the correct logical order:</p>`;
    html += `<div id="ordering-container" style="display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 1rem;">`;
    
    // Shuffle steps for display
    let shuffled = [...item.steps].map((s, i) => ({text: s, origIdx: i})).sort(() => Math.random() - 0.5);
    shuffled.forEach((s, idx) => {
      html += `
        <div class="option-card order-item" data-text="${s.text.replace(/"/g, '&quot;')}" onclick="window.toggleOrderItem(this)" style="cursor: pointer; padding: 1rem; border: 1px solid var(--tr-border); border-radius: 8px;">
          <span class="order-number" style="display:inline-block; width: 24px; height: 24px; background: var(--tr-border); color: var(--tr-text-main); border-radius: 50%; text-align: center; line-height: 24px; margin-right: 10px; font-weight: bold;"></span>
          ${s.text}
        </div>
      `;
    });
    html += `</div>`;
  }
  else {
    // Fallback
    html += `<p style="color: red;">Unsupported exercise type: ${item.type}</p>`;
  }

  html += `
      <div id="feedback-area"></div>
      <div style="display: flex; justify-content: flex-end; margin-top: 1.5rem;">
        <button id="check-ans-btn" class="btn btn-primary" style="padding: 0.75rem 1.75rem; font-size: 1rem;">Check Answer</button>
      </div>
    </div>
  `;

  container.innerHTML = html;

  // State variables
  let selectedVal = null;
  let orderedSelection = []; // For ordering type

  // Global functions for inline onclick handlers
  window.selectTrainingOption = function(el) {
    document.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
    el.classList.add('selected');
    selectedVal = el.getAttribute('data-val');
  };

  window.toggleOrderItem = function(el) {
    const text = el.getAttribute('data-text');
    if (el.classList.contains('selected')) {
      el.classList.remove('selected');
      orderedSelection = orderedSelection.filter(t => t !== text);
    } else {
      el.classList.add('selected');
      orderedSelection.push(text);
    }
    // Update numbering
    document.querySelectorAll('.order-item').forEach(itemEl => {
      const numSpan = itemEl.querySelector('.order-number');
      const itemText = itemEl.getAttribute('data-text');
      const idx = orderedSelection.indexOf(itemText);
      if (idx !== -1) {
        numSpan.textContent = idx + 1;
        numSpan.style.background = 'var(--tr-primary)';
        numSpan.style.color = '#fff';
      } else {
        numSpan.textContent = '';
        numSpan.style.background = 'var(--tr-border)';
      }
    });
  };

  const checkBtn = document.getElementById('check-ans-btn');
  if (checkBtn) {
    checkBtn.addEventListener('click', () => {
      // If we already answered and this is "Continue"
      if (checkBtn.textContent.includes('Continue')) {
        if (onNextCallback) onNextCallback();
        return;
      }

      let isCorrect = false;
      let userAns = '';
      let correctDisplayAns = '';

      if (item.type === 'multiple-choice' || item.type === 'tap-choice' || item.type === 'mcq') {
        userAns = selectedVal;
        isCorrect = (selectedVal === item.answer);
        correctDisplayAns = item.answer;
      } 
      else if (item.type === 'typing') {
        userAns = document.getElementById('typing-answer-input')?.value.trim();
        isCorrect = (userAns.toLowerCase() === item.answer.toLowerCase());
        correctDisplayAns = item.answer;
      }
      else if (item.type === 'error-spot') {
        userAns = document.getElementById('typing-answer-input')?.value.trim();
        isCorrect = (userAns.toLowerCase() === item.correctPhrase.toLowerCase());
        correctDisplayAns = item.correctPhrase;
      }
      else if (item.type === 'sentence-combine') {
        userAns = document.getElementById('typing-answer-input')?.value.trim();
        // answerRegex might be a string representing regex if it was serialized, or an actual RegExp object.
        // In our data, we wrote it as a literal RegExp object (e.g. /.../i)
        if (item.answerRegex instanceof RegExp) {
          isCorrect = item.answerRegex.test(userAns);
        } else {
          // fallback string comparison
          isCorrect = userAns.length > 5; // Very basic fallback if regex fails to parse
        }
        correctDisplayAns = "See explanation for acceptable structures.";
      }
      else if (item.type === 'ordering') {
        isCorrect = JSON.stringify(orderedSelection) === JSON.stringify(item.steps);
        correctDisplayAns = "The logical order shown in the explanation.";
      }

      const feedbackArea = document.getElementById('feedback-area');
      if (isCorrect) {
        addXP(10);
        feedbackArea.innerHTML = `
          <div class="feedback-banner success" style="margin-top: 1rem; padding: 1rem; border-radius: 8px; background: rgba(34, 197, 94, 0.1); border: 1px solid var(--tr-green);">
            <strong style="font-size: 1.1rem; color: var(--tr-green); display: block; margin-bottom: 0.5rem;">✓ Correct! +10 XP</strong>
            <span style="color: var(--tr-text-main);">${item.explanation || 'Great job!'}</span>
          </div>
        `;
      } else {
        logLocalMistake(item, userAns || 'No answer');
        feedbackArea.innerHTML = `
          <div class="feedback-banner error" style="margin-top: 1rem; padding: 1rem; border-radius: 8px; background: rgba(239, 68, 68, 0.1); border: 1px solid #ef4444;">
            <strong style="font-size: 1.1rem; color: #ef4444; display: block; margin-bottom: 0.5rem;">✗ Not quite.</strong>
            <span style="display: block; margin-bottom: 0.5rem; color: var(--tr-text-main);">Correct answer: <strong>${correctDisplayAns}</strong></span>
            <span style="color: var(--tr-text-main);">${item.explanation || ''}</span>
          </div>
        `;
      }
      checkBtn.textContent = 'Continue ➔';
    });
  }
}
