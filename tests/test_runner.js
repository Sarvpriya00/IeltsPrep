import { runDataIntegrityTests } from './data_integrity.test.js';
import { runAssetsAndRoutesTests } from './assets_and_routes.test.js';
import { runGradingEngineTests } from './grading_engine.test.js';

async function main() {
  console.log('====================================================');
  console.log('       IELTS PREP SITE AUTOMATED TEST SUITE        ');
  console.log('====================================================\n');

  const suites = [
    { name: 'Data Integrity Tests', fn: runDataIntegrityTests },
    { name: 'Assets & HTTP Routes Tests', fn: runAssetsAndRoutesTests },
    { name: 'Grading Engine & Scoring Logic Tests', fn: runGradingEngineTests }
  ];

  let grandTotal = 0;
  let grandPassed = 0;
  let grandFailed = 0;

  for (const suite of suites) {
    console.log(`\n▶ Running ${suite.name}...`);
    let suiteResults = [];
    try {
      suiteResults = await suite.fn();
    } catch (err) {
      console.error(`  ❌ Suite "${suite.name}" crashed:`, err);
      suiteResults = [{ pass: false, message: `Suite exception: ${err.message}` }];
    }

    let passed = 0;
    let failed = 0;

    suiteResults.forEach(r => {
      grandTotal++;
      if (r.pass) {
        passed++;
        grandPassed++;
        console.log(`  ✓ PASSED: ${r.message}`);
      } else {
        failed++;
        grandFailed++;
        console.log(`  ❌ FAILED: ${r.message}`);
      }
    });

    console.log(`   Summary for ${suite.name}: ${passed} passed, ${failed} failed out of ${suiteResults.length}`);
  }

  console.log('\n====================================================');
  console.log(`TOTAL RESULTS: ${grandPassed} PASSED, ${grandFailed} FAILED (${grandTotal} Total Assertions)`);
  console.log('====================================================\n');

  if (grandFailed > 0) {
    console.error(`⚠️ TEST SUITE FAILED with ${grandFailed} assertion errors.`);
    process.exit(1);
  } else {
    console.log('🎉 ALL TESTS PASSED SUCCESSFULLY!');
    process.exit(0);
  }
}

main();
