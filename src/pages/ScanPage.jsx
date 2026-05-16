import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Webcam from 'react-webcam';
import { useCallback ,useRef, useState } from "react";

function ScanPage() {
  const navigate = useNavigate();
  const webcamRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageSrc(imageSrc);
  }, [webcamRef]);

  const retake = () => {
    setImageSrc(null);
    setAnalysisResult(null);
  };

  const videoConstraints = {
    width: 1920,
    height: 1080,
    facingMode: "user",
  };

  const analyzePhoto = async () => {
    if (isAnalyzing) return;
    setIsAnalyzing(true);
    
    try {
      //
    } catch (error) {
      console.error("Gagal mengirim data ke server:", error);
      alert("Terjadi kesalahan sistem.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white flex flex-col">
      <Navbar />
      <main className="grow flex flex-col items-center py-5 px-6">
        <div className="text-center mb-10">
          <div className="relative w-full max-w-2xl aspect-3/4 sm:aspect-video bg-black rounded-2xl overflow-hidden flex items-center justify-center mb-6 shadow-2xl border border-neutral-800 shadow-blue-900/20">
            {imageSrc ? (
              <img src={imageSrc} alt="Hasil tangkapan kamera" className="w-full h-full object-cover" />
            ) : (
              <>
                <Webcam 
                  audio={false} 
                  ref={webcamRef} 
                  screenshotFormat="image/jpeg" 
                  className="w-full h-full object-cover" 
                  videoConstraints={videoConstraints}
                  mirrored 
                />

                {/* Overlay Panduan Wajah */}
                <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                  <div className="w-[60%] h-[60%] sm:w-[40%] sm:h-[80%] border-2 border-white/50 border-dashed rounded-[50%] shadow-[0_0_0_9999px_rgba(0,0,0,0.6)] transition-all"></div>
                </div>
              </>
            )}
          </div>
          <p className="text-neutral-300">{imageSrc ? "Analisis foto ini atau ambil ulang foto." : "Posisikan wajah Anda tepat di tengah frame."}</p>
        </div>
        
        <div className="flex gap-4">
          {imageSrc ? (
            <>
              <Button 
                text={isAnalyzing ? "Menganalisis..." : "Analisis"} 
                onClick={analyzePhoto} 
                className={isAnalyzing ? "opacity-70 cursor-wait" : ""}
              />
              {!isAnalyzing && <Button text="Ambil Ulang" type="outline" onClick={retake} />}
            </>
          ) : (
            <Button text="Ambil Foto" onClick={capture} />
          )}
          <Button text="Batal" type="outline" onClick={() => navigate('/')} />
        </div>

        {/* Bagian Hasil Analisis */}
        {analysisResult && (
          <div className="mt-12 w-full max-w-4xl bg-neutral-900 rounded-2xl p-6 sm:p-8 border border-neutral-800 shadow-xl transition-all duration-500 ease-out">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-yellow-500 mb-3">
                Bentuk Wajah: {analysisResult.faceShape}
              </h3>
              <p className="text-neutral-400 leading-relaxed max-w-2xl mx-auto text-lg">
                {analysisResult.description}
              </p>
            </div>
            
            {/* Grid Hasil Rekomendasi */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {analysisResult.recommendations.map((item, idx) => (
                <div key={idx} className="bg-black border border-neutral-800 rounded-xl overflow-hidden shadow-lg hover:border-blue-500 transition-colors group">
                  <div className="aspect-square w-full overflow-hidden bg-neutral-800">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <h4 className="text-xl font-bold text-white mb-2">{item.name}</h4>
                    <p className="text-sm text-neutral-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default ScanPage;