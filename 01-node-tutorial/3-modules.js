const names = require('./4-names');
const sayHi = require('./5-utils');
// when module is imported via require, it is executed and wrapped in another function
require('./6-mind-grenade');

sayHi(names.john)
sayHi(names.papa)
sayHi('Susan')