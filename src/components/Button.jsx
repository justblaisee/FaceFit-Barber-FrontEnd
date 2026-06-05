// Komponen tombol reusable yang menerima teks, event klik, dan class tambahan
export default function Button({ text, onClick, className = "" }) {
  return (
    <button 
      // Menjalankan fungsi ketika tombol diklik
      onClick={onClick}

      // Styling utama tombol menggunakan Tailwind CSS
      className={`bg-[#3b82f6] text-white px-6 sm:px-6 py-2 rounded-full font-semibold text-lg hover:bg-blue-600 transition-all shadow-lg active:scale-95 ${className}`}
    >
      {/* Menampilkan teks tombol */}
      {text}
    </button>
  );
}