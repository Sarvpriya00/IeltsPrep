/**
 * IELTS Academic Band Scoring Logic & Calculation Utilities
 */

// Cambridge Academic Reading Raw Score to Band Conversion (Out of 40)
export function rawToReadingBand(raw) {
  raw = Number(raw) || 0;
  if (raw >= 39) return 9.0;
  if (raw >= 37) return 8.5;
  if (raw >= 35) return 8.0;
  if (raw >= 33) return 7.5;
  if (raw >= 30) return 7.0;
  if (raw >= 27) return 6.5;
  if (raw >= 23) return 6.0;
  if (raw >= 19) return 5.5;
  if (raw >= 15) return 5.0;
  if (raw >= 13) return 4.5;
  if (raw >= 10) return 4.0;
  if (raw >= 6) return 3.5;
  if (raw >= 4) return 3.0;
  return 2.5;
}

// Cambridge Academic Listening Raw Score to Band Conversion (Out of 40)
export function rawToListeningBand(raw) {
  raw = Number(raw) || 0;
  if (raw >= 39) return 9.0;
  if (raw >= 37) return 8.5;
  if (raw >= 35) return 8.0;
  if (raw >= 32) return 7.5;
  if (raw >= 30) return 7.0;
  if (raw >= 26) return 6.5;
  if (raw >= 23) return 6.0;
  if (raw >= 18) return 5.5;
  if (raw >= 16) return 5.0;
  if (raw >= 13) return 4.5;
  if (raw >= 10) return 4.0;
  if (raw >= 7) return 3.5;
  if (raw >= 4) return 3.0;
  return 2.5;
}

// Writing Band (Task 2 has twice the weight of Task 1)
export function calculateWritingBand(task1Band, task2Band) {
  task1Band = Number(task1Band) || 0;
  task2Band = Number(task2Band) || 0;
  if (!task1Band && !task2Band) return 0;
  if (!task1Band) return task2Band;
  if (!task2Band) return task1Band;
  const weighted = (task1Band + (task2Band * 2)) / 3;
  return roundToIeltsBand(weighted);
}

// Speaking Band (Average of 4 criteria)
export function calculateSpeakingBand(fluency, lexical, grammar, pronunciation) {
  const scores = [fluency, lexical, grammar, pronunciation].map(Number).filter(b => b > 0);
  if (scores.length === 0) return 0;
  const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
  return roundToIeltsBand(avg);
}

// Official IELTS Rounding Rules:
// If average ends in .25 -> round up to .5
// If average ends in .75 -> round up to next whole band
export function roundToIeltsBand(score) {
  if (!score || score <= 0) return 0;
  const floor = Math.floor(score);
  const remainder = score - floor;

  if (remainder < 0.25) {
    return floor;
  } else if (remainder < 0.75) {
    return floor + 0.5;
  } else {
    return floor + 1.0;
  }
}

// Overall Band Calculation (Average of all 4 components)
export function calculateOverallBand(listening, reading, writing, speaking) {
  const bands = [listening, reading, writing, speaking].map(Number).filter(b => b > 0);
  if (bands.length < 4) return null;
  const avg = bands.reduce((a, b) => a + b, 0) / 4;
  return roundToIeltsBand(avg);
}

// Default Target Profile
export const DEFAULT_PROFILE = {
  target_overall: 8.0,
  target_listening: 8.5,
  target_reading: 8.5,
  target_writing: 7.5,
  target_speaking: 7.5,
  minimum_component: 7.0,
  exam_date: '2026-08-24'
};
