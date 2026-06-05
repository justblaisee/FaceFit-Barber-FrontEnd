// Import Link untuk navigasi antar halaman tanpa reload
import { Link } from 'react-router-dom';

// Komponen Navbar untuk menampilkan menu navigasi utama
export default function Navbar() {
  return (
    <nav className="bg-[#1E1E1E] py-4 px-4 sm:px-8 border-b border-neutral-800 flex justify-center items-center z-20">
      {/* Wrapper menu navbar */}
      <div className="flex gap-4 sm:gap-8 items-center">
        
        {/* Link menuju halaman Home */}
        <Link to="/" className="text-gray-300 hover:text-white transition">
          Home
        </Link>
        
        {/* Logo / nama aplikasi */}
        <h1 className="text-2xl sm:text-4xl font-heading font-bold tracking-tighter mx-4">
          Face<span className="text-yellow-500">Fit</span>
        </h1>
        
        {/* Link menuju halaman About Us */}
        <Link to="/about" className="text-gray-300 hover:text-white transition">
          About Us
        </Link>
      </div>
    </nav>
  );
}