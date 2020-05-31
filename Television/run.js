const Television = require('./src/Television').Television;
const Control = require('./src/Control').Control;

let myTv = new Television('ng35');

console.log(myTv.model);

myTv.model = "mg1000";

console.log(myTv.model);
