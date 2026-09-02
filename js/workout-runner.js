/**
 * Daily Training Workout Runner (10-15 Minute Step-by-Step Exercise Session)
 */

import { grammarData } from '../data/training/grammarData.js';
import { vocabData } from '../data/training/vocabData.js';
import { sentenceData } from '../data/training/sentenceData.js';
import { cohesionData } from '../data/training/cohesionData.js';
import { task1Data } from '../data/training/task1Data.js';
import { task2Data } from '../data/training/task2Data.js';
import { renderExercise } from './training-engine.js';
import { getGamificationState, calculateLevel } from './gamification.js';

let workoutQueue = [];
let currentIndex = 0;

export function initWorkoutRunner() {
  // Aggregate workout queue (10 questions mix)
  workoutQueue = [
    grammarData[0], // Subject-Verb Agreement Basic
    grammarData[1], // SVA Intermediate: 'The number of'
    vocabData[0],    // Spelling: Environment
    vocabData[3],    // Collocations: Take measures
    sentenceData[0], // Sentence Lab Level 1
    sentenceData[1], // Sentence Lab Level 2: Due to
    cohesionData[0], // Topic sentence
    task1Data[0],    // Task 1 Trend verb (35% emphasis)
    task2Data[0],    // Task 2 Argument chain (65% emphasis)
    task2Data[1]     // Task 2 Thesis statement
  ];

  currentIndex = 0;
  loadCurrentQuestion();
}

function loadCurrentQuestion() {
  const container = document.getElementById('workout-runner-container');
  const progressFill = document.getElementById('workout-progress-fill');
  const qNumDisplay = document.getElementById('q-number-display');

  if (currentIndex >= workoutQueue.length) {
    renderCompletionScreen(container);
    return;
  }

  if (progressFill) {
    const pct = Math.round((currentIndex / workoutQueue.length) * 100);
    progressFill.style.width = `${pct}%`;
  }

  if (qNumDisplay) {
    qNumDisplay.textContent = `Question ${currentIndex + 1} of ${workoutQueue.length}`;
  }

  const currentItem = workoutQueue[currentIndex];
  renderExercise(container, currentItem, () => {
    currentIndex++;
    loadCurrentQuestion();
  });
}

function renderCompletionScreen(container) {
  if (!container) return;

  const state = getGamificationState();
  const levelInfo = calculateLevel(state.xp);

  container.innerHTML = `
    <div class="workout-card" style="text-align: center; padding: 3rem 2rem;">
      <h1 style="font-size: 3rem; color: var(--tr-green); margin-bottom: 0.5rem;">🎉 Workout Complete!</h1>
      <p style="font-size: 1.25rem; color: var(--tr-text-sub); margin-bottom: 1.5rem;">You finished today's 10-exercise IELTS Academic Writing Workout!</p>

      <div style="display: flex; justify-content: center; gap: 2rem; margin-bottom: 2rem;">
        <div style="background: var(--tr-bg); padding: 1rem 2rem; border-radius: 12px; border: 1px solid var(--tr-border);">
          <div style="font-size: 2rem; font-weight: 800; color: var(--tr-orange);">🔥 ${state.streak} Days</div>
          <div style="font-size: 0.85rem; color: var(--tr-text-muted);">Current Streak</div>
        </div>
        <div style="background: var(--tr-bg); padding: 1rem 2rem; border-radius: 12px; border: 1px solid var(--tr-border);">
          <div style="font-size: 2rem; font-weight: 800; color: var(--tr-yellow);">⭐ ${state.xp} XP</div>
          <div style="font-size: 0.85rem; color: var(--tr-text-muted);">Total XP Earned</div>
        </div>
      </div>

      <p style="font-weight: 700; color: var(--tr-primary); font-size: 1.1rem; margin-bottom: 2rem;">${levelInfo.title}</p>

      <a href="index.html" class="btn btn-primary" style="padding: 0.85rem 2rem; font-size: 1.1rem; text-decoration: none;">
        Return to Training Dashboard
      </a>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('workout-runner-container')) {
    initWorkoutRunner();
  }
});
