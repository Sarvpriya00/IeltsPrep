/**
 * Gamification Engine: Streaks, XP Points, Level Progression, and Local Mistake Review Vault
 */

const STORAGE_KEY = 'ielts_gamification_state';
const MISTAKES_KEY = 'ielts_local_mistake_vault';

export function getGamificationState() {
  const defaultState = {
    streak: 1,
    lastActiveDate: new Date().toISOString().split('T')[0],
    xp: 120,
    dailyGoalCompleted: false,
    dailyCompletedCount: 4,
    dailyTargetCount: 10,
    skills: {
      grammar: 70,
      vocab: 60,
      sentence: 80,
      cohesion: 50,
      task1: 70,
      task2: 50
    }
  };

  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return defaultState;
  try {
    const parsed = JSON.parse(saved);
    checkStreak(parsed);
    return parsed;
  } catch (e) {
    return defaultState;
  }
}

export function saveGamificationState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function checkStreak(state) {
  const today = new Date().toISOString().split('T')[0];
  const last = state.lastActiveDate;

  if (last === today) return;

  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
  if (last === yesterday) {
    state.streak += 1;
    state.lastActiveDate = today;
    state.dailyGoalCompleted = false;
    state.dailyCompletedCount = 0;
  } else {
    state.streak = 1;
    state.lastActiveDate = today;
    state.dailyGoalCompleted = false;
    state.dailyCompletedCount = 0;
  }
  saveGamificationState(state);
}

export function addXP(amount) {
  const state = getGamificationState();
  state.xp += amount;
  state.dailyCompletedCount += 1;
  if (state.dailyCompletedCount >= state.dailyTargetCount) {
    state.dailyGoalCompleted = true;
  }
  saveGamificationState(state);
  return state;
}

export function calculateLevel(xp) {
  if (xp >= 1000) return { level: 6, title: "Level 6 — Mastery (Band 7.5–8+)" };
  if (xp >= 700) return { level: 5, title: "Level 5 — Advanced (Band 7–7.5)" };
  if (xp >= 450) return { level: 4, title: "Level 4 — Strong (Band 6.5–7)" };
  if (xp >= 250) return { level: 3, title: "Level 3 — Developing (Band 6–6.5)" };
  if (xp >= 100) return { level: 2, title: "Level 2 — Core (Band 5–6)" };
  return { level: 1, title: "Level 1 — Foundation (Band 4–5)" };
}

// Local Mistake Vault Logic
export function logLocalMistake(item, userAns) {
  const mistakes = getLocalMistakes();
  mistakes.push({
    id: item.id,
    question: item.question || item.promptSentenceA || item.module,
    userAnswer: userAns,
    correctAnswer: item.answer || item.options[item.answerIndex || 0],
    explanation: item.explanation,
    date: new Date().toISOString()
  });
  localStorage.setItem(MISTAKES_KEY, JSON.stringify(mistakes));
}

export function getLocalMistakes() {
  const saved = localStorage.getItem(MISTAKES_KEY);
  if (!saved) return [];
  try { return JSON.parse(saved); } catch (e) { return []; }
}
