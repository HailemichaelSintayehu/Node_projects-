const names = require('./4-names.js');
const sayHi = require('./5-utils.js');

const data = require("./6-alternative-flavor")
require("./7-mind-grenades");

console.log(data);
sayHi("kest");
sayHi(names.kest);
sayHi(names.michael); 
sayHi(names.secret)  

sayHi(addValues());