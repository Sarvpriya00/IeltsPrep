/**
 * Computer-Delivered IELTS Listening Engine
 */

import { cam21ListeningData } from '../data/listeningData.js';
import { rawToListeningBand } from '../data/logicData.js';

let currentTestId = 'cam21-t1';
let userAnswers = {};
let timerSeconds = 40 * 60;
let timerInterval = null;

export function initListeningEngine() {
  const selector = document.getElementById('test-selector');
  if (selector) {
    selector.innerHTML = Object.keys(cam21ListeningData).map(key => {
      const t = cam21ListeningData[key];
      return `<option value="${key}">${t.title || key}</option>`;
    }).join('');
    selector.value = currentTestId;
    selector.addEventListener('change', (e) => {
      currentTestId = e.target.value;
      loadTest(currentTestId);
    });
  }

  loadTest(currentTestId);

  // Timer Toggle
  startTimer();
  const toggleTimer = document.getElementById('toggle-timer');
  const timerDisplay = document.getElementById('timer-display');
  if (toggleTimer && timerDisplay) {
    toggleTimer.addEventListener('click', () => {
      if (timerDisplay.style.display === 'none') {
        timerDisplay.style.display = 'inline';
        toggleTimer.textContent = 'Hide Timer';
      } else {
        timerDisplay.style.display = 'none';
        toggleTimer.textContent = 'Show Timer';
      }
    });
  }

  // Submit button
  const submitBtn = document.getElementById('submit-listening-test');
  if (submitBtn) {
    submitBtn.addEventListener('click', gradeListeningTest);
  }
}

function loadTest(testId) {
  const data = cam21ListeningData[testId];
  if (!data) return;

  const container = document.getElementById('listening-parts-container');
  if (!container) return;

  userAnswers = JSON.parse(localStorage.getItem(`ielts_listening_ans_${testId}`) || '{}');

  let html = `<h2 style="margin-bottom:1rem;">${data.title}</h2>`;

  const audioPrefix = testId.replace('-t', '-test'); // e.g. cam21-t1 -> cam21-test1

  Object.keys(data.parts).forEach(partNum => {
    const part = data.parts[partNum];
    html += `
      <div class="card" style="margin-bottom: 1.5rem;">
        <h3 class="card-title" style="color: var(--accent-blue);">${part.title}</h3>
        
        <audio controls style="width: 100%; margin-bottom: 1rem; height: 40px; border-radius: 8px;">
          <source src="audio/${audioPrefix}-part${partNum}.MP3" type="audio/mpeg">
          <source src="audio/${audioPrefix}-part${partNum}.m4a" type="audio/mp4">
          Your browser does not support the audio element.
        </audio>

        <p style="margin-bottom: 1rem; font-weight: 500; font-size: 0.95rem;">${part.instruction || ''}</p>
    `;

    // Render table rows if present
    if (part.tableRows) {
      html += `<table style="width:100%; border-collapse: collapse; margin-bottom: 1rem;">
        <thead>
          <tr style="background: var(--border-color); text-align: left;">
            ${(part.tableHeader || []).map(h => `<th style="padding: 8px;">${h}</th>`).join('')}
          </tr>
        </thead>
        <tbody>
      `;
      part.tableRows.forEach(row => {
        html += `<tr style="border-bottom: 1px solid var(--border-color);">
          <td style="padding: 8px;"><strong>${row.name || ''}</strong></td>
          <td style="padding: 8px;">${renderInputPlaceholders(row.learn || '')}</td>
          <td style="padding: 8px;">${renderInputPlaceholders(row.cost || '')}</td>
          <td style="padding: 8px;">${renderInputPlaceholders(row.info || '')}</td>
        </tr>`;
      });
      html += `</tbody></table>`;
    }

    // Render notes if present
    if (part.notes) {
      html += `<div style="background: var(--bg-primary); padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
        <h4>${part.notesHeader || 'Notes'}</h4>
        <ul style="padding-left: 1.25rem;">
          ${part.notes.map(n => `<li style="margin-bottom: 0.5rem;">${renderInputPlaceholders(n)}</li>`).join('')}
        </ul>
      </div>`;
    }

    // Render map image if present
    if (part.mapImage) {
      html += `<div style="text-align: center; margin-bottom: 1rem;">
        <img src="${part.mapImage}" alt="Test Map" style="max-width: 100%; height: auto; border-radius: 8px; border: 1px solid var(--border-color);" />
      </div>`;
    }

    // Render MCQs if present
    if (part.mcqs) {
      part.mcqs.forEach(q => {
        const selected = userAnswers[q.num] || '';
        html += `
          <div class="question-card" id="listen-mcq-${q.num}">
            <p><strong>Q${q.num}.</strong> ${q.question}</p>
            <div style="display: flex; flex-direction: column; gap: 0.4rem; margin-top: 0.5rem;">
              ${q.options.map(opt => {
                const optVal = opt.substring(0, 1);
                return `
                  <label style="display:flex; align-items:center; gap: 0.5rem; cursor:pointer;">
                    <input type="radio" name="q_${q.num}" value="${optVal}" ${selected === optVal ? 'checked' : ''} onchange="window.handleInputChange(${q.num}, '${optVal}')" />
                    <span>${opt}</span>
                  </label>
                `;
              }).join('')}
            </div>
          </div>
        `;
      });
    }

    // Render matching items if present
    if (part.matchingItems) {
      html += `
        <div style="margin-top: 1rem;">
          <h4>${part.matchingHeader || 'Matching'}</h4>
          <div style="display:flex; gap: 1rem; margin-bottom: 0.75rem; flex-wrap: wrap;">
            ${(part.matchingOptions || part.matchingBox || []).map(o => `<span style="background:var(--border-color); padding: 2px 8px; border-radius: 4px; font-size: 0.85rem;">${o}</span>`).join('')}
          </div>
          ${part.matchingItems.map(item => `
            <div style="margin-bottom: 0.5rem;">
              <span>Q${item.num}. ${item.text}: </span>
              <input type="text" id="listen-q-${item.num}" class="cd-input" style="width: 80px;" value="${userAnswers[item.num] || ''}" onchange="window.handleInputChange(${item.num}, this.value)" />
            </div>
          `).join('')}
        </div>
      `;
    }

    html += `</div>`;
  });

  container.innerHTML = html;
}

function renderInputPlaceholders(text) {
  return text.replace(/Q(\d+)/g, (match, qNum) => {
    const val = userAnswers[qNum] || '';
    return `<input type="text" id="listen-q-${qNum}" class="cd-input" placeholder="Q${qNum}" value="${val}" onchange="window.handleInputChange(${qNum}, this.value)" />`;
  });
}

window.handleInputChange = function(qNum, val) {
  userAnswers[qNum] = val.trim();
  localStorage.setItem(`ielts_listening_ans_${currentTestId}`, JSON.stringify(userAnswers));
};

function startTimer() {
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    if (timerSeconds <= 0) {
      clearInterval(timerInterval);
      gradeListeningTest();
      return;
    }
    timerSeconds--;
    const m = Math.floor(timerSeconds / 60);
    const s = timerSeconds % 60;
    const timerDisplay = document.getElementById('timer-display');
    if (timerDisplay) {
      timerDisplay.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    }
  }, 1000);
}

function gradeListeningTest() {
  const data = cam21ListeningData[currentTestId];
  if (!data || !data.answerKey) return;

  const key = data.answerKey;
  let correctCount = 0;
  let totalCount = Object.keys(key).length;
  let detailsHtml = '<h4 style="margin-bottom: 1rem; color: var(--text-primary);">Detailed Review</h4>';

  Object.keys(key).forEach(qNum => {
    const accepted = key[qNum].map(a => a.toLowerCase().trim());
    const userVal = (userAnswers[qNum] || '').toLowerCase().trim();
    const isCorrect = userVal && accepted.includes(userVal);
    
    // Clear previous inline styling if grading multiple times
    const el = document.getElementById(`listen-q-${qNum}`);
    if (el) {
      el.style.border = '';
      el.style.color = '';
      const existingAns = document.getElementById(`listen-ans-${qNum}`);
      if (existingAns) existingAns.remove();
    }
    const mcqContainer = document.getElementById(`listen-mcq-${qNum}`);
    if (mcqContainer) {
      mcqContainer.style.border = '';
      const existingAns = document.getElementById(`listen-ans-${qNum}`);
      if (existingAns) existingAns.remove();
    }

    if (isCorrect) {
      correctCount++;
      if (el) {
        el.style.border = '2px solid var(--accent-green)';
        el.style.color = 'var(--accent-green)';
      }
      if (mcqContainer) {
        mcqContainer.style.border = '2px solid var(--accent-green)';
      }
    } else {
      detailsHtml += `
        <div style="margin-bottom: 0.75rem; padding-bottom: 0.75rem; border-bottom: 1px solid var(--border-color);">
          <div style="font-weight: 600; color: var(--text-primary);">Question ${qNum}</div>
          <div style="color: var(--accent-red); font-size: 0.9rem;">Your answer: <strong>${userAnswers[qNum] || '(blank)'}</strong></div>
          <div style="color: var(--accent-green); font-size: 0.9rem;">Correct answer(s): <strong>${key[qNum].join(' / ')}</strong></div>
        </div>
      `;
      if (el) {
        el.style.border = '2px solid var(--accent-red)';
        el.style.color = 'var(--accent-red)';
        el.insertAdjacentHTML('afterend', `<span id="listen-ans-${qNum}" style="color:var(--accent-red);font-size:0.85rem;margin-left:6px;font-weight:600;">(Correct: ${key[qNum].join('/')})</span>`);
      }
      if (mcqContainer) {
        mcqContainer.style.border = '2px solid var(--accent-red)';
        mcqContainer.insertAdjacentHTML('beforeend', `<div id="listen-ans-${qNum}" style="color:var(--accent-red);font-size:0.85rem;margin-top:6px;font-weight:600;">Correct: ${key[qNum].join('/')}</div>`);
      }
    }
  });

  const band = rawToListeningBand(correctCount);

  // Show modal
  const modal = document.getElementById('results-modal');
  const scoreEl = document.getElementById('result-score');
  const bandEl = document.getElementById('result-band');
  const detailsEl = document.getElementById('result-details');
  
  if (modal && scoreEl && bandEl) {
    scoreEl.textContent = `${correctCount} / ${totalCount}`;
    bandEl.textContent = `Band ${band}`;
    
    if (detailsEl) {
      if (correctCount === totalCount) {
        detailsEl.innerHTML = '<p style="color: var(--accent-green); font-weight: 600;">Perfect score! No mistakes.</p>';
      } else {
        detailsEl.innerHTML = detailsHtml;
      }
      detailsEl.style.display = 'block';
    }
    
    modal.classList.remove('hidden');
  }

  // Save attempt to local analytics
  const attempts = JSON.parse(localStorage.getItem('ielts_listening_attempts') || '[]');
  attempts.push({
    testId: currentTestId,
    score: correctCount,
    total: totalCount,
    band: band,
    date: new Date().toISOString()
  });
  localStorage.setItem('ielts_listening_attempts', JSON.stringify(attempts));
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('listening-parts-container')) {
    initListeningEngine();
  }
});
