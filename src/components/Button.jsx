export default function Button({ text, onClick, className = "" }) {
  return (
    <button 
      onClick={onClick}
      className={`bg-[#3b82f6] text-white px-6 sm:px-6 py-2 rounded-full font-semibold text-lg hover:bg-blue-600 transition-all shadow-lg active:scale-95 ${className}`}
    >
      {text}
    </button>
  );
}