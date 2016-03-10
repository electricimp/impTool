/**
 * Bundle cli command
 * @author Mikhail Yurasov <mikhail@electricimp.com>
 */

'use strict';

const commander = require('commander');
const packageJson = require('../../package.json');
const BundleCommand = require('../lib/Commands/BundleCommand');
const parseBool = require('../lib/utils/parseBool');

commander
  .usage('[options] <input_file> <output_file>')
  .option('-d, --debug', 'debug output')
  .parse(process.argv);

// bootstrap command

const command = new BundleCommand();

command.version = packageJson.version;
command.debug = parseBool(commander.debug);
command.inputFile = commander.args[0] || null;
command.outputFile = commander.args[1] || null;

// go
command.run()
  .then(() => {
    process.exit(0);
  }, () => {
    process.exit(1);
  });
