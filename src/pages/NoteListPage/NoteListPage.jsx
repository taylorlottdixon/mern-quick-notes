import { checkToken } from '../../utilities/notes-service'
import NoteCard from '../../components/NoteCard/NoteCard'
import NewNotePage from '../NewNotePage/NewNotePage';

export default function NoteListPage({ notes, addNote, user }) {
  console.log(notes)
  // const myNotes = notes.filter((note) => {
  //   return note.user === user.id});
  const noteCards = notes ? notes.map((note, index) => (
    <NoteCard note={note} index={index} key={index} />
  )) : false
 
  async function handleCheckToken() {
    const expDate = await checkToken();
  }

  return (
    <>
      <h1>My Notes</h1>
      <NewNotePage addNote={addNote} user={user} />
      {notes ? 
        <div>{noteCards}</div>
        :
        <div><h3>No Notes Yet!</h3></div>}
    </>
  );
}