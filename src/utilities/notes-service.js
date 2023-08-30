import * as notesAPI from './notes-api';

export async function createNote() {
    const note = await notesAPI.API.create(noteData);
    localStorage.setItem('note', note)
}