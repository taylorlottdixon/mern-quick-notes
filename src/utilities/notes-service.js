import * as notesAPI from './notes-api';

export async function createNote(noteData) {
    const note = await notesAPI.createNote(noteData);
    localStorage.setItem('note', note)
    return getNotes();
}

export function getToken() {
    // getItem returns null if there's no string
    const token = localStorage.getItem('token');
    if (!token) return null;
    // Obtain the payload of the token
    const payload = JSON.parse(atob(token.split('.')[1]));
    // A JWT's exp is expressed in seconds, not milliseconds, so convert
    if (payload.exp < Date.now() / 1000) {
      // Token has expired - remove it from localStorage
      localStorage.removeItem('token');
      return null;
    }
    return token;
}
  
export function getNotes() {
    try {
        const notes = notesAPI.getAll()
        if (notes) return notes
        else return []
    }
    catch (err) {
        console.log(err)
    }
}

export async function checkToken() {
    // Just so that you don't forget how to use .then
    return notesAPI.checkToken()
      // checkToken returns a string, but let's 
      // make it a Date object for more flexibility
      .then(dateStr => new Date(dateStr));
}
