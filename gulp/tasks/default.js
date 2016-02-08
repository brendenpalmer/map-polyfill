/**
 * Default gulp task
 *
 * @author brendenpalmer
 * @license MIT
 */

'use strict';

import gulp from 'gulp';
import sequence from 'gulp-sequence';

gulp.task('default', sequence('lint:scripts', 'test', 'docs', 'scripts'));
