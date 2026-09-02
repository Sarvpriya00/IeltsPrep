/**
 * Zero-Scroll IELTS Writing Studio Workspace Engine with Column Resizer & Image Rotation
 */

import { writingData } from '../data/writingData.js';

let currentPromptId = writingData[0].id;
let sidePanelOpen = false;
let timerSeconds = 20 * 60;
let timerInterval = null;
let timerRunning = false;

// Image Rotation state
let imageRotationDegree = 0;

export function initWritingStudio() {
  const selectEl = document.getElementById('writing-prompt-select');
  if (selectEl) {
    selectEl.innerHTML = writingData.map(p => `
      <option value="${p.id}" ${p.id === currentPromptId ? 'selected' : ''}>
        Task ${p.task}: ${p.title} (${p.testBook})
      </option>
    `).join('');

    selectEl.addEventListener('change', (e) => {
      currentPromptId = Number(e.target.value);
      loadPrompt(currentPromptId);
    });
  }

  loadPrompt(currentPromptId);

  // Textarea Input Listener
  const textarea = document.getElementById('writing-response');
  if (textarea) {
    textarea.addEventListener('input', (e) => {
      updateWordCount(e.target.value);
      localStorage.setItem(`ielts_writing_draft_${currentPromptId}`, e.target.value);
    });
  }

  // Clear & Copy Draft Buttons
  const clearBtn = document.getElementById('clear-draft-btn');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (confirm('Clear your response draft for this task?')) {
        if (textarea) textarea.value = '';
        updateWordCount('');
        localStorage.removeItem(`ielts_writing_draft_${currentPromptId}`);
      }
    });
  }

  const copyBtn = document.getElementById('copy-draft-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      if (textarea && textarea.value) {
        navigator.clipboard.writeText(textarea.value);
        copyBtn.textContent = '✓ Copied!';
        setTimeout(() => { copyBtn.textContent = 'Copy'; }, 2000);
      }
    });
  }

  // Side-by-Side Model Comparison Toggle
  const toggleBtn = document.getElementById('toggle-comparison-btn');
  const closeBtn = document.getElementById('close-side-panel-btn');

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      sidePanelOpen = !sidePanelOpen;
      updateSidePanelVisibility();
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      sidePanelOpen = false;
      updateSidePanelVisibility();
    });
  }

  // Interactive Drag-to-Resize Column Handle
  initColumnResizer();

  // Layout Width Presets
  initLayoutPresets();

  // Fullscreen Image Lightbox Zoom & Rotation
  initImageLightboxAndRotation();

  // Timer Controls
  initTimerControls();
}

function loadPrompt(id) {
  const item = writingData.find(p => p.id === id);
  if (!item) return;

  const promptTitle = document.getElementById('prompt-title');
  const promptText = document.getElementById('prompt-text');
  const promptImg = document.getElementById('prompt-image');
  const promptImgWrapper = document.getElementById('prompt-img-wrapper');
  const imgControlsHeader = document.getElementById('img-controls-header');
  const targetNum = document.getElementById('target-words-num');
  const taskBadge = document.getElementById('task-badge');
  const textarea = document.getElementById('writing-response');
  const sampleContent = document.getElementById('sample-content');

  // Reset image rotation on task change
  imageRotationDegree = 0;
  applyImageRotation();

  if (promptTitle) promptTitle.textContent = item.title;
  if (promptText) promptText.textContent = item.prompt;
  if (targetNum) targetNum.textContent = item.targetWords;
  if (taskBadge) taskBadge.textContent = `Task ${item.task}`;
  if (sampleContent) sampleContent.textContent = item.sampleAnswer || 'No sample answer available for this task.';

  // Image diagram handling
  if (promptImg && promptImgWrapper) {
    if (item.image) {
      promptImg.src = item.image;
      promptImgWrapper.style.display = 'block';
      if (imgControlsHeader) imgControlsHeader.style.display = 'flex';
    } else {
      promptImgWrapper.style.display = 'none';
      if (imgControlsHeader) imgControlsHeader.style.display = 'none';
    }
  }

  // Load Saved Draft
  if (textarea) {
    const savedDraft = localStorage.getItem(`ielts_writing_draft_${id}`) || '';
    textarea.value = savedDraft;
    updateWordCount(savedDraft);
  }

  // Reset Timer to Task Default (20 mins for Task 1, 40 mins for Task 2)
  resetTimer(item.task === 1 ? 20 * 60 : 40 * 60);
}

function updateWordCount(text) {
  const item = writingData.find(p => p.id === currentPromptId);
  const target = item ? item.targetWords : 150;
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;

  const countEl = document.getElementById('word-count-display');
  if (countEl) countEl.textContent = words;
}

function updateSidePanelVisibility() {
  const sidePanel = document.getElementById('model-side-panel');
  const toggleBtn = document.getElementById('toggle-comparison-btn');

  if (sidePanel && toggleBtn) {
    if (sidePanelOpen) {
      sidePanel.classList.remove('hidden');
      toggleBtn.textContent = '✕ Close Model';
      toggleBtn.className = 'btn btn-secondary';
    } else {
      sidePanel.classList.add('hidden');
      toggleBtn.textContent = 'Compare Model';
      toggleBtn.className = 'btn btn-primary';
    }
  }
}

/* Rotate Image Logic */
function rotateImageNext() {
  imageRotationDegree = (imageRotationDegree + 90) % 360;
  applyImageRotation();
}

function applyImageRotation() {
  const imgEl = document.getElementById('prompt-image');
  const lightboxImg = document.getElementById('lightbox-img');

  const transformVal = `rotate(${imageRotationDegree}deg)`;
  if (imgEl) imgEl.style.transform = transformVal;
  if (lightboxImg) lightboxImg.style.transform = transformVal;
}

/* Interactive Drag-to-Resize Column Handle */
function initColumnResizer() {
  const resizer = document.getElementById('resizer-handle');
  const leftPanel = document.getElementById('panel-prompt');
  const mainGrid = document.getElementById('studio-main-grid');

  if (!resizer || !leftPanel || !mainGrid) return;

  let isDragging = false;

  resizer.addEventListener('mousedown', (e) => {
    isDragging = true;
    resizer.classList.add('dragging');
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const gridRect = mainGrid.getBoundingClientRect();
    let newWidth = e.clientX - gridRect.left;

    // Constrain width between 240px and 80% of grid width
    const minWidth = 240;
    const maxWidth = gridRect.width * 0.8;
    if (newWidth < minWidth) newWidth = minWidth;
    if (newWidth > maxWidth) newWidth = maxWidth;

    leftPanel.style.width = `${newWidth}px`;
  });

  document.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      resizer.classList.remove('dragging');
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    }
  });
}

/* Layout Column Width Presets */
function initLayoutPresets() {
  const promptPanel = document.getElementById('panel-prompt');
  const btnNormal = document.getElementById('btn-layout-normal');
  const btnWideImg = document.getElementById('btn-layout-wide-img');
  const btnWideEditor = document.getElementById('btn-layout-wide-editor');

  const presetBtns = [btnNormal, btnWideImg, btnWideEditor];

  function setActivePreset(activeBtn, widthStr) {
    presetBtns.forEach(b => b && b.classList.remove('active'));
    if (activeBtn) activeBtn.classList.add('active');
    if (promptPanel) promptPanel.style.width = widthStr;
  }

  if (btnNormal) btnNormal.addEventListener('click', () => setActivePreset(btnNormal, '480px'));
  if (btnWideImg) btnWideImg.addEventListener('click', () => setActivePreset(btnWideImg, '50%'));
  if (btnWideEditor) btnWideEditor.addEventListener('click', () => setActivePreset(btnWideEditor, '280px'));
}

/* Fullscreen Image Lightbox Zoom & Rotation */
function initImageLightboxAndRotation() {
  const imgEl = document.getElementById('prompt-image');
  const zoomBtn = document.getElementById('zoom-img-btn');
  const rotateBtn = document.getElementById('rotate-img-btn');
  const lightboxRotateBtn = document.getElementById('lightbox-rotate-btn');
  const lightbox = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.getElementById('close-lightbox-btn');

  function openLightbox() {
    if (imgEl && imgEl.src && lightbox && lightboxImg) {
      lightboxImg.src = imgEl.src;
      applyImageRotation();
      lightbox.classList.remove('hidden');
    }
  }

  function closeLightbox() {
    if (lightbox) lightbox.classList.add('hidden');
  }

  if (rotateBtn) rotateBtn.addEventListener('click', rotateImageNext);
  if (lightboxRotateBtn) lightboxRotateBtn.addEventListener('click', rotateImageNext);

  if (imgEl) imgEl.addEventListener('click', openLightbox);
  if (zoomBtn) zoomBtn.addEventListener('click', openLightbox);
  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });
}

/* Timer Control Logic */
function initTimerControls() {
  const toggleBtn = document.getElementById('timer-toggle-btn');
  const resetBtn = document.getElementById('timer-reset-btn');

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      if (timerRunning) {
        pauseTimer();
      } else {
        startTimer();
      }
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      const item = writingData.find(p => p.id === currentPromptId);
      resetTimer(item && item.task === 2 ? 40 * 60 : 20 * 60);
    });
  }
}

function startTimer() {
  if (timerInterval) clearInterval(timerInterval);
  timerRunning = true;
  const toggleBtn = document.getElementById('timer-toggle-btn');
  if (toggleBtn) toggleBtn.textContent = 'Pause';

  timerInterval = setInterval(() => {
    if (timerSeconds <= 0) {
      clearInterval(timerInterval);
      timerRunning = false;
      if (toggleBtn) toggleBtn.textContent = 'Start';
      alert("⏰ Time's up for this writing session!");
      return;
    }
    timerSeconds--;
    renderTimer();
  }, 1000);
}

function pauseTimer() {
  if (timerInterval) clearInterval(timerInterval);
  timerRunning = false;
  const toggleBtn = document.getElementById('timer-toggle-btn');
  if (toggleBtn) toggleBtn.textContent = 'Start';
}

function resetTimer(seconds) {
  if (timerInterval) clearInterval(timerInterval);
  timerRunning = false;
  timerSeconds = seconds;
  const toggleBtn = document.getElementById('timer-toggle-btn');
  if (toggleBtn) toggleBtn.textContent = 'Start';
  renderTimer();
}

function renderTimer() {
  const display = document.getElementById('writing-timer');
  if (display) {
    const m = Math.floor(timerSeconds / 60);
    const s = timerSeconds % 60;
    display.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('writing-prompt-select')) {
    initWritingStudio();
  }
});
