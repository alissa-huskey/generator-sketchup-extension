'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-sketchup-extension:app', () => {
  beforeEach(() => {
    return helpers
      .run(path.join(__dirname, '../app'))
      .withPrompts({
        dest: 'xxx',
        name: 'Example Plugin',
        license: 'MIT',
        author: 'John Doe',
        email: 'john.doe@example.com',
      })
      .withLocalConfig({
        sketchup_version: 22
      })
  });

  it('creates files', () => {
    assert.file([
      'README.md',
      'CHANGELOG.md',
      'LICENSE.txt',
      'example_plugin.rb',
      'example_plugin/main.rb',
    ]);

    assert.fileContent(
      'README.md',
      '# Example Plugin'
    )

    assert.fileContent(
      'CHANGELOG.md',
      'All notable changes to the "Example Plugin"'
    )

    assert.fileContent(
      'example_plugin.rb',
      'ext = SketchupExtension.new "Example Plugin"'
    )

    assert.fileContent(
      'example_plugin/main.rb',
      'License : MIT'
    )

    assert.fileContent(
      'LICENSE.txt',
      'John Doe <john.doe@example.com> (https://example.com)'
    )

    assert.fileContent(
      'LICENSE.txt',
      'The MIT License (MIT)'
    )
  });
});

