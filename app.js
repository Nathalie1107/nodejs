console.log("Starting app");

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

const argv = yargs.argv;
var command = process.argv[2];
console.log('Command: ', command);
//console.log('Process',process.argv);
//console.log('Yargs', argv);


if (command === 'add'){
    var note = notes.addNote(argv.title, argv.body);
    //console.log('Adding new note');
    if (note){
        console.log('The note is added successfully.')
    } else {
        console.log('Failed to save the note.')
    }

} else if (command === 'list'){
    notes.getAll();
    //console.log("Listing all notes");

} else if (command === 'read') {
    console.log("Reading notes");
} else if (command === 'remove'){
    console.log("Removing notes");
}
else {
    console.log("not recognized");
}

