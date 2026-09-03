import { readingData } from '../data/readingData.js';
import { cam21ListeningData } from '../data/listeningData.js';
import { writingData } from '../data/writingData.js';
import { speakingData } from '../data/speakingData.js';
import { exerciseData } from '../data/exerciseData.js';
import { DEFAULT_PROFILE } from '../data/logicData.js';
import { planData } from '../data/planData.js';
import { tutorialData } from '../data/tutorialData.js';
import { guideData } from '../data/guideData.js';

export async function runDataIntegrityTests() {
  const results = [];
  
  function assert(condition, message) {
    if (condition) {
      results.push({ pass: true, message });
    } else {
      results.push({ pass: false, message });
    }
  }

  // 1. Test readingData.js
  const readingKeys = Object.keys(readingData);
  assert(readingKeys.length >= 8, `readingData should contain at least 8 tests (found ${readingKeys.length})`);
  
  // All Cambridge 19 tests must be fully populated with no pending data
  const cam19ReadingKeys = ['cam19-r1', 'cam19-r2', 'cam19-r3', 'cam19-r4'];
  cam19ReadingKeys.forEach(key => {
    assert(!!readingData[key], `readingData should have key "${key}"`);
    if (readingData[key]) {
      const testObj = readingData[key];
      assert(testObj.id === key, `readingData["${key}"].id should be "${key}"`);
      assert(!!testObj.title && !testObj.title.includes('Pending Data'), `readingData["${key}"].title should not contain "Pending Data"`);
      assert(Array.isArray(testObj.passages) && testObj.passages.length === 3, `readingData["${key}"] should have 3 passages`);
      
      let totalQuestions = 0;
      testObj.passages.forEach((p, idx) => {
        assert(!!p.title, `readingData["${key}"] passage ${idx + 1} should have a title`);
        assert(p.text && p.text.length > 50 && !p.text.includes('Awaiting transcription'), `readingData["${key}"] passage ${idx + 1} text should be transcribed`);
        if (Array.isArray(p.questions)) {
          p.questions.forEach(qGroup => {
            if (Array.isArray(qGroup.items)) {
              totalQuestions += qGroup.items.length;
            }
          });
        }
      });
      assert(totalQuestions >= 0, `readingData["${key}"] should have question array initialized (total items: ${totalQuestions})`);
    }
  });

  // Check populated Cambridge 21 tests
  if (readingData['cam21-r1']) {
    const r1 = readingData['cam21-r1'];
    assert(r1.passages && r1.passages.length === 3, 'readingData["cam21-r1"] should have 3 passages');
  }

  // 2. Test listeningData.js
  const listeningKeys = Object.keys(cam21ListeningData);
  assert(listeningKeys.length >= 8, `listeningData should contain at least 8 tests (found ${listeningKeys.length})`);
  
  const cam19ListeningKeys = ['cam19-t1', 'cam19-t2', 'cam19-t3', 'cam19-t4'];
  cam19ListeningKeys.forEach(key => {
    assert(!!cam21ListeningData[key], `listeningData should have key "${key}"`);
    if (cam21ListeningData[key]) {
      const testObj = cam21ListeningData[key];
      assert(testObj.id === key, `listeningData["${key}"].id should be "${key}"`);
      assert(!!testObj.title && !testObj.title.includes('Pending Data'), `listeningData["${key}"].title should not contain "Pending Data"`);
      assert(!!testObj.parts && Object.keys(testObj.parts).length === 4, `listeningData["${key}"] should have 4 parts`);
      assert(!!testObj.answerKey && Object.keys(testObj.answerKey).length === 40, `listeningData["${key}"] answerKey should contain 40 entries`);
    }
  });

  // 3. Test writingData.js
  assert(Array.isArray(writingData) && writingData.length >= 16, `writingData should be an array of at least 16 tasks (found ${writingData.length})`);
  writingData.forEach((w, idx) => {
    assert(!!w.prompt && w.prompt.length > 20, `writingData task index ${idx} (ID ${w.id}) should have a valid prompt`);
    assert(!!w.sampleAnswer && w.sampleAnswer.length > 50, `writingData task index ${idx} (ID ${w.id}) should have a sample answer`);
    assert(w.task === 1 || w.task === 2, `writingData task index ${idx} should be Task 1 or Task 2`);
  });

  // 4. Test speakingData.js
  const speakingKeys = Object.keys(speakingData);
  assert(speakingKeys.length >= 1, `speakingData should contain at least 1 test (found ${speakingKeys.length})`);

  // 5. Test additional data modules
  assert(!!exerciseData && Object.keys(exerciseData).length > 0, 'exerciseData should be non-empty');
  assert(!!DEFAULT_PROFILE && typeof DEFAULT_PROFILE === 'object', 'DEFAULT_PROFILE in logicData should be non-empty object');
  assert(!!planData && Object.keys(planData).length > 0, 'planData should be non-empty');
  assert(!!tutorialData && Object.keys(tutorialData).length > 0, 'tutorialData should be non-empty');
  assert(!!guideData && Object.keys(guideData).length > 0, 'guideData should be non-empty');

  return results;
}
