import { useEffect, useState } from "react";
import {
  getNotes,
  createNote,
  updateNote,
  deleteNote,
} from "./services/api";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import FloatingButton from "./components/FloatingButton";

function App() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");
  const [editingNote, setEditingNote] = useState(null);
  const [showForm, setShowForm] = useState(false);

  // Load Notes
  const loadNotes = async () => {
    try {
      const res = await getNotes();
      setNotes(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadNotes();
  }, []);

  // Add Note
  const addNote = async (data) => {
    try {
      await createNote(data);
      setShowForm(false);
      loadNotes();
    } catch (err) {
      console.log(err);
    }
  };

  // Update Note
  const updateNoteHandler = async (id, data) => {
    try {
      await updateNote(id, data);
      setEditingNote(null);
      setShowForm(false);
      loadNotes();
    } catch (err) {
      console.log(err);
    }
  };

  // Delete Note
  const deleteNoteHandler = async (id) => {
    try {
      await deleteNote(id);
      loadNotes();
    } catch (err) {
      console.log(err);
    }
  };

  // Filter Notes (Search)
  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(search.toLowerCase()) ||
      note.content.toLowerCase().includes(search.toLowerCase())
  );

  // Open Add Form
  const handleOpenForm = () => {
    setEditingNote(null);
    setShowForm(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6">

      {/* Header */}
      <Header />

      {/* Search */}
      <SearchBar search={search} setSearch={setSearch} />

      {/* Notes List */}
      <NoteList
        notes={filteredNotes}
        onDelete={deleteNoteHandler}
        onEdit={(note) => {
          setEditingNote(note);
          setShowForm(true);
        }}
      />

      {/* Form Modal Style */}
      {showForm && (
        <div className="fixed inset-0 bg-black/40 flex items-end justify-center">
          <div className="w-full max-w-md bg-white rounded-t-2xl p-4">

            <NoteForm
              onAddNote={addNote}
              onUpdateNote={updateNoteHandler}
              editingNote={editingNote}
              setEditingNote={setEditingNote}
            />

          </div>
        </div>
      )}

      {/* Floating Button */}
      <FloatingButton onClick={handleOpenForm} />

    </div>
  );
}

export default App;