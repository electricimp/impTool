#! /usr/bin/env node

/**
 * impTool cli app
 * @author Mikhail Yurasov <mikhail@electricimp.com>
 */

'use strict';

const commander = require('commander');
const packageJson = require('../../package.json');

commander
  .version(packageJson.version)
  .command('bundle', 'Preprocess and resolve imports in a file')
  .parse(process.argv);

