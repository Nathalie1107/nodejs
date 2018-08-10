console.log("Starting app");

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

var user = os.userInfo();
console.log(user);
//console.log(module);
//console.log(`Hello ${user.username}! You are ${notes.age}`);
//fs.appendFile('greeting.txt', `Hello ${user.username}! You are ${notes.age}`);
//fs.appendFile('greeting.txt',"Hello World!");
// console.log(notes.addNote());
// console.log(notes.add(5,6))
// console.log(_.isString(5));
// console.log(_.isString('dfdsf'));
// var filteredArray =_.uniq(['Andrew','Johnson','Johnson', 1, 3,1,3,4,2,'Nathalie']);
// console.log(filteredArray);
