// Import komponen Navbar yang digunakan sebagai navigasi halaman
import Navbar from '../components/Navbar';

// Komponen halaman About untuk menampilkan informasi tentang aplikasi
function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white flex flex-col">
      {/* Menampilkan navbar di bagian atas halaman */}
      <Navbar />

      {/* Konten utama halaman About */}
      <main className="grow flex flex-col items-center justify-center p-6 text-center max-w-2xl mx-auto">
        
        {/* Judul halaman */}
        <h2 className="text-4xl font-bold mb-6 tracking-tight">
          Tentang Kami
        </h2>

        {/* Paragraf penjelasan tentang aplikasi dan tim pengembang */}
        <p className="text-gray-300 text-lg text-justify leading-relaxed mb-3">
          FaceFit Barber adalah aplikasi web inovatif yang dikembangkan oleh tim{' '}
          <span className="font-bold mb-6 text-white tracking-tight">
            CC26-PSU304
          </span>{' '}
          sebagai bagian dari Capstone Project program DBS Coding Camp 2026. 
          Aplikasi ini bertujuan untuk membantu pria dalam menemukan gaya rambut 
          yang paling ideal dan proporsional berdasarkan karakteristik unik bentuk 
          wajah mereka.
        </p>

        {/* Paragraf penjelasan fitur utama aplikasi */}
        <p className="text-gray-300 text-lg text-justify leading-relaxed"> 
          Fitur utama yang disediakan meliputi pengambilan cuplikan wajah melalui 
          kamera web, analisis bentuk wajah otomatis serta rekomendasi gaya rambut 
          yang dipersonalisasi dengan dukungan teknologi Artificial Intelligence (AI).
        </p>
      </main>
    </div>
  );
}

// Export komponen agar dapat digunakan pada routing aplikasi
export default AboutPage;