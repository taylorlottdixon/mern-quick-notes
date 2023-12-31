import { now } from 'mongoose';
import React, { useState } from 'react';
import * as notesAPI from '../../utilities/notes-api'

export default function NewNotePage({ addNote, user }) {
  const [newNote, setNewNote] = useState({
    text: "",
    createdAt: new Date()
  })

function handleChange(evt) {
  const newFormData = { ...newNote, [evt.target.name]: evt.target.value };
  setNewNote(newFormData);
}

function handleAddNote(evt) {
    evt.preventDefault();
    addNote(newNote);
    notesAPI.createNote(newNote);
    setNewNote({
        text: "",
        createdAt: new Date()
    });
}

  return (
    <>
      <h1>New Note</h1>
      <form onSubmit={handleAddNote}>
        <input 
        name='text'
        value={newNote.text} 
        onChange={handleChange}
        placeholder="New Note"
        required
        pattern=".{4,}" />
        <button type='submit'>ADD NOTE</button>
      </form>
    </>
  );
}