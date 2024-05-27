"use strict";
var readline = require('node:readline');
var _a = require('node:process'), input = _a.stdin, output = _a.stdout;
var get_user_input = function () {
};
var Animal = /** @class */ (function () {
    function Animal(species, color) {
        this.species = '';
        this.color = '';
        this.species = species;
        this.color = color;
    }
    Animal.prototype.getColor = function () {
        return this.color;
    };
    Animal.prototype.getSpecies = function () {
        return this.species;
    };
    return Animal;
}());
var main = function () {
    var dog = new Animal('canine', 'blue tan');
    console.log("Species: ".concat(dog.species, " | Color: ").concat(dog.color));
    return null;
};
main();
