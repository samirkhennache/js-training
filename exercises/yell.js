'use strict'

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */

    const yell = (str) =>{
        return str.toUpperCase();
    }

//* Begin of tests
const assert = require('assert')
assert.strictEqual(typeof yell, 'function')
assert.strictEqual(yell('samir'),'SAMIR')
assert.deepStrictEqual(yell("water"), 'WATER')
// End of tests */
