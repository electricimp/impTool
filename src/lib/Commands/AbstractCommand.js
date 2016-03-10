/**
 * Command base
 * @author Mikhail Yurasov <mikhail@electricimp.com>
 */

'use strict';

const c = require('colors');
const DebugMixin = require('../DebugMixin');

class AbstractCommand {

  constructor() {
    DebugMixin.call(this);
    this._success = true;
  }

  /**
   * Run command with error handling
   * @return {Promise}
   */
  run() {
    return new Promise((resolve, reject) => {
      this._run()
        .catch((error) => {
          this._onError(error);
        })
        .then(() => {
          this.finish();
          this._success ? resolve() : reject();
        });
    });
  }

  /**
   * Run command
   * @return {Promise}
   * @protected
   */
  _run() {
    return new Promise((resolve, reject) => {
      this._init();
      resolve();
    });
  }

  /**
   * Finish command
   */
  finish() {
    this._debug(c.blue('Command success: ') + this._success);
  }

  /**
   * Initialize before run()
   * @protected
   */
  _init() {
    //
  }

  /**
   * Log message
   * @param {string} message
   * @protected
   */
  _log() {
    console.log.apply(this, arguments);
  }

  _info() {
    return this._log.apply(this, arguments);
  }

  _error(message) {
    return this._log(c.red(message));
  }

  /**
   * Print blank line
   * @protected
   */
  _blank() {
    console.log('');
  }

  /**
   * Error handler
   * @param {Error|*} error
   * @protected
   */
  _onError(error) {
    this._error(error);
    this._success = false;
  }

  // <editor-fold desc="Accessors" defaultstate="collapsed">

  get version() {
    return this._version;
  }

  set version(value) {
    this._version = value;
  }

  // </editor-fold>
}

module.exports = AbstractCommand;
