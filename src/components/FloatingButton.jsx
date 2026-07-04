function FloatingButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 bg-indigo-600 hover:bg-indigo-700 text-white w-14 h-14 rounded-full text-3xl shadow-lg flex items-center justify-center"
    >
      +
    </button>
  );
}

export default FloatingButton;