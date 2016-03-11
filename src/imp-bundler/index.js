/**
 * Bundler
 * @author Mikhail Yurasov <mikhail@electricimp.com>
 */

'use strict';

const c = require('colors');
const Errors = require('./Errors');

class ImpBundler {
  /**
   * Debug print
   * @param {*} ...objects
   * @protected
   */
  _debug() {
    if (this.debug) {
      const args = Array.prototype.slice.call(arguments);
      args.unshift(c.green('[debug:' + this.constructor.name + ']'));
      console.log.apply(this, args);
    }
  };

  get debug() {
    return !!this._debug;
  }

  set debug(value) {
    this._debug = !!value;
  }
}

module.exports = ImpBundler;
module.exports.Errors = Errors;
