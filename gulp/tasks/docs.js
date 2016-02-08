/**
 * Gulp task to build documentation
 *
 * @author brendenpalmer
 * @license MIT
 */

'use strict';

import gulp from 'gulp';
import typedoc from 'gulp-typedoc';
import config from '../config.json';

gulp.task('docs', function() {
  return gulp
    .src(config.src)
    .pipe(typedoc({
      module: 'amd',
      target: 'es5',
      includeDeclarations: true,
      out: config.docs,
      name: config.name,
      theme: 'minimal',
      ignoreCompilerErrors: false,
      version: true
    }));
});
