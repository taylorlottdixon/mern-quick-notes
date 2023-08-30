import sendRequest from './send-request';
const BASE_URL = '/api/notes';

export function create(noteData) {
  return sendRequest(BASE_URL, 'POST', noteData);
}

export function edit(noteId) {
  return sendRequest(`${BASE_URL}/edit`, 'POST', noteId);
}

export function deleteNote(noteId) {
  return sendRequest(`${BASE_URL}/${noteId}`, 'DELETE', noteId);
}