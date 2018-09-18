'use strict'

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */
    const lower =(str) =>{
        return('*'+str.toLowerCase()+'*')
    }

//* Begin of tests
const assert = require('assert')
assert.strictEqual(typeof lower, 'function')
assert.deepStrictEqual(lower("SAMIR"),"*samir*")
assert.deepStrictEqual(lower("samir"),"*samir*")
assert.deepStrictEqual(lower("SamIR et TEst"),"*samir et test*")
 
// End of tests */
