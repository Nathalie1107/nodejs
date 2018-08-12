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
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s)...`);
    allNotes.forEach(element => notes.logNote(element));
} else if (command === 'read') {
    var note = notes.getNote(argv.title);
    if (note){
        console.log('---Note found----');
        notes.logNote(note);
    } else {
        console.log("Note not found");
    }
} else if (command === 'remove'){
    let message = notes.removeNote(argv.title)?'Note removed':'Note not found';
    console.log(message);
}
else {
    console.log("not recognized");
}

