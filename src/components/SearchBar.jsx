function SearchBar({ search, setSearch }) {
  return (
    <div className="mb-5">
      <input
        type="text"
        placeholder="🔍 Search notes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 rounded-xl border bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
    </div>
  );
}

export default SearchBar;