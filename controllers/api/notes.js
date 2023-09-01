const Note = require('../../models/note');

module.exports = {
    create,
    edit,
    deleteNote,
    checkToken,
    index,
    show
};

async function create(req, res) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    try {
      const note = await Note.create(req.body);
      const token = createJWT(note);
      res.json(token);
    } catch (err) {
      res.status(400).json(err);
    }
};

async function edit(req, res) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    const note = await Note.findByIdAndUpdate(req.params.id)

    try {
        res.json(note);
    } catch (err) {
        res.status(500).json(err)
    }
};

async function deleteNote(req, res) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    const note = await Note.findByIdAndDelete(req.params.id)

    try {
        res.json(note)
    } catch (err) {
        res.status(500).json(err)
    }
}

function checkToken(req, res) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    // req.user will always be there for you when a token is sent
    console.log('req.note', req.note);
    res.json(req.exp);
}

async function index(req, res) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    const note = await Note.find({user: req.user_id})

    try {
        res.json(note)
    } catch (err) {
        res.status(500).json(err)
    }
}

async function show(req, res) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    const note = await Note.findById(req.params.id)

    try {
        res.json(note)
    } catch (err) {
        res.status(500).json(err)
    }
}