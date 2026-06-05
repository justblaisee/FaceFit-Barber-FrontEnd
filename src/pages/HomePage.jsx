// Import hook useNavigate untuk berpindah halaman secara programmatic
import { useNavigate } from 'react-router-dom';

// Import komponen reusable
import Navbar from '../components/Navbar';
import Button from '../components/Button';

// Import gambar hero untuk tampilan desktop dan mobile
import HeroImgDesktop from '../assets/Barbershop.webp';
import HeroImgMobile from '../assets/Barbershop Vertical.jpg';

// Komponen halaman utama aplikasi
function HomePage() {
  // Hook untuk navigasi ke halaman lain
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-[#0f0f0f] text-white">
      {/* Navbar utama */}
      <Navbar />

      {/* Section hero */}
      <div className="flex-1 relative">
        {/* Menampilkan gambar berbeda berdasarkan ukuran layar */}
        <picture>
          <source media="(min-width: 768px)" srcSet={HeroImgDesktop} />
          <source media="(max-width: 767px)" srcSet={HeroImgMobile} />
          
          {/* Gambar background hero */}
          <img
            className="w-full h-full object-cover opacity-40 grayscale"
            src={HeroImgDesktop}
            alt="Barbershop Interior"
          />
        </picture>

        {/* Teks utama di tengah halaman */}
        <div className="fixed inset-0 flex flex-col items-center justify-center px-6 text-center text-white z-10 pointer-events-none">
          <h1 className="max-w-5xl text-2xl font-heading font-bold leading-tight sm:text-5xl md:text-6xl bg-linear-to-r from-blue-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
            Discover your best hairstyle based on your face shape in seconds.
          </h1>

          {/* Subteks teknologi AI */}
          <p className="mt-6 text-sm sm:text-base text-gray-300 font-light tracking-wide">
            Powered by <span className="text-blue-400 font-medium">AI Technology</span>
          </p>
        </div>

        {/* Tombol menuju halaman scan */}
        <div className="fixed inset-0 flex items-end justify-center pb-14 z-20 pointer-events-none">
          <Button 
            onClick={() => navigate('/scan')} 
            text="Coba Sekarang" 
            className="pointer-events-auto" 
          />
        </div>
      </div>
    </div>
  );
}

// Export halaman agar bisa digunakan di routing
export default HomePage;