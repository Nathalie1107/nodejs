console.log('Starting notes.js');

var intro = () => {
  console.log('---- This is from notes.js ----');
};

var addNote = (title, body) => {
  intro();
  console.log('Adding note', title, body);
};

var getAll = () => {
  console.log('Getting all notes');
}

module.exports = {
  addNote,
  getAll
};
