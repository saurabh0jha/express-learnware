const _ = require('lodash');

const arr = [1, [2, [3, [4]]]];
const flattened = _.flattenDepth(arr, 3);
console.log(flattened);
console.log('Hello! The World!');