/**
 * Load all tasks
 *
 * @author brendenpalmer
 * @license MIT
 */

'use strict';

import fs from 'fs';
const tasks = fs.readdirSync('./gulp/tasks/');

tasks.forEach((task) => {
  require('./tasks/' + task);
});
