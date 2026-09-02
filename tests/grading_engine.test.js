import {
  rawToReadingBand,
  rawToListeningBand,
  calculateWritingBand,
  calculateSpeakingBand,
  roundToIeltsBand,
  calculateOverallBand
} from '../data/logicData.js';

export async function runGradingEngineTests() {
  const results = [];

  function assert(condition, message) {
    results.push({ pass: !!condition, message });
  }

  // 1. Test rawToReadingBand
  assert(rawToReadingBand(40) === 9.0, 'Reading 40 raw score should be Band 9.0');
  assert(rawToReadingBand(39) === 9.0, 'Reading 39 raw score should be Band 9.0');
  assert(rawToReadingBand(35) === 8.0, 'Reading 35 raw score should be Band 8.0');
  assert(rawToReadingBand(30) === 7.0, 'Reading 30 raw score should be Band 7.0');
  assert(rawToReadingBand(23) === 6.0, 'Reading 23 raw score should be Band 6.0');
  assert(rawToReadingBand(0) === 2.5, 'Reading 0 raw score should be Band 2.5');

  // 2. Test rawToListeningBand
  assert(rawToListeningBand(40) === 9.0, 'Listening 40 raw score should be Band 9.0');
  assert(rawToListeningBand(35) === 8.0, 'Listening 35 raw score should be Band 8.0');
  assert(rawToListeningBand(30) === 7.0, 'Listening 30 raw score should be Band 7.0');
  assert(rawToListeningBand(23) === 6.0, 'Listening 23 raw score should be Band 6.0');
  assert(rawToListeningBand(0) === 2.5, 'Listening 0 raw score should be Band 2.5');

  // 3. Test roundToIeltsBand (Official IELTS Rounding Rules: .25 -> .5, .75 -> +1)
  assert(roundToIeltsBand(6.1) === 6.0, '6.1 should round to 6.0');
  assert(roundToIeltsBand(6.25) === 6.5, '6.25 should round to 6.5');
  assert(roundToIeltsBand(6.5) === 6.5, '6.5 should stay 6.5');
  assert(roundToIeltsBand(6.75) === 7.0, '6.75 should round to 7.0');
  assert(roundToIeltsBand(7.85) === 8.0, '7.85 should round to 8.0');

  // 4. Test calculateWritingBand (Task 2 has twice the weight of Task 1)
  // Task 1 = 6.0, Task 2 = 7.0 => (6 + 14)/3 = 6.666 => remainder 0.666 < 0.75 => rounds to 6.5
  assert(calculateWritingBand(6.0, 7.0) === 6.5, 'Task 1: 6.0, Task 2: 7.0 should result in Writing Band 6.5');
  assert(calculateWritingBand(7.0, 8.0) === 7.5, 'Task 1: 7.0, Task 2: 8.0 should result in Writing Band 7.5');

  // 5. Test calculateSpeakingBand
  assert(calculateSpeakingBand(7.0, 7.0, 7.0, 7.0) === 7.0, 'Speaking 7, 7, 7, 7 should be Band 7.0');
  assert(calculateSpeakingBand(8.0, 7.0, 7.0, 8.0) === 7.5, 'Speaking 8, 7, 7, 8 should be Band 7.5');

  // 6. Test calculateOverallBand
  // 8.0, 8.0, 7.0, 7.0 => Avg 7.5 => Band 7.5
  assert(calculateOverallBand(8.0, 8.0, 7.0, 7.0) === 7.5, 'Listening 8, Reading 8, Writing 7, Speaking 7 should give Overall 7.5');
  // 8.5, 8.5, 7.5, 7.5 => Avg 8.0 => Band 8.0
  assert(calculateOverallBand(8.5, 8.5, 7.5, 7.5) === 8.0, 'Listening 8.5, Reading 8.5, Writing 7.5, Speaking 7.5 should give Overall 8.0');

  // 7. Answer Normalization and Evaluation Logic
  function evaluateAnswer(userAns, keyString) {
    if (!userAns || !keyString) return false;
    const cleanUser = userAns.trim().toLowerCase();
    const options = keyString.split('/').map(opt => opt.trim().toLowerCase());
    return options.includes(cleanUser);
  }

  assert(evaluateAnswer('mining', 'mining'), 'Exact match should pass');
  assert(evaluateAnswer(' MINING ', 'mining'), 'Trimmed case-insensitive match should pass');
  assert(evaluateAnswer('harbour', 'harbour / harbor'), 'Slash option 1 ("harbour") should pass');
  assert(evaluateAnswer('harbor', 'harbour / harbor'), 'Slash option 2 ("harbor") should pass');
  assert(evaluateAnswer('wrong', 'harbour / harbor') === false, 'Incorrect answer should fail');

  return results;
}
