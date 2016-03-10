/**
 * Loop with promises
 * @author Mikhail Yurasov <mikhail@electricimp.com>
 * @version 1.0.0
 */

'use strict';

/**
 * While loop with promises
 * @param {function} condition
 * @param {function} action
 * @return {Priomise}
 */
module.exports = function promiseWhile(condition, action) {
  return new Promise((resolve, reject) => {

    const loop = () => {
      if (condition()) {
        action().then(() => {
          process.nextTick(loop);
        }, reject);
      } else {
        resolve();
      }
    };

    process.nextTick(loop);
  });
};
