import { useState, useEffect } from "react";

function NoteForm({
  onAddNote,
  onUpdateNote,
  editingNote,
  setEditingNote,
}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setContent(editingNote.content);
    } else {
      setTitle("");
      setContent("");
    }
  }, [editingNote]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !content) return;

    if (editingNote) {
      onUpdateNote(editingNote.id, { title, content });
    } else {
      onAddNote({ title, content });
    }

    setTitle("");
    setContent("");
    setEditingNote(null);
  };

  return (
    <div className="bg-white p-4 rounded-2xl shadow mb-5">

      <h2 className="text-lg font-bold mb-3">
        {editingNote ? "✏️ Update Note" : "➕ Add Note"}
      </h2>

      <input
        className="w-full border p-2 rounded-lg mb-3"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="w-full border p-2 rounded-lg mb-3"
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        className="w-full bg-indigo-600 text-white py-2 rounded-lg"
      >
        {editingNote ? "💾 Update" : "➕ Add"}
      </button>

      {editingNote && (
        <button
          onClick={() => setEditingNote(null)}
          className="w-full mt-2 bg-gray-400 text-white py-2 rounded-lg"
        >
          ❌ Cancel
        </button>
      )}

    </div>
  );
}

export default NoteForm;