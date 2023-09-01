import sendRequest from './send-request';
const BASE_URL = '/api/notes';

export function createNote(noteData) {
  return sendRequest(BASE_URL, 'POST', noteData);
}

export function getAll() {
  return sendRequest(BASE_URL);
}

export function getById(noteId) {
  return sendRequest(`${BASE_URL}/${noteId}`);
}

export function edit(noteId) {
  return sendRequest(`${BASE_URL}/edit`, 'POST', noteId);
}

export function deleteNote(noteId) {
  return sendRequest(`${BASE_URL}/${noteId}`, 'DELETE', noteId);
}

export function checkToken() {
    return sendRequest(`${BASE_URL}/check-token`);
}