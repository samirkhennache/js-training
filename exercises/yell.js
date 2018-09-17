'use strict'

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */

    const yell =(str) =>{
        let word ="";
        for(let i=0; i<str.length; i++)
            word +=str[i].toUpperCase();  
        return word;
    }
//* Begin of tests
const assert = require('assert')

assert.fail('You must write your own tests')
// End of tests */
