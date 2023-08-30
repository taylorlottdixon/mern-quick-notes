const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const noteSchema = new Schema({
    text: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, required: true},
    createdAt: {type: Date, timestamps: true},
}, {timestamps: true})

module.exports = mongoose.model('Note', noteSchema);