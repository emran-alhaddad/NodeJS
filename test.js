const params1 = require('./module1');
console.log(params1);
console.log(params1.names ,params1.ages);

//-------------------------------------

// const {names} = require('./module1');
// console.log(names);

//-------------------------------------

// const {names , ages} = require('./module1');
// console.log(names,ages);

//-------------------------------------

const { names , ages ,xxx} = require('./module1');
console.log(names,ages,xxx);


//----------------------

const os = require('os');
console.log(os.platform());
console.log(os.homedir());
// console.log(os);


