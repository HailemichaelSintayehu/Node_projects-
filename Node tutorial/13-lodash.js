const _ = require('lodash');

const items = [1,[2,[3,[4]]]];

const newItems = _.flattenDeep(items)

const nextItems = _.flatMapDepth(items)


console.log(newItems);

console.log(nextItems);
console.log("hello world");