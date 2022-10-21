const fs = require('fs')

const update = function(note,oldNote) {

  const updateNote = JSON.parse(oldNote)

  const newNote = updateNote.map(n => {
    if (n.id === note.id) {
      return {...n, title : note.title, body: note.body}
    }
    return n
  })
  fs.writeFileSync('./note.txt', JSON.stringify(newNote))
}


module.exports = update