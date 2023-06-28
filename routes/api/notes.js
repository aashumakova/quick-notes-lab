const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');


// router.post('/notes/new', notesCtrl.createNote);
// router.get('/notes', notesCtrl.indexNotes);

router.post('/', notesCtrl.createNote)
router.get('/', notesCtrl.indexNotes)
router.delete('/:id', notesCtrl.deleteNotes)

module.exports = router;