#!/usr/bin/node

const prompt = require('prompt-sync') ({sigint: true});

const name = prompt('Name: ');
console.log('hi ' + name);

var int_var = String(3);
var str_var = Number('3');



console.log(typeof int_var);
console.log(typeof str_var);