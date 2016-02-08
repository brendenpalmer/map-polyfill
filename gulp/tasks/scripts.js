/**
 * Gulp task for scripts
 *
 * @author brendenpalmer
 * @license MIT
 */

'use strict';

import gulp from 'gulp';
import uglify from 'gulp-uglify';
import iife from 'gulp-iife';
import ts from 'gulp-typescript';
import sequence from 'gulp-sequence';
import header from 'gulp-header';
import del from 'del';
import config from '../config.json';
import packageJson from '../../package.json';

let tsProject = ts.createProject(config.ts.config);

gulp.task('scripts:clear', (done) => {
  del([config.tmp, config.dist]).then(() => {
    done();
  });
});

gulp.task('scripts:build', () => {
  var tsResult = tsProject.src()
    .pipe(ts(tsProject));

  return tsResult.js.pipe(gulp.dest(config.tmp));
});

gulp.task('scripts:concat', () => {
  let _header = ['/**',
    ' * <%= pkg.name %> - <%= pkg.description %>',
    ' *',
    ' * @author <%= pkg.contributors[0].name %>',
    ' * @version v<%= pkg.version %>',
    ' * @license <%= pkg.license %>',
    ' */',
    ''
  ].join('\n');

  return gulp.src(config.tmp + '/weakmap.min.js')
    .pipe(iife())
    .pipe(uglify())
    .pipe(header(_header, {
      pkg: packageJson
    }))
    .pipe(gulp.dest(config.dist));
});

gulp.task('scripts', sequence('scripts:clear', 'scripts:build', 'scripts:concat'));
