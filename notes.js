console.log('Starting notes.js');

const fs = require('fs');

var intro = () => {
  console.log('---- This is from notes.js ----');
};

var fetchNotes = () => {
  try{
    var noteString = fs.readFileSync('notes-data.json');
    return JSON.parse(noteString);
  } catch (e) {
    console.log("First write");
    return [];    
  }
}

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };
  var duplicateNotes = notes.filter((note) => note.title === title);
  
  if (duplicateNotes.length === 0){
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var getAll = () => {
  var notes = fetchNotes();
  return notes;
}

var getNote = (title) =>{
  var notes = fetchNotes();
  var foundNote = notes.filter((note) => note.title===title);
  return foundNote[0];
}

var removeNote = (title) => {
  var notes = fetchNotes();
  filterNotes = notes.filter((note) => note.title != title);
  saveNotes(filterNotes);
  if (notes.length===filterNotes.length){
    return false;
  } else return true;
}

var logNote = (note) => {
  console.log('Title: ', note.title);
  console.log('Body:  ', note.body);
  console.log('-------');

}

module.exports = {
  addNote,
  getAll,
  removeNote,
  getNote,
  logNote
};
