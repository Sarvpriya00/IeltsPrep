/**
 * Authentic Computer-Delivered IELTS Reading Portal Engine
 */

import { readingData } from '../data/readingData.js';
import { rawToReadingBand } from '../data/logicData.js';

let currentTestId = 'cam21-r1';
let activePassageNum = 1;
let userReadingAnswers = {};
let timerSeconds = 60 * 60;
let timerInterval = null;
let currentFontSize = 1.0; // rem

export function initReadingEngine() {
  const testSelector = document.getElementById('reading-test-selector');
  if (testSelector) {
    testSelector.value = currentTestId;
    testSelector.addEventListener('change', (e) => {
      currentTestId = e.target.value;
      activePassageNum = 1;
      loadReadingTest(currentTestId);
    });
  }

  // Passage Tabs
  const tabs = document.querySelectorAll('.passage-tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activePassageNum = Number(tab.getAttribute('data-passage'));
      renderActivePassage();
    });
  });

  // Font Size Adjuster
  const fontInc = document.getElementById('font-inc');
  const fontDec = document.getElementById('font-dec');
  if (fontInc) {
    fontInc.addEventListener('click', () => {
      if (currentFontSize < 1.4) {
        currentFontSize += 0.1;
        applyFontSize();
      }
    });
  }
  if (fontDec) {
    fontDec.addEventListener('click', () => {
      if (currentFontSize > 0.85) {
        currentFontSize -= 0.1;
        applyFontSize();
      }
    });
  }

  // Timer
  startTimer();
  const toggleTimer = document.getElementById('toggle-reading-timer');
  const timerDisplay = document.getElementById('reading-timer-display');
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

  // Submit Button
  const submitBtn = document.getElementById('submit-reading-test');
  if (submitBtn) {
    submitBtn.addEventListener('click', gradeReadingTest);
  }

  loadReadingTest(currentTestId);
}

function loadReadingTest(testId) {
  const data = readingData[testId];
  if (!data) return;

  userReadingAnswers = JSON.parse(localStorage.getItem(`ielts_reading_ans_${testId}`) || '{}');
  renderActivePassage();
  renderQPalette();
}

function renderActivePassage() {
  const data = readingData[currentTestId];
  if (!data) return;

  const passagePane = document.getElementById('passage-content-pane');
  const questionsPane = document.getElementById('questions-content-pane');
  if (!passagePane || !questionsPane) return;

  const passage = data.passages.find(p => p.id === activePassageNum) || data.passages[0];

  // Render Passage Text
  passagePane.innerHTML = `
    <h2 style="color: var(--accent-blue); margin-bottom: 1rem; font-size: 1.35rem;">${passage.title}</h2>
    <div id="passage-text-body" style="white-space: pre-line; line-height: 1.75; font-size: ${currentFontSize}rem; color: var(--text-primary);">
      ${passage.text}
    </div>
  `;

  // Render Passage Questions
  let qHtml = `<h3 style="color: var(--text-primary); margin-bottom: 1rem; font-size: 1.15rem;">Passage ${passage.id} Questions</h3>`;

  passage.questions.forEach(qGroup => {
    qHtml += `
      <div class="card" style="margin-bottom: 1.25rem;">
        <p style="font-weight: 600; margin-bottom: 0.85rem; font-size: 0.95rem; line-height: 1.5; color: var(--text-primary);">${qGroup.instruction.replace(/\n/g, '<br/>')}</p>
    `;

    if (qGroup.type === 'tfng') {
      qGroup.items.forEach(item => {
        const sel = userReadingAnswers[item.num] || '';
        qHtml += `
          <div id="q-block-${item.num}" class="question-card">
            <p style="font-size: 0.95rem; margin-bottom: 0.4rem;"><strong>Q${item.num}.</strong> ${item.text}</p>
            <div style="display: flex; gap: 1rem; margin-top: 0.4rem;">
              ${['TRUE', 'FALSE', 'NOT GIVEN', 'YES', 'NO'].filter(opt => {
                if (qGroup.instruction.includes('YES')) return ['YES', 'NO', 'NOT GIVEN'].includes(opt);
                return ['TRUE', 'FALSE', 'NOT GIVEN'].includes(opt);
              }).map(opt => `
                <label style="cursor: pointer; display:flex; align-items:center; gap: 0.35rem; font-size: 0.9rem;">
                  <input type="radio" name="rq_${item.num}" value="${opt}" ${sel === opt ? 'checked' : ''} onchange="window.handleReadingAns(${item.num}, '${opt}')" />
                  <span>${opt}</span>
                </label>
              `).join('')}
            </div>
          </div>
        `;
      });
    } else if (qGroup.type === 'fill') {
      qGroup.items.forEach(item => {
        const val = userReadingAnswers[item.num] || '';
        const inputHtml = `<input type="text" id="read-q-${item.num}" class="cd-input" value="${val}" style="width: 140px;" onchange="window.handleReadingAns(${item.num}, this.value)" />`;
        qHtml += `
          <div id="q-block-${item.num}" style="margin-bottom: 0.75rem; font-size: 0.95rem;">
            <span><strong>Q${item.num}.</strong> ${item.label.replace('____', inputHtml)}</span>
          </div>
        `;
      });
    } else if (qGroup.type === 'mcq') {
      qGroup.items.forEach(item => {
        const sel = userReadingAnswers[item.num] || '';
        qHtml += `
          <div id="q-block-${item.num}" class="question-card">
            <p style="font-size: 0.95rem; margin-bottom: 0.4rem;"><strong>Q${item.num}.</strong> ${item.question}</p>
            <div style="display:flex; flex-direction:column; gap:0.4rem; margin-top:0.4rem;">
              ${item.options.map(opt => {
                const optVal = opt.substring(0, 1);
                return `
                  <label style="cursor:pointer; display:flex; align-items:center; gap:0.4rem; font-size:0.9rem;">
                    <input type="radio" name="rq_${item.num}" value="${optVal}" ${sel === optVal ? 'checked' : ''} onchange="window.handleReadingAns(${item.num}, '${optVal}')" />
                    <span>${opt}</span>
                  </label>
                `;
              }).join('')}
            </div>
          </div>
        `;
      });
    }

    qHtml += `</div>`;
  });

  questionsPane.innerHTML = qHtml;
  applyFontSize();
}

function applyFontSize() {
  const textBody = document.getElementById('passage-text-body');
  if (textBody) {
    textBody.style.fontSize = `${currentFontSize}rem`;
  }
}

function renderQPalette() {
  const paletteContainer = document.getElementById('q-palette-grid');
  if (!paletteContainer) return;

  let paletteHtml = '';
  for (let i = 1; i <= 40; i++) {
    const isAns = Boolean(userReadingAnswers[i]);
    paletteHtml += `
      <button id="q-btn-${i}" class="q-palette-btn ${isAns ? 'answered' : ''}" onclick="window.scrollToQuestion(${i})">
        ${i}
      </button>
    `;
  }

  paletteContainer.innerHTML = paletteHtml;
}

window.handleReadingAns = function(qNum, val) {
  userReadingAnswers[qNum] = val.trim();
  localStorage.setItem(`ielts_reading_ans_${currentTestId}`, JSON.stringify(userReadingAnswers));

  const btn = document.getElementById(`q-btn-${qNum}`);
  if (btn) {
    if (val.trim()) {
      btn.classList.add('answered');
    } else {
      btn.classList.remove('answered');
    }
  }
};

window.scrollToQuestion = function(qNum) {
  // Determine which passage contains qNum
  if (qNum <= 13 && activePassageNum !== 1) {
    activePassageNum = 1;
    updatePassageTabs();
    renderActivePassage();
  } else if (qNum > 13 && qNum <= 26 && activePassageNum !== 2) {
    activePassageNum = 2;
    updatePassageTabs();
    renderActivePassage();
  } else if (qNum > 26 && activePassageNum !== 3) {
    activePassageNum = 3;
    updatePassageTabs();
    renderActivePassage();
  }

  setTimeout(() => {
    const targetEl = document.getElementById(`q-block-${qNum}`);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, 100);
};

function updatePassageTabs() {
  const tabs = document.querySelectorAll('.passage-tab-btn');
  tabs.forEach(t => {
    if (Number(t.getAttribute('data-passage')) === activePassageNum) {
      t.classList.add('active');
    } else {
      t.classList.remove('active');
    }
  });
}

function startTimer() {
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    if (timerSeconds <= 0) {
      clearInterval(timerInterval);
      gradeReadingTest();
      return;
    }
    timerSeconds--;
    const m = Math.floor(timerSeconds / 60);
    const s = timerSeconds % 60;
    const timerDisplay = document.getElementById('reading-timer-display');
    if (timerDisplay) {
      timerDisplay.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    }
  }, 1000);
}

function gradeReadingTest() {
  const data = readingData[currentTestId];
  if (!data) return;

  let correct = 0;
  let total = 0;
  let detailsHtml = '<h4 style="margin-bottom: 1rem; color: var(--text-primary);">Detailed Review</h4>';

  data.passages.forEach(p => {
    p.questions.forEach(qGroup => {
      qGroup.items.forEach(item => {
        total++;
        const userVal = (userReadingAnswers[item.num] || '').trim().toUpperCase();
        const expected = item.answer.trim().toUpperCase();
        const isCorrect = userVal === expected;
        
        // Clear previous inline styling if grading multiple times
        const qBlock = document.getElementById(`q-block-${item.num}`);
        if (qBlock) {
          qBlock.style.border = '';
          const existingAns = document.getElementById(`read-ans-${item.num}`);
          if (existingAns) existingAns.remove();
        }
        const textInput = document.getElementById(`read-q-${item.num}`);
        if (textInput) {
          textInput.style.border = '';
          textInput.style.color = '';
        }

        if (isCorrect) {
          correct++;
          if (qBlock) qBlock.style.border = '2px solid var(--accent-green)';
          if (textInput) {
            textInput.style.border = '2px solid var(--accent-green)';
            textInput.style.color = 'var(--accent-green)';
          }
        } else {
          detailsHtml += `
            <div style="margin-bottom: 0.75rem; padding-bottom: 0.75rem; border-bottom: 1px solid var(--border-color);">
              <div style="font-weight: 600; color: var(--text-primary);">Question ${item.num}</div>
              <div style="color: var(--accent-red); font-size: 0.9rem;">Your answer: <strong>${userReadingAnswers[item.num] || '(blank)'}</strong></div>
              <div style="color: var(--accent-green); font-size: 0.9rem;">Correct answer: <strong>${item.answer}</strong></div>
            </div>
          `;
          
          if (textInput) {
            textInput.style.border = '2px solid var(--accent-red)';
            textInput.style.color = 'var(--accent-red)';
            textInput.insertAdjacentHTML('afterend', `<span id="read-ans-${item.num}" style="color:var(--accent-red);font-size:0.85rem;margin-left:6px;font-weight:600;">(Correct: ${item.answer})</span>`);
          } else if (qBlock) {
            qBlock.style.border = '2px solid var(--accent-red)';
            qBlock.insertAdjacentHTML('beforeend', `<div id="read-ans-${item.num}" style="color:var(--accent-red);font-size:0.85rem;margin-top:6px;font-weight:600;">Correct: ${item.answer}</div>`);
          }
        }
      });
    });
  });

  const band = rawToReadingBand(correct);

  const modal = document.getElementById('results-modal');
  const scoreEl = document.getElementById('result-score');
  const bandEl = document.getElementById('result-band');
  const detailsEl = document.getElementById('result-details');
  
  if (modal && scoreEl && bandEl) {
    scoreEl.textContent = `${correct} / 40`;
    bandEl.textContent = `Band ${band}`;
    
    if (detailsEl) {
      if (correct === total) {
        detailsEl.innerHTML = '<p style="color: var(--accent-green); font-weight: 600;">Perfect score! No mistakes.</p>';
      } else {
        detailsEl.innerHTML = detailsHtml;
      }
      detailsEl.style.display = 'block';
    }
    
    modal.classList.remove('hidden');
  }

  const attempts = JSON.parse(localStorage.getItem('ielts_reading_attempts') || '[]');
  attempts.push({
    testId: currentTestId,
    score: correct,
    total: 40,
    band: band,
    date: new Date().toISOString()
  });
  localStorage.setItem('ielts_reading_attempts', JSON.stringify(attempts));
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('reading-test-selector')) {
    initReadingEngine();
  }
});
