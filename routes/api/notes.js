const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// All paths start with '/api/notes'
router.get('/check-token', ensureLoggedIn, notesCtrl.checkToken);
router.get('/', ensureLoggedIn, notesCtrl.index)
router.get('/:id', ensureLoggedIn, notesCtrl.show)
// DELETE /api/notes delete note
router.delete('/:id', ensureLoggedIn, notesCtrl.deleteNote);
// POST /api/users (create a user - sign up)
router.post('/', ensureLoggedIn, notesCtrl.create);
router.post('/edit', ensureLoggedIn, notesCtrl.edit);

module.exports = router;