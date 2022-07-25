// Not a real test -- here for documentation on yeoman-test
//
// https://github.com/yeoman/yeoman-test
// https://yeoman.github.io/yeoman-test/
//


'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');


describe('generator test', () => {
  describe('test', () => {
    let runResult;
    beforeEach(async () => {
      runResult = await helpers
        .create(                   // instantiates RunContext
          'sketchup',              // namespace or generator
          {},                      // test options
          {}                       // environment options
        )
        [.cd(dir)]                  // runs the test inside a non temporary dir
        [.doInDir(dir => {})        // prepares the test dir
        [.withGenerators([])]       // registers additional generators
        [.withLookups({})]          // runs Environment lookups
        [.withOptions({})]          // passes options to the generator
        [.withLocalConfig({})]      // sets the generator config as soon as it is instantiated
        [.withPrompts()]            // simulates the prompt answers
        [.build(runContext => {     // instantiates Environment/Generator
          [runContext.env...]       // does something with the environment
          [runContext.generator...] // does something with the generator
        })]
        .run();                     // runs the environment, promises a RunResult
      [result.create().run()] // instantiates a new RunContext at the same directory
    );
    afterEach(() => {
      if (runResult) {
        runResult.restore();
      }
    });
    it('runs correctly', () => {
      // runs assertions using mem-fs.
      [runResult.assertFile('file.txt');]
      [runResult.assertNoFile('file.txt');]
      [runResult.assertFileContent('file.txt', 'content');]
      [runResult.assertEqualsFileContent('file.txt', 'content');]
      [runResult.assertNoFileContent('file.txt', 'content');]
      [runResult.assertJsonFileContent('file.txt', {});]
      [runResult.assertNoJsonFileContent('file.txt', {});]
    });
  });
});

