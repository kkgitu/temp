//pendekatan manual (creat package.json in the root, create properties etc)
// npm init (step by step, enter to skip)
// npm init -y (default)


const _ = require('lodash');

const items = [1, [2, [3, [4]]]]
const newItem = _.flattenDeep(items)
console.log(newItem)