#!/usr/bin/env node

var json_obj = {"name": "rob", "age": "36", "location": "miami"};
json_obj["occupation"] = "programmer";

var list_obj = ["one", "two", "three"];

for (var key in json_obj){
    console.log(json_obj[key]);
}

for (i in list_obj){
    console.log(i);
}