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
    testSelector.innerHTML = Object.keys(readingData).map(key => {
      const t = readingData[key];
      return `<option value="${key}">${t.title || key}</option>`;
    }).join('');
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

  initHighlightEngine();
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

  restorePassageHighlights();

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
      if (qGroup.noteTitle || qGroup.sections) {
        qHtml += `<div class="cd-note-box" style="border: 1.5px solid var(--border-color, #cbd5e1); background: var(--bg-surface, #f8fafc); border-radius: 8px; padding: 1.25rem; margin-top: 0.75rem;">`;
        if (qGroup.noteTitle) {
          qHtml += `<h4 style="text-align: center; font-weight: 700; font-size: 1.1rem; margin-bottom: 1rem; color: var(--text-primary); border-bottom: 1px solid var(--border-color, #e2e8f0); padding-bottom: 0.5rem;">${qGroup.noteTitle}</h4>`;
        }
        if (qGroup.sections) {
          qGroup.sections.forEach(sec => {
            if (sec.title) {
              qHtml += `<p style="font-weight: 700; font-size: 0.98rem; margin-top: 1rem; margin-bottom: 0.4rem; color: var(--text-primary);">${sec.title}</p>`;
            }
            if (sec.bullets) {
              qHtml += `<ul style="list-style-type: disc; padding-left: 1.35rem; margin-bottom: 0.75rem;">`;
              sec.bullets.forEach(b => {
                if (b.type === 'info') {
                  qHtml += `<li style="font-size: 0.93rem; margin-bottom: 0.4rem; color: var(--text-secondary, #475569); line-height: 1.5;">${b.text}</li>`;
                } else if (b.type === 'question') {
                  const val = userReadingAnswers[b.num] || '';
                  const inputHtml = `<input type="text" id="read-q-${b.num}" class="cd-input" value="${val}" style="width: 140px;" onchange="window.handleReadingAns(${b.num}, this.value)" />`;
                  const labelHtml = b.text.replace('____', inputHtml);
                  qHtml += `
                    <li id="q-block-${b.num}" style="font-size: 0.93rem; margin-bottom: 0.45rem; color: var(--text-primary); line-height: 1.5;">
                      <strong>Q${b.num}.</strong> ${labelHtml}
                    </li>
                  `;
                }
              });
              qHtml += `</ul>`;
            }
          });
        }
        qHtml += `</div>`;
      } else {
        if (qGroup.summaryTitle) {
          qHtml += `<h4 style="text-align: center; font-weight: 700; font-size: 1.05rem; margin-top: 0.75rem; margin-bottom: 0.75rem; color: var(--text-primary);">${qGroup.summaryTitle}</h4>`;
        }
        qGroup.items.forEach(item => {
          const val = userReadingAnswers[item.num] || '';
          const inputHtml = `<input type="text" id="read-q-${item.num}" class="cd-input" value="${val}" style="width: 140px;" onchange="window.handleReadingAns(${item.num}, this.value)" />`;
          qHtml += `
            <div id="q-block-${item.num}" style="margin-bottom: 0.75rem; font-size: 0.95rem; line-height: 1.6;">
              <span><strong>Q${item.num}.</strong> ${item.label.replace('____', inputHtml)}</span>
            </div>
          `;
        });
      }
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
    } else if (qGroup.type === 'table') {
      if (qGroup.tableTitle) {
        qHtml += `<h4 style="text-align: center; font-weight: 700; font-size: 1.05rem; margin-top: 0.75rem; margin-bottom: 0.75rem; color: var(--text-primary);">${qGroup.tableTitle}</h4>`;
      }
      if (qGroup.headers && qGroup.rows) {
        qHtml += `<table style="width: 100%; border-collapse: collapse; margin-top: 0.75rem; margin-bottom: 1rem; border: 1px solid var(--border-color, #cbd5e1); font-size: 0.92rem;">`;
        qHtml += `<thead><tr style="background: var(--bg-surface-elevated, #f1f5f9);">`;
        qGroup.headers.forEach(h => {
          qHtml += `<th style="border: 1px solid var(--border-color, #cbd5e1); padding: 8px 12px; text-align: left; font-weight: 700; color: var(--text-primary);">${h}</th>`;
        });
        qHtml += `</tr></thead><tbody>`;
        qGroup.rows.forEach(row => {
          qHtml += `<tr>`;
          row.forEach(cell => {
            let cellText = cell;
            cellText = cellText.replace(/(\d+)\s*____/g, (match, qNum) => {
              const val = userReadingAnswers[qNum] || '';
              return `<span id="q-block-${qNum}"><strong>Q${qNum}.</strong> <input type="text" id="read-q-${qNum}" class="cd-input" value="${val}" style="width: 120px;" onchange="window.handleReadingAns(${qNum}, this.value)" /></span>`;
            });
            cellText = cellText.replace(/\n/g, '<br/>');
            qHtml += `<td style="border: 1px solid var(--border-color, #cbd5e1); padding: 8px 12px; vertical-align: top; color: var(--text-primary);">${cellText}</td>`;
          });
          qHtml += `</tr>`;
        });
        qHtml += `</tbody></table>`;
      }
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

/* ----------------------------------------------------
   IELTS Academic Reading Highlight Engine
   ---------------------------------------------------- */
let activeHighlightColor = 'yellow';
let currentSelectionRange = null;

function initHighlightEngine() {
  const clearBtn = document.getElementById('btn-clear-passage-hl');
  if (clearBtn) {
    clearBtn.addEventListener('click', clearPassageHighlights);
  }

  // Global document click to close popovers/context menu when clicking outside
  document.addEventListener('click', (e) => {
    const popover = document.getElementById('highlight-popover-toolbar');
    const menu = document.getElementById('ielts-context-menu');
    if (popover && !popover.contains(e.target) && !e.target.closest('mark.ielts-highlight')) {
      popover.style.display = 'none';
    }
    if (menu && !menu.contains(e.target)) {
      menu.style.display = 'none';
    }
  });

  // Attach selection & contextmenu event listeners to the reading viewport
  const viewport = document.querySelector('.reading-viewport');
  if (viewport) {
    viewport.addEventListener('mouseup', handleTextSelection);
    viewport.addEventListener('keyup', handleTextSelection);
    viewport.addEventListener('contextmenu', handleContextMenu);
    viewport.addEventListener('click', handleHighlightClick);
  }
}

function restorePassageHighlights() {
  const textBody = document.getElementById('passage-text-body');
  if (!textBody) return;

  const savedHtml = localStorage.getItem(`ielts_reading_hl_${currentTestId}_p${activePassageNum}`);
  if (savedHtml) {
    textBody.innerHTML = savedHtml;
  }
  updateHighlightCount();
}

function savePassageHighlights() {
  const textBody = document.getElementById('passage-text-body');
  if (!textBody) return;

  localStorage.setItem(`ielts_reading_hl_${currentTestId}_p${activePassageNum}`, textBody.innerHTML);
  updateHighlightCount();
}

function updateHighlightCount() {
  const textBody = document.getElementById('passage-text-body');
  const countEl = document.getElementById('passage-hl-count');
  const clearBtn = document.getElementById('btn-clear-passage-hl');

  if (!textBody) return;
  const marks = textBody.querySelectorAll('mark.ielts-highlight');
  const count = marks.length;

  if (countEl) {
    countEl.textContent = `🖍 ${count} ${count === 1 ? 'Highlight' : 'Highlights'}`;
  }
  if (clearBtn) {
    clearBtn.style.display = count > 0 ? 'inline-block' : 'none';
  }
}

function clearPassageHighlights() {
  const textBody = document.getElementById('passage-text-body');
  if (!textBody) return;

  const marks = textBody.querySelectorAll('mark.ielts-highlight');
  marks.forEach(mark => removeHighlightNode(mark, false));
  savePassageHighlights();
  hideToolbarAndMenu();
}

function removeHighlightNode(markEl, shouldSave = true) {
  if (!markEl) return;
  const parent = markEl.parentNode;
  while (markEl.firstChild) {
    parent.insertBefore(markEl.firstChild, markEl);
  }
  parent.removeChild(markEl);
  parent.normalize();
  if (shouldSave) {
    savePassageHighlights();
  }
}

/* Text Selection Handler for Floating Toolbar */
function handleTextSelection(e) {
  if (e.target.closest('#highlight-popover-toolbar') || e.target.closest('#ielts-context-menu')) {
    return;
  }

  const sel = window.getSelection();
  if (!sel || sel.isCollapsed || !sel.rangeCount) {
    const popover = document.getElementById('highlight-popover-toolbar');
    if (popover && !e.target.closest('mark.ielts-highlight')) {
      popover.style.display = 'none';
    }
    return;
  }

  const range = sel.getRangeAt(0);
  const container = range.commonAncestorContainer;
  const passagePane = document.getElementById('passage-content-pane');
  const questionsPane = document.getElementById('questions-content-pane');

  if (!passagePane.contains(container) && !questionsPane.contains(container)) {
    return;
  }

  currentSelectionRange = range.cloneRange();
  showFloatingToolbar(range);
}

function showFloatingToolbar(range, targetMark = null) {
  let popover = document.getElementById('highlight-popover-toolbar');
  if (!popover) {
    popover = document.createElement('div');
    popover.id = 'highlight-popover-toolbar';
    popover.className = 'highlight-popover-toolbar';
    document.body.appendChild(popover);
  }

  const isExistingMark = Boolean(targetMark);

  popover.innerHTML = `
    <button class="hl-tb-btn" id="hl-btn-word" title="Highlight Word">
      🔤 Word
    </button>
    <button class="hl-tb-btn" id="hl-btn-sentence" title="Highlight Full Sentence">
      📝 Sentence
    </button>
    <button class="hl-tb-btn" id="hl-btn-range" title="Highlight Selection">
      🖍 Highlight
    </button>
    <div class="hl-tb-divider"></div>
    <div class="hl-color-dot" data-color="yellow" style="background:#fef08a;" title="Yellow Highlight"></div>
    <div class="hl-color-dot" data-color="green" style="background:#bbf7d0;" title="Green Highlight"></div>
    <div class="hl-color-dot" data-color="cyan" style="background:#bae6fd;" title="Cyan Highlight"></div>
    <div class="hl-color-dot" data-color="pink" style="background:#fbcfe8;" title="Pink Highlight"></div>
    ${isExistingMark ? `
      <div class="hl-tb-divider"></div>
      <button class="hl-tb-btn" id="hl-btn-remove" style="color:#ff6b6b;" title="Remove Highlight">
        ❌ Clear
      </button>
    ` : ''}
  `;

  popover.querySelector('#hl-btn-word').onclick = () => applyHighlightMode('word', targetMark);
  popover.querySelector('#hl-btn-sentence').onclick = () => applyHighlightMode('sentence', targetMark);
  popover.querySelector('#hl-btn-range').onclick = () => applyHighlightMode('selection', targetMark);

  if (isExistingMark) {
    popover.querySelector('#hl-btn-remove').onclick = () => {
      removeHighlightNode(targetMark);
      popover.style.display = 'none';
    };
  }

  popover.querySelectorAll('.hl-color-dot').forEach(dot => {
    dot.onclick = () => {
      activeHighlightColor = dot.getAttribute('data-color');
      if (isExistingMark) {
        targetMark.className = `ielts-highlight ielts-hl-${activeHighlightColor}`;
        savePassageHighlights();
      } else {
        applyHighlightMode('selection', null);
      }
    };
  });

  const rect = (targetMark || range).getBoundingClientRect();
  const popoverWidth = 260;
  let left = rect.left + rect.width / 2 - popoverWidth / 2 + window.scrollX;
  let top = rect.top + window.scrollY - 44;

  if (left < 10) left = 10;
  if (top < 10) top = rect.bottom + window.scrollY + 8;

  popover.style.left = `${left}px`;
  popover.style.top = `${top}px`;
  popover.style.display = 'flex';
}

/* Click Handler for Existing Highlights */
function handleHighlightClick(e) {
  const mark = e.target.closest('mark.ielts-highlight');
  if (mark) {
    e.stopPropagation();
    showFloatingToolbar(null, mark);
  }
}

/* Custom Context Menu (Right Click) Handler */
function handleContextMenu(e) {
  const passagePane = document.getElementById('passage-content-pane');
  const questionsPane = document.getElementById('questions-content-pane');

  if (!passagePane.contains(e.target) && !questionsPane.contains(e.target)) {
    return;
  }

  e.preventDefault();
  const sel = window.getSelection();

  if (sel && sel.rangeCount && !sel.isCollapsed) {
    currentSelectionRange = sel.getRangeAt(0).cloneRange();
  } else {
    if (document.caretRangeFromPoint) {
      currentSelectionRange = document.caretRangeFromPoint(e.clientX, e.clientY);
    } else if (document.caretPositionFromPoint) {
      const pos = document.caretPositionFromPoint(e.clientX, e.clientY);
      if (pos) {
        currentSelectionRange = document.createRange();
        currentSelectionRange.setStart(pos.offsetNode, pos.offset);
        currentSelectionRange.collapse(true);
      }
    }
  }

  const targetMark = e.target.closest('mark.ielts-highlight');
  showContextMenu(e.clientX, e.clientY, targetMark);
}

function showContextMenu(x, y, targetMark = null) {
  let menu = document.getElementById('ielts-context-menu');
  if (!menu) {
    menu = document.createElement('div');
    menu.id = 'ielts-context-menu';
    menu.className = 'ielts-context-menu';
    document.body.appendChild(menu);
  }

  menu.innerHTML = `
    <div class="ielts-cm-item" id="cm-hl-word">
      <span>🔤 Highlight Word</span>
    </div>
    <div class="ielts-cm-item" id="cm-hl-sentence">
      <span>📝 Highlight Sentence</span>
    </div>
    <div class="ielts-cm-item" id="cm-hl-selection">
      <span>🖍 Highlight Selection</span>
    </div>
    ${targetMark ? `
      <div class="ielts-cm-divider"></div>
      <div class="ielts-cm-item danger" id="cm-hl-remove">
        <span>❌ Clear Highlight</span>
      </div>
    ` : ''}
    <div class="ielts-cm-divider"></div>
    <div class="ielts-cm-item danger" id="cm-hl-clear-all">
      <span>🧹 Clear All Passage Highlights</span>
    </div>
  `;

  menu.querySelector('#cm-hl-word').onclick = () => {
    applyHighlightMode('word', targetMark);
    menu.style.display = 'none';
  };
  menu.querySelector('#cm-hl-sentence').onclick = () => {
    applyHighlightMode('sentence', targetMark);
    menu.style.display = 'none';
  };
  menu.querySelector('#cm-hl-selection').onclick = () => {
    applyHighlightMode('selection', targetMark);
    menu.style.display = 'none';
  };
  if (targetMark) {
    menu.querySelector('#cm-hl-remove').onclick = () => {
      removeHighlightNode(targetMark);
      menu.style.display = 'none';
    };
  }
  menu.querySelector('#cm-hl-clear-all').onclick = () => {
    clearPassageHighlights();
    menu.style.display = 'none';
  };

  let left = x;
  let top = y;
  if (x + 200 > window.innerWidth) left = window.innerWidth - 200;
  if (y + 180 > window.innerHeight) top = window.innerHeight - 180;

  menu.style.left = `${left}px`;
  menu.style.top = `${top}px`;
  menu.style.display = 'block';
}

function hideToolbarAndMenu() {
  const popover = document.getElementById('highlight-popover-toolbar');
  const menu = document.getElementById('ielts-context-menu');
  if (popover) popover.style.display = 'none';
  if (menu) menu.style.display = 'none';
}

/* Core Highlight Application Router */
function applyHighlightMode(mode, targetMark = null) {
  hideToolbarAndMenu();

  let range = currentSelectionRange;
  const sel = window.getSelection();
  if (sel && sel.rangeCount && !sel.isCollapsed) {
    range = sel.getRangeAt(0);
  }

  if (!range) return;

  if (mode === 'sentence') {
    range = expandRangeToSentence(range);
  } else if (mode === 'word') {
    range = expandRangeToWord(range);
  }

  if (!range || range.collapsed) return;

  applyHighlightToDOMRange(range, activeHighlightColor);
  savePassageHighlights();
}

function expandRangeToWord(range) {
  let container = range.commonAncestorContainer;
  while (container && container.nodeType !== Node.ELEMENT_NODE) {
    container = container.parentNode;
  }
  if (!container) return range;

  const fullText = container.textContent;
  let startOffset = getOffsetInContainer(container, range.startContainer, range.startOffset);
  let endOffset = getOffsetInContainer(container, range.endContainer, range.endOffset);

  let wordStart = startOffset;
  while (wordStart > 0 && /[\w'-]/.test(fullText[wordStart - 1])) {
    wordStart--;
  }

  let wordEnd = endOffset;
  while (wordEnd < fullText.length && /[\w'-]/.test(fullText[wordEnd])) {
    wordEnd++;
  }

  const newRange = document.createRange();
  setRangeByOffsets(container, newRange, wordStart, wordEnd);
  return newRange;
}

function expandRangeToSentence(range) {
  let container = range.commonAncestorContainer;
  while (container && container.nodeType !== Node.ELEMENT_NODE) {
    container = container.parentNode;
  }
  if (!container) return range;

  const fullText = container.textContent;
  let startOffset = getOffsetInContainer(container, range.startContainer, range.startOffset);
  let endOffset = getOffsetInContainer(container, range.endContainer, range.endOffset);

  let sentStart = 0;
  for (let i = startOffset - 1; i >= 0; i--) {
    const char = fullText[i];
    if (['.', '!', '?'].includes(char)) {
      if (i + 1 < fullText.length && /\s/.test(fullText[i + 1])) {
        sentStart = i + 1;
        while (sentStart < fullText.length && /\s/.test(fullText[sentStart])) {
          sentStart++;
        }
        break;
      }
    }
  }

  let sentEnd = fullText.length;
  for (let i = endOffset; i < fullText.length; i++) {
    const char = fullText[i];
    if (['.', '!', '?'].includes(char)) {
      sentEnd = i + 1;
      break;
    }
  }

  const newRange = document.createRange();
  setRangeByOffsets(container, newRange, sentStart, sentEnd);
  return newRange;
}

function getOffsetInContainer(container, targetNode, targetOffset) {
  let offset = 0;
  const iterator = document.createNodeIterator(container, NodeFilter.SHOW_TEXT, null, false);
  let currentNode;
  while ((currentNode = iterator.nextNode())) {
    if (currentNode === targetNode) {
      return offset + targetOffset;
    }
    offset += currentNode.textContent.length;
  }
  return offset;
}

function setRangeByOffsets(container, range, startOffset, endOffset) {
  let currentOffset = 0;
  let startSet = false;
  let endSet = false;
  const iterator = document.createNodeIterator(container, NodeFilter.SHOW_TEXT, null, false);
  let currentNode;

  while ((currentNode = iterator.nextNode())) {
    const nodeLen = currentNode.textContent.length;
    if (!startSet && currentOffset + nodeLen >= startOffset) {
      range.setStart(currentNode, startOffset - currentOffset);
      startSet = true;
    }
    if (!endSet && currentOffset + nodeLen >= endOffset) {
      range.setEnd(currentNode, endOffset - currentOffset);
      endSet = true;
      break;
    }
    currentOffset += nodeLen;
  }
  if (!endSet && currentNode) {
    range.setEnd(currentNode, currentNode.textContent.length);
  }
}

function applyHighlightToDOMRange(range, color) {
  try {
    const mark = document.createElement('mark');
    mark.className = `ielts-highlight ielts-hl-${color}`;
    mark.dataset.hlId = `hl-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`;

    if (range.startContainer === range.endContainer && range.startContainer.nodeType === Node.TEXT_NODE) {
      range.surroundContents(mark);
    } else {
      const contents = range.extractContents();
      mark.appendChild(contents);
      range.insertNode(mark);
    }
  } catch (err) {
    console.warn('Fallback highlight application:', err);
    try {
      document.execCommand('hiliteColor', false, color === 'yellow' ? '#fef08a' : color);
    } catch (e) {
      // Ignore
    }
  }

  window.getSelection().removeAllRanges();
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('reading-test-selector')) {
    initReadingEngine();
  }
});
