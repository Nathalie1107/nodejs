console.log("Starting app");

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

var command = process.argv[2];
console.log('Command: ', command);

if (command === 'add'){
    console.log('Adding new note');
} else if (command === 'list'){
    console.log("Listing all notes");
} else if (command === 'read') {
    console.log("Reading notes");
} else if (command === 'remove'){
    console.log("Removing notes");
}
else {
    console.log("not recognized");
}

