/**
 * Writing Masterclass Tutorial Logic & Interactive Reference Cards
 */

import { tutorialData } from '../data/tutorialData.js';

export function initTutorialPage() {
  renderBlueprints();
  renderScoringCriteria();
  renderVocabularyCheatSheet();
}

function renderBlueprints() {
  const container = document.getElementById('blueprints-container');
  if (!container) return;

  const t1 = tutorialData.blueprints.task1;
  const t2 = tutorialData.blueprints.task2;

  let html = `
    <!-- Task 1 Blueprint Card -->
    <div class="card" style="margin-bottom: 2rem; border-left: 4px solid var(--accent-blue);">
      <h3 class="card-title" style="color: var(--accent-blue);">${t1.title}</h3>
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.25rem; margin-top: 1rem;">
        ${t1.paragraphs.map(p => `
          <div style="background: var(--bg-primary); padding: 1rem; border-radius: 8px; border: 1px solid var(--border-color);">
            <h4 style="color: var(--accent-purple); margin-bottom: 0.4rem; font-size: 0.95rem;">${p.name}</h4>
            <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.5rem;"><strong>Purpose:</strong> ${p.purpose}</p>
            <div style="font-family: monospace; font-size: 0.8rem; background: var(--bg-card); padding: 0.5rem; border-radius: 4px; border: 1px solid var(--border-color); margin-bottom: 0.5rem;">
              "${p.template}"
            </div>
            <ul style="padding-left: 1rem; font-size: 0.8rem; color: var(--text-muted);">
              ${p.rules.map(r => `<li>${r}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Task 2 Blueprint Card -->
    <div class="card" style="margin-bottom: 2rem; border-left: 4px solid var(--accent-purple);">
      <h3 class="card-title" style="color: var(--accent-purple);">${t2.title}</h3>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; margin-top: 1rem;">
        ${t2.essayTypes.map(e => `
          <div style="background: var(--bg-primary); padding: 1rem; border-radius: 8px; border: 1px solid var(--border-color);">
            <h4 style="color: var(--accent-blue); margin-bottom: 0.5rem; font-size: 0.95rem;">${e.type}</h4>
            <ul style="padding-left: 1.1rem; font-size: 0.85rem; line-height: 1.6;">
              ${e.structure.map(s => `<li style="margin-bottom: 0.4rem;">${s}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  container.innerHTML = html;
}

function renderScoringCriteria() {
  const container = document.getElementById('criteria-container');
  if (!container) return;

  container.innerHTML = `
    <div class="grid-4">
      ${tutorialData.scoringCriteria.map(c => `
        <div class="card">
          <span class="badge" style="background: var(--accent-blue); color: #fff; float: right;">${c.code}</span>
          <h4 style="font-size: 0.95rem; margin-bottom: 0.75rem;">${c.name}</h4>
          <ul style="padding-left: 1.1rem; font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5;">
            ${c.requirements.map(r => `<li style="margin-bottom: 0.4rem;">${r}</li>`).join('')}
          </ul>
        </div>
      `).join('')}
    </div>
  `;
}

function renderVocabularyCheatSheet() {
  const container = document.getElementById('vocab-cheat-sheet');
  if (!container) return;

  const vb = tutorialData.vocabularyBank;

  container.innerHTML = `
    <div class="card">
      <h3 class="card-title">📚 High-Scoring Task 1 Trend Vocabulary</h3>
      <div class="grid-3" style="margin-top: 1rem;">
        <div>
          <h4 style="color: var(--accent-green); margin-bottom: 0.5rem;">Upward Trends 📈</h4>
          ${vb.trendsUp.map(v => `
            <div style="margin-bottom: 0.5rem; font-size: 0.85rem;">
              <strong>${v.word}</strong>
              <div style="color: var(--text-muted); font-size: 0.8rem;">e.g. "${v.usage}"</div>
            </div>
          `).join('')}
        </div>

        <div>
          <h4 style="color: var(--accent-red); margin-bottom: 0.5rem;">Downward Trends 📉</h4>
          ${vb.trendsDown.map(v => `
            <div style="margin-bottom: 0.5rem; font-size: 0.85rem;">
              <strong>${v.word}</strong>
              <div style="color: var(--text-muted); font-size: 0.8rem;">e.g. "${v.usage}"</div>
            </div>
          `).join('')}
        </div>

        <div>
          <h4 style="color: var(--accent-orange); margin-bottom: 0.5rem;">Fluctuations / Stability 〰️</h4>
          ${vb.fluctuations.map(v => `
            <div style="margin-bottom: 0.5rem; font-size: 0.85rem;">
              <strong>${v.word}</strong>
              <div style="color: var(--text-muted); font-size: 0.8rem;">e.g. "${v.usage}"</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('blueprints-container')) {
    initTutorialPage();
  }
});
