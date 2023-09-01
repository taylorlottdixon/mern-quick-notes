import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import { getNotes } from '../../utilities/notes-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewNotePage from '../NewNotePage/NewNotePage';
import NoteListPage from '../NoteListPage/NoteListPage';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [notes, setNotes] = useState([])
  useEffect(() => {
    getNotes().then(setNotes)
  }, [])
  function addNote(note) {
    // Replace state, don't mutate it
    if (notes) setNotes([...notes, note]);
    else setNotes([note])
  }

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user.name} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/notes/new" element={<NewNotePage addNote={addNote} setNotes={setNotes} user={user} />} />
              <Route path="/*" element={<NoteListPage notes={notes} addNote={addNote} user={user} />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
