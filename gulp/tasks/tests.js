/**
 * Gulp task for tests
 *
 * @author brendenpalmer
 * @license MIT
 */

'use strict';

import gulp from 'gulp';
import sequence from 'gulp-sequence';
import karma from 'karma';

let Server = karma.Server;

gulp.task('test:run', (done) => {
  new Server({
    configFile: __dirname + '/../../test/karma.conf.js',
    singleRun: true
  }, done).start();
});

gulp.task('test', sequence('scripts:build', 'test:run'));
