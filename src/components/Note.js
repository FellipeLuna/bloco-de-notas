import React, { useState, useEffect } from 'react';

const Note = ({ note, onSave }) => {
  const [editedNote, setEditedNote] = useState(note);
  const [isSaved, setIsSaved] = useState(false);

  const handleTitleChange = (event) => {
    setEditedNote({ ...editedNote, title: event.target.value });
    setIsSaved(false); // Resetar a mensagem de salvamento quando o título é alterado
  };

  const handleContentChange = (event) => {
    setEditedNote({ ...editedNote, content: event.target.value });
    setIsSaved(false); // Resetar a mensagem de salvamento quando o conteúdo é alterado
  };

  const handleSave = () => {
    onSave(editedNote);
    setIsSaved(true);
  };

  useEffect(() => {
    setEditedNote(note);
    setIsSaved(false); // Resetar a mensagem de salvamento quando uma nova nota é carregada
  }, [note]);

  return (
    <div className="note-container">
      <input
        type="text"
        value={editedNote.title}
        onChange={handleTitleChange}
        placeholder="Título"
      />
      <textarea
        value={editedNote.content}
        onChange={handleContentChange}
        placeholder="Conteúdo da nota"
      />
      <button onClick={handleSave}>Salvar</button>
      {isSaved && <p>Nota salva com sucesso!</p>}
    </div>
  );
};

export default Note;
