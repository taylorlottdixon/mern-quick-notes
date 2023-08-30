// import { checkToken } from '../../utilities/users-service'
import NoteCard from '../../components/NoteCard/NoteCard'
import NewNotePage from '../NewNotePage/NewNotePage';

export default function NoteListPage({ notes }) {
  const noteCards = notes.map((note, index) => (
    <NoteCard note={note} index={index} key={index} />
  ))
  
  // async function handleCheckToken() {
  //   const expDate = await checkToken();
  //   console.log(expDate)
  // }

  return (
    <>
      <h1>My Notes</h1>
      <NewNotePage />
      {notes.length ? 
        <div>{noteCards}</div>
        :
        <div><h3>No Notes Yet!</h3></div>}
    </>
  );
}