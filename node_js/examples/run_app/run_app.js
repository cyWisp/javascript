#!/usr/bin/env node

var name = "Rob", age = 36;

console.log("Hi there, my name is " + name + ". I am " + age + " years old...");

console.log(name[0]);

if (name != "Rob"){
    console.log("You're not Rob!!");
    process.exit();
} else {
    console.log("Oh, hey Rob...");
}