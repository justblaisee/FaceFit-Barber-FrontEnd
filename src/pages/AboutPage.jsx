import Navbar from '../components/Navbar';

function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white flex flex-col">
      <Navbar />
      <main className="grow flex flex-col items-center justify-center p-6 text-center max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 tracking-tight">Tentang Kami</h2>
        <p className="text-gray-300 text-lg text-justify leading-relaxed mb-3">
          FaceFit Barber adalah aplikasi web inovatif yang dikembangkan oleh tim <span className="font-bold mb-6  text-white tracking-tight">CC26-PSU304</span> sebagai bagian dari Capstone Project program DBS Coding Camp 2026. Aplikasi ini bertujuan untuk membantu pria dalam menemukan gaya rambut yang paling ideal dan proporsional berdasarkan karakteristik unik bentuk wajah mereka.
        </p>
        <p className="text-gray-300 text-lg text-justify leading-relaxed"> 
          Fitur utama yang disediakan meliputi pengambilan cuplikan wajah melalui kamera web, analisis bentuk wajah otomatis serta rekomendasi gaya rambut yang dipersonalisasi dengan dukungan teknologi Artificial Intelligence (AI).
        </p>
      </main>
    </div>
  );
}

export default AboutPage;