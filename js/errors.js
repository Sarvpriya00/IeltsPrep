/**
 * Personal Error Vault & Error Tracker Engine
 */

export function initErrorVault() {
  renderErrors();

  const form = document.getElementById('add-error-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const section = document.getElementById('err-section').value;
      const category = document.getElementById('err-category').value;
      const question = document.getElementById('err-question').value;
      const userAnswer = document.getElementById('err-user-ans').value;
      const correctAnswer = document.getElementById('err-correct-ans').value;
      const whyWrong = document.getElementById('err-why-wrong').value;

      const errors = JSON.parse(localStorage.getItem('ielts_error_vault') || '[]');
      errors.push({
        id: Date.now(),
        section,
        category,
        question,
        userAnswer,
        correctAnswer,
        whyWrong,
        resolved: false,
        date: new Date().toLocaleDateString()
      });

      localStorage.setItem('ielts_error_vault', JSON.stringify(errors));
      form.reset();
      renderErrors();
    });
  }
}

function renderErrors() {
  const container = document.getElementById('error-list-container');
  if (!container) return;

  const errors = JSON.parse(localStorage.getItem('ielts_error_vault') || '[]');

  if (errors.length === 0) {
    container.innerHTML = `<div class="card" style="text-align:center; padding:2rem; color:var(--text-muted);">No errors logged yet. Excellent job! Keep tracking mistakes to boost your score.</div>`;
    return;
  }

  container.innerHTML = errors.map(err => `
    <div class="card" style="margin-bottom:1rem; border-left: 4px solid ${err.resolved ? 'var(--accent-green)' : 'var(--accent-red)'};">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 0.5rem;">
        <span class="badge" style="background:var(--accent-blue); color:#fff;">${err.section.toUpperCase()}</span>
        <span style="font-size:0.8rem; color:var(--text-muted);">${err.date}</span>
      </div>
      <h4 style="margin-bottom:0.4rem;">${err.question}</h4>
      <p style="font-size:0.9rem; margin-bottom:0.25rem;"><strong>Category:</strong> ${err.category}</p>
      <p style="font-size:0.9rem; color:var(--accent-red); margin-bottom:0.25rem;"><strong>Your Answer:</strong> ${err.userAnswer}</p>
      <p style="font-size:0.9rem; color:var(--accent-green); margin-bottom:0.5rem;"><strong>Correct Answer:</strong> ${err.correctAnswer}</p>
      <p style="font-size:0.85rem; color:var(--text-secondary); background:var(--bg-primary); padding:0.5rem; border-radius:6px;">${err.whyWrong}</p>
      <div style="margin-top:0.75rem; text-align:right;">
        <button class="btn btn-secondary" style="font-size:0.8rem; padding:0.3rem 0.6rem;" onclick="window.toggleErrorResolved(${err.id})">
          ${err.resolved ? '✓ Resolved' : 'Mark Resolved'}
        </button>
      </div>
    </div>
  `).join('');
}

window.toggleErrorResolved = function(id) {
  const errors = JSON.parse(localStorage.getItem('ielts_error_vault') || '[]');
  const updated = errors.map(e => e.id === id ? { ...e, resolved: !e.resolved } : e);
  localStorage.setItem('ielts_error_vault', JSON.stringify(updated));
  renderErrors();
};

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('error-list-container')) {
    initErrorVault();
  }
});
