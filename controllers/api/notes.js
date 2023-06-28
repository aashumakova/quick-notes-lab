const Note = require('../../models/note')

async function createNote(req, res) {
    console.log('req.body', req.body)
    const newNote = await Note.create({
        text: req.body.text,
        user: req.user._id
})


    // await newNote.createNote(req.params.id)
    res.json(newNote)
}

async function indexNotes(req, res) {
    const notes = await Note.find({ user: req.user._id})
    res.json(notes)
}

async function deleteNotes(req, res) {
    const note = await Note.findById(req.params.id)
    res.json(note.deleteOne)
}

// async function createNote(req, res) {
//     const newNote = {
//         text: req.body.text,
//         user: req.user 
//     }
    
// // const note = await Note.create(newNote);
//     try {
//         // await note.save();
//         const note = await Note.create(newNote);
//         res.json({note});
//     } catch (err) {
//         res.json(err);
//     }
// }
// async function indexNotes(req, res) {
//     const notes = await Item.find({});
//     res.json(notes); 
// }
module.exports = {
    createNote,
    indexNotes,
    deleteNotes
}