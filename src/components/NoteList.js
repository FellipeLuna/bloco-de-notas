import React from 'react';

const NoteList = ({ notes, onNoteClick }) => {
  return (
    <ul>
      {notes.map((note, index) => (
        <li key={index} onClick={() => onNoteClick(index)}>
          {note.title}
        </li>
      ))}
    </ul>
  );
};

export default NoteList;
