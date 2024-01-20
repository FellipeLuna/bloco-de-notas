import React, { useState, useEffect } from 'react';
import './App.css';
import Note from './components/Note';

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // Carrega as notas do localStorage ao inicializar o aplicativo
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(storedNotes);
  }, []);

  const handleSaveNote = (editedNote) => {
    const newNotes = [...notes];
    newNotes[0] = editedNote;
    setNotes(newNotes);
  };

  return (
    <div className="App">
      <Note note={notes[0] || { title: '', content: '' }} onSave={handleSaveNote} />
    </div>
  );
}

export default App;
