#!/usr/bin/env node
'use strict';

const fs = require('fs');

let raw = fs.readFileSync('./people.json')
let people = JSON.parse(raw);

people['person_3'] = {
    'name': 'ben',
    'age': 12
};

console.log(people);

for (var key in people){
    console.log("key: " + key + " | " + JSON.stringify(people[key]));
}
