import NoteItem from "./NoteItem";
import EmptyState from "./EmptyState";

function NoteList({ notes, onDelete, onEdit }) {
  if (notes.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="space-y-4">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default NoteList;