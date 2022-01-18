#!/usr/bin/env node
'use strict';

const fs = require('fs');
const { type } = require('os');

let rawData = fs.readFileSync('./people.json');
let people = JSON.parse(rawData)

people['person_3'] = {
    'name': 'alex',
    'age': '33'
};

let people_string = JSON.stringify(people);

console.log(people);
console.log('type: ' + typeof people);

console.log(people_string);
console.log('type: ' + typeof people_string);
