import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-[#1E1E1E] py-4 px-4 sm:px-8 border-b border-neutral-800 flex justify-center items-center z-20">
      <div className="flex gap-4 sm:gap-8 items-center">
        <Link to="/" className="text-gray-300 hover:text-white transition">Home</Link>
        
        <h1 className="text-2xl sm:text-4xl font-heading font-bold tracking-tighter mx-4">
          Face<span className="text-yellow-500">Fit</span>
        </h1>
        
        <Link to="/about" className="text-gray-300 hover:text-white transition">About Us</Link>
      </div>
    </nav>
  );
}