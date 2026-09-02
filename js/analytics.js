/**
 * Local Analytics & Performance Metrics Summary Engine
 */

import { getProfile } from './app.js';
import { calculateOverallBand } from '../data/logicData.js';

export function initAnalytics() {
  const profile = getProfile();

  // Load listening attempts
  const listening = JSON.parse(localStorage.getItem('ielts_listening_attempts') || '[]');
  const reading = JSON.parse(localStorage.getItem('ielts_reading_attempts') || '[]');

  const latestListeningBand = listening.length > 0 ? listening[listening.length - 1].band : '-';
  const latestReadingBand = reading.length > 0 ? reading[reading.length - 1].band : '-';

  const overall = calculateOverallBand(
    Number(latestListeningBand) || 0,
    Number(latestReadingBand) || 0,
    7.5,
    7.5
  ) || '-';

  const statsContainer = document.getElementById('analytics-stats-container');
  if (statsContainer) {
    statsContainer.innerHTML = `
      <div class="card">
        <h4 style="color:var(--text-muted);">Target Overall</h4>
        <div style="font-size: 2.25rem; font-weight: 800; color: var(--accent-blue);">${profile.target_overall}</div>
      </div>
      <div class="card">
        <h4 style="color:var(--text-muted);">Estimated Overall</h4>
        <div style="font-size: 2.25rem; font-weight: 800; color: var(--accent-green);">${overall}</div>
      </div>
      <div class="card">
        <h4 style="color:var(--text-muted);">Listening High</h4>
        <div style="font-size: 2.25rem; font-weight: 800; color: var(--accent-purple);">${latestListeningBand}</div>
      </div>
      <div class="card">
        <h4 style="color:var(--text-muted);">Reading High</h4>
        <div style="font-size: 2.25rem; font-weight: 800; color: var(--accent-orange);">${latestReadingBand}</div>
      </div>
    `;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('analytics-stats-container')) {
    initAnalytics();
  }
});
