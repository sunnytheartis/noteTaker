const util = require('util');
const fs = require('fs');
const uuidv1 = require('uuidv1');

const readF = util.promisify(fs.readFile);
const write = util.promisify(fs.writeFile);

class Db {
  read() {
    return readF('db/db.json', 'utf8');
  }

  write(note) {
    return write('db/db.json', JSON.stringify(note));
  }

  getNotes() {
    return this.read().then((notes) => {
      let parsed;
      try {
        parsed = [].concat(JSON.parse(notes));
      } catch (err) {
        parsed = [];
      }

      return parsed;
    });
  }

  addNote(note) {
    const { title, text } = note;

    if (!title || !text) {
      throw new Error("Note 'title' and 'text' cannot be blank");
    }
    
    const newNote = { title, text, id: uuidv1() };

    return this.getNotes()
      .then((notes) => [...notes, newNote])
      .then((updatedNotes) => this.write(updatedNotes))
      .then(() => newNote);
  }
}

module.exports = new Db()