/**
 * IELTS Interactive Writing Exercises Logic Engine
 */

import { exerciseData } from '../data/exerciseData.js';

let currentReorderState = [];

export function initExercisesPage() {
  renderReorderExercise(0);
  renderThesisExercise(0);
  renderOverviewExercise(0);
}

// Exercise 1: Structural Reordering Challenge
function renderReorderExercise(index) {
  const container = document.getElementById('reorder-exercise-container');
  if (!container) return;

  const ex = exerciseData.reorderExercises[index] || exerciseData.reorderExercises[0];
  
  // Clone & shuffle blocks if initial
  if (!currentReorderState.length || currentReorderState[0].exId !== ex.id) {
    currentReorderState = ex.blocks.map(b => ({ ...b, exId: ex.id })).sort(() => Math.random() - 0.5);
  }

  let html = `
    <div class="card" style="margin-bottom: 2rem;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 1rem;">
        <h3 class="card-title" style="margin:0; color: var(--accent-blue);">🏋️ Exercise 1: ${ex.title}</h3>
        <span class="badge" style="background: var(--border-color); color: var(--text-primary);">${ex.promptTitle}</span>
      </div>

      <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 1rem;">
        Arrange the scrambled paragraphs below into the <strong>correct IELTS structural sequence</strong> (Introduction ➔ Overview/Thesis ➔ Body 1 ➔ Body 2/Conclusion). Use the Move Up / Move Down buttons.
      </p>

      <div id="reorder-blocks-list" style="display:flex; flex-direction:column; gap: 0.75rem; margin-bottom: 1.25rem;">
        ${currentReorderState.map((b, idx) => `
          <div style="background: var(--bg-primary); border: 1px solid var(--border-color); padding: 1rem; border-radius: 8px; display: flex; gap: 1rem; align-items: center;">
            <div style="font-size: 1.25rem; font-weight: 800; color: var(--text-muted); width: 30px;">#${idx + 1}</div>
            <div style="flex: 1;">
              <span class="badge" style="background: var(--accent-purple); color: #fff; font-size: 0.75rem; margin-bottom: 0.3rem; display: inline-block;">${b.type}</span>
              <p style="font-size: 0.9rem; line-height: 1.5; margin: 0;">${b.text}</p>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem;">
              <button class="btn btn-secondary" style="padding: 0.2rem 0.5rem; font-size: 0.75rem;" ${idx === 0 ? 'disabled' : ''} onclick="window.moveBlock(${idx}, -1)">▲ Up</button>
              <button class="btn btn-secondary" style="padding: 0.2rem 0.5rem; font-size: 0.75rem;" ${idx === currentReorderState.length - 1 ? 'disabled' : ''} onclick="window.moveBlock(${idx}, 1)">▼ Down</button>
            </div>
          </div>
        `).join('')}
      </div>

      <div style="display:flex; justify-content:space-between; align-items:center;">
        <button class="btn btn-primary" onclick="window.checkReorderOrder('${ex.id}')">Check Structural Sequence</button>
        <div id="reorder-feedback" style="font-weight: 700; font-size: 0.95rem;"></div>
      </div>
    </div>
  `;

  container.innerHTML = html;
}

window.moveBlock = function(index, dir) {
  const target = index + dir;
  if (target < 0 || target >= currentReorderState.length) return;
  const temp = currentReorderState[index];
  currentReorderState[index] = currentReorderState[target];
  currentReorderState[target] = temp;
  renderReorderExercise(0);
};

window.checkReorderOrder = function(exId) {
  const ex = exerciseData.reorderExercises.find(e => e.id === exId);
  if (!ex) return;

  const currentIds = currentReorderState.map(b => b.id);
  const isCorrect = JSON.stringify(currentIds) === JSON.stringify(ex.correctOrder);

  const feedbackEl = document.getElementById('reorder-feedback');
  if (feedbackEl) {
    if (isCorrect) {
      feedbackEl.style.color = 'var(--accent-green)';
      feedbackEl.textContent = '🎉 Perfect! You mastered the correct IELTS structural sequence!';
    } else {
      feedbackEl.style.color = 'var(--accent-red)';
      feedbackEl.textContent = '❌ Not quite right. Remember: Intro ➔ Overview/Thesis ➔ Body 1 ➔ Body 2/Conclusion.';
    }
  }
};

// Exercise 2: Essay Type & Thesis Builder
function renderThesisExercise(index) {
  const container = document.getElementById('thesis-exercise-container');
  if (!container) return;

  const ex = exerciseData.thesisExercises[index] || exerciseData.thesisExercises[0];

  let html = `
    <div class="card" style="margin-bottom: 2rem;">
      <h3 class="card-title" style="color: var(--accent-purple);">✍️ Exercise 2: Essay Classification & Thesis Builder</h3>
      
      <div style="background: var(--bg-primary); padding: 1rem; border-radius: 8px; margin-bottom: 1.25rem; border-left: 4px solid var(--accent-purple);">
        <p style="font-size: 0.95rem; font-weight: 600; margin:0;">Prompt: "${ex.prompt}"</p>
      </div>

      <!-- Step 1: Select Essay Type -->
      <div class="form-group">
        <label class="form-label">Step 1: Select Essay Classification Type</label>
        <select id="user-essay-type" class="form-select">
          <option value="">Choose essay type...</option>
          ${ex.essayTypeOptions.map(opt => `<option value="${opt}">${opt}</option>`).join('')}
        </select>
      </div>

      <!-- Step 2: Select Best Paraphrase -->
      <div class="form-group">
        <label class="form-label">Step 2: Select Best Introduction Paraphrase</label>
        <select id="user-paraphrase" class="form-select">
          <option value="">Choose paraphrase...</option>
          ${ex.paraphraseOptions.map((opt, idx) => `<option value="${idx}">${opt}</option>`).join('')}
        </select>
      </div>

      <!-- Step 3: Select Best Thesis Statement -->
      <div class="form-group">
        <label class="form-label">Step 3: Select Strongest Thesis Statement</label>
        <select id="user-thesis" class="form-select">
          <option value="">Choose thesis statement...</option>
          ${ex.thesisOptions.map((opt, idx) => `<option value="${idx}">${opt}</option>`).join('')}
        </select>
      </div>

      <div style="display:flex; justify-content:space-between; align-items:center; margin-top: 1.5rem;">
        <button class="btn btn-primary" onclick="window.checkThesisAnswers('${ex.id}')">Validate Introduction & Thesis</button>
        <div id="thesis-feedback" style="font-weight: 700; font-size: 0.95rem;"></div>
      </div>
    </div>
  `;

  container.innerHTML = html;
}

window.checkThesisAnswers = function(exId) {
  const ex = exerciseData.thesisExercises.find(e => e.id === exId);
  if (!ex) return;

  const userType = document.getElementById('user-essay-type')?.value;
  const userPara = Number(document.getElementById('user-paraphrase')?.value);
  const userThesis = Number(document.getElementById('user-thesis')?.value);

  const feedbackEl = document.getElementById('thesis-feedback');
  if (!feedbackEl) return;

  if (userType === ex.correctType && userPara === ex.correctParaphraseIndex && userThesis === ex.correctThesisIndex) {
    feedbackEl.style.color = 'var(--accent-green)';
    feedbackEl.textContent = '🌟 Band 8.5+ Introduction! Perfect essay classification and clear thesis statement.';
  } else {
    feedbackEl.style.color = 'var(--accent-red)';
    feedbackEl.textContent = `❌ Check your choices. Essay Type should be: "${ex.correctType}".`;
  }
};

// Exercise 3: Overview Spotter
function renderOverviewExercise(index) {
  const container = document.getElementById('overview-exercise-container');
  if (!container) return;

  const ex = exerciseData.overviewExercises[index] || exerciseData.overviewExercises[0];

  let html = `
    <div class="card">
      <h3 class="card-title" style="color: var(--accent-green);">📊 Exercise 3: Task 1 Overview Spotter</h3>
      <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 1rem;">
        Which of the following paragraphs represents a <strong>Band 8.0+ Task 1 Overview</strong> for <em>${ex.taskTitle}</em>?
      </p>

      <div style="display:flex; flex-direction:column; gap: 1rem;">
        ${ex.overviews.map((ov, idx) => `
          <div class="card" style="background: var(--bg-primary); cursor: pointer; border-left: 4px solid ${ov.isBand8 ? 'var(--accent-green)' : 'var(--accent-red)'};" onclick="alert('${ov.explanation.replace(/'/g, "\\'")}')">
            <p style="font-size: 0.95rem; margin-bottom: 0.5rem; line-height: 1.6;">"${ov.text}"</p>
            <span class="badge" style="background: ${ov.isBand8 ? 'var(--accent-green)' : 'var(--accent-red)'}; color: #fff;">
              ${ov.isBand8 ? '✓ Band 8.0+ Exemplar' : '❌ Band 5.5 Weak Sample'} (Click to view explanation)
            </span>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  container.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('reorder-exercise-container')) {
    initExercisesPage();
  }
});
