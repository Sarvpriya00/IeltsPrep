/**
 * IELTS Speaking Simulator & 4-Criteria Band Calculator
 */

import { speakingData } from '../data/speakingData.js';
import { calculateSpeakingBand } from '../data/logicData.js';

let prepTimerInterval = null;
let prepSeconds = 60;

export function initSpeakingStudio() {
  renderTopics();

  // Score Calculator Inputs
  const inputs = ['fc', 'lr', 'gra', 'p'];
  inputs.forEach(id => {
    const el = document.getElementById(`score-${id}`);
    if (el) {
      el.addEventListener('change', computeSpeakingScore);
    }
  });

  // Cue card prep timer
  const timerBtn = document.getElementById('start-prep-timer');
  if (timerBtn) {
    timerBtn.addEventListener('click', startPrepTimer);
  }
}

function renderTopics() {
  const container = document.getElementById('speaking-topics-container');
  if (!container) return;

  let html = '';

  speakingData.parts.forEach(p => {
    html += `
      <div class="card" style="margin-bottom: 1.5rem;">
        <h3 class="card-title" style="color: var(--accent-blue);">${p.title}</h3>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1rem;">Duration: ${p.duration}</p>
    `;

    if (p.topics) {
      p.topics.forEach(t => {
        html += `
          <div style="margin-bottom: 1rem;">
            <h4 style="margin-bottom: 0.4rem; color: var(--accent-purple);">${t.name}</h4>
            <ul style="padding-left: 1.25rem;">
              ${t.questions.map(q => `<li style="margin-bottom: 0.3rem;">${q}</li>`).join('')}
            </ul>
          </div>
        `;
      });
    }

    if (p.cards) {
      p.cards.forEach(card => {
        html += `
          <div style="background: var(--bg-primary); padding: 1rem; border-radius: 8px; margin-bottom: 1rem; border: 1px solid var(--border-color);">
            <h4 style="color: var(--accent-orange); margin-bottom: 0.5rem;">Topic: ${card.topic}</h4>
            <p style="font-size: 0.9rem; font-weight: 500;">You should say:</p>
            <ul style="padding-left: 1.25rem; margin-bottom: 0.75rem;">
              ${card.bullets.map(b => `<li style="font-size: 0.9rem;">${b}</li>`).join('')}
            </ul>
            <p style="font-size: 0.85rem; color: var(--text-secondary);"><strong>Follow-up:</strong> ${card.followUp}</p>
          </div>
        `;
      });
    }

    html += `</div>`;
  });

  container.innerHTML = html;
}

function startPrepTimer() {
  if (prepTimerInterval) clearInterval(prepTimerInterval);
  prepSeconds = 60;
  const display = document.getElementById('prep-timer-display');

  prepTimerInterval = setInterval(() => {
    if (prepSeconds <= 0) {
      clearInterval(prepTimerInterval);
      if (display) display.textContent = "Time is up! Begin speaking for 2 minutes.";
      return;
    }
    prepSeconds--;
    if (display) display.textContent = `Preparation Time: ${prepSeconds}s remaining`;
  }, 1000);
}

function computeSpeakingScore() {
  const fc = Number(document.getElementById('score-fc')?.value || 0);
  const lr = Number(document.getElementById('score-lr')?.value || 0);
  const gra = Number(document.getElementById('score-gra')?.value || 0);
  const p = Number(document.getElementById('score-p')?.value || 0);

  const band = calculateSpeakingBand(fc, lr, gra, p);
  const resultEl = document.getElementById('speaking-band-result');
  if (resultEl) {
    resultEl.textContent = band > 0 ? `Estimated Band: ${band}` : 'Select criteria scores';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('speaking-topics-container')) {
    initSpeakingStudio();
  }
});
