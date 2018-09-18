'use strict'

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */
const cutFirst =(str) =>{
    return(str.slice(2,str.length));  
}
const cutEnd = (str)=>{
    return(str.slice(0,str.length-2));
}
const cutFirstEnd = (str) =>{
let cut = str.slice(2,str.length);
    return(cut.slice(0,cut.length-2));
}
//* Begin of tests
const assert = require('assert')
assert.strictEqual(typeof cutFirst, 'function')
assert.strictEqual(typeof cutEnd, 'function')
assert.strictEqual(typeof cutFirstEnd, 'function')
assert.deepStrictEqual(cutFirst("SAMIR"),"MIR")
assert.deepStrictEqual(cutEnd("samir"),"sam")
assert.deepStrictEqual(cutFirstEnd("SamIR et TEst"),"mIR et TE")
 
// End of tests */
