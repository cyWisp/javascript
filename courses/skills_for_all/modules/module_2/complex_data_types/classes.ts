"use strict";

const readline = require('node:readline');
const {stdin: input, stdout: output} = require('node:process');

let get_user_input = () => {

}

class Animal {
    species: string=''
    color: string=''

    public constructor(species: string, color: string) {
        this.species = species
        this.color = color
    }

    getColor(): string{
        return this.color
    }

    getSpecies(): string{
        return this.species
    }

}

let main = () => {

    let dog = new Animal('canine', 'blue tan')

    console.log(`Species: ${dog.species} | Color: ${dog.color}`);

    return null;
}

main();