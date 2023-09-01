import React from "react";
import { Link } from "react-router-dom";

export default function NoteCard({ note, index }) {
  const noteName = note.id;
  const noteURL = `/notes/${noteName}`;
  const date = note.createdAt
  console.log(JSON.stringify(date))
  return (
    <Link to={noteURL}>
      <div className="NoteCard">
        <p className="note-text">{note.text}</p>
        <p className="note-timestamp">Created: {date.toLocaleString()}</p>
      </div>
    </Link>
  );
}
