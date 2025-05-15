const assert = require('assert');
const { sumOfUniqueElements } = require('../index');

assert.strictEqual(sumOfUniqueElements([1, 2, 3, 2, 4]), 8);
assert.strictEqual(sumOfUniqueElements([5, 5, 5, 5, 5]), 0);

console.log("✅ Unique elements tests passed.");
