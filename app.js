const add = require ('./add')
const read = require ('./read')
const write = require ('./write')
const present = require('./present')
const update = require('./update')



const cmd = process.argv 

var note = {}

if(cmd[2] == 'add') {
    // Build Object
    note = { 
        id: cmd[3],
        title: cmd[4],
        body: cmd[5]
    }
    // Get old note value
    var oldNote = read()
    // Add note to note.txt
    add(note, oldNote)
    console.log(note, oldNote)
}
if(cmd[2] == 'read') {
    present(read())
}
const fs = require ('fs')

const del = function (id, oldNote){
const note = JSON.parse(oldNote)

const newNote = note.filter(function(n,idx) {

        return n.id !== id
})
fs.writeFileSync('note.txt', JSON.stringify(newNote))
}

module.exports = del
if(cmd[2] == 'update')  {
    const note = {
      id: cmd[3],
      title: cmd[4],
      body: cmd[5]
    }
    const oldNote = read()

    update(note,oldNote)

    console.log(note, oldNote)
}