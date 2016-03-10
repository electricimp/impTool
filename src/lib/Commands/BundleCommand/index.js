/**
 * Bundle command
 * @author 2016 Mikhail Yurasov <mikhail@electricimp.com>
 */

'use strict';

const AbstractCommand = require('../AbstractCommand');

class BundleCommand extends AbstractCommand {

  _run() {
    this._info('Hi there');
    return super._run();
  }

// <editor-fold desc="Accessors" defaultstate="collapsed">

  get inputFile() {
    return this._inputFile;
  }

  set inputFile(value) {
    this._inputFile = value;
  }

  get outputFile() {
    return this._outputFile;
  }

  set outputFile(value) {
    this._outputFile = value;
  }

  // </editor-fold>
}

module.exports = BundleCommand;
