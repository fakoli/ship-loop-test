const assert = require("node:assert");
const { multiply } = require("../src/multiply.js");
assert.equal(multiply(3, 4), 12);
assert.equal(multiply(-2, 5), -10);
console.log("multiply tests passed");
