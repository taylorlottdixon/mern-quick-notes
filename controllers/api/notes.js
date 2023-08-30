const Note = require('../../models/note');

module.exports = {
    create,
    edit,
    deleteNote,
};

async function create(req, res) {
    try {
      // Add the user to the db
      const note = await Note.create(req.body);
      const token = createJWT(note);
      res.json(token);
    } catch (err) {
      res.status(400).json(err);
    }
};

async function edit(req, res) {
    await Note.findByIdAndUpdate(req.params.id)

    try {
        res.redirect('/notes');
    } catch (err) {
        console.log(err);
        res.redirect('/notes');
    }
};

async function deleteNote(req, res) {
    await Note.findByIdAndDelete(req.params.id)

    try {
        res.redirect('/notes')
    } catch (err) {
        console.log(err)
        res.redirect('/notes')
    }
}