// var obj = {
//     name: 'Andrew'
// };
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);
// console.log(obj);

// var personString ='{"name":"Andrew","age":25}';
// var obj = JSON.parse(personString);
// console.log(typeof obj);
// console.log(obj);

const fs = require('fs');

var originalNote = {
    title: 'Some title',
    body: 'Some body'
};

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('note.json', originalNoteString);

var noteString = fs.readFileSync('note.json');

var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);