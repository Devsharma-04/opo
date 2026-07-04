function NoteItem({ note, onDelete, onEdit }) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm border">

      <h2 className="text-lg font-bold text-gray-800">
        {note.title}
      </h2>

      <p className="text-gray-600 mt-2 text-sm">
        {note.content}
      </p>

      <p className="text-xs text-gray-400 mt-3">
        {new Date(note.created_at).toLocaleString()}
      </p>

      <div className="flex gap-3 mt-4">

        <button
          onClick={() => onEdit(note)}
          className="flex-1 bg-green-500 text-white py-2 rounded-lg"
        >
          ✏️ Edit
        </button>

        <button
          onClick={() => onDelete(note.id)}
          className="flex-1 bg-red-500 text-white py-2 rounded-lg"
        >
          🗑 Delete
        </button>

      </div>

    </div>
  );
}

export default NoteItem;