const assert = require('assert');
const { isPalindrome } = require('../index');

assert.strictEqual(isPalindrome("Radar"), true);
assert.strictEqual(isPalindrome("Hello"), false);
assert.strictEqual(isPalindrome("A man a plan a canal Panama"), true);

console.log(" Palindrome tests passed.");
