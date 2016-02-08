/**
 * Configuration file for Karma
 *
 * @author brendenpalmer
 * @license MIT
 */

'use strict';

// karma.conf.js
module.exports = function(config) {
  config.set({
    basePath: '..',
    browsers: ['PhantomJS'],
    frameworks: ['jasmine'],
    files: [
      '.tmp/*.js',
      'test/spec/**/*.js'
    ],
    reporters: ['progress', 'coverage', 'threshold'],
    preprocessors: {
      '.tmp/*.js': ['coverage']
    },
    coverageReporter: {
      type: 'html',
      dir: 'test/coverage/'
    },
    thresholdReporter: {
      statements: 100,
      branches: 80,
      functions: 100,
      lines: 100
    }
  });
};
