 import { useState, useEffect, useRef } from "react";

// ─── Stats Data ─────────────────────────────────────────────────────────────
const stats = [
  { number: "500+", label: "Events Completed" },
  { number: "4.9★", label: "Client Rating" },
  { number: "10+", label: "Years Experience" },
  { number: "100%", label: "Satisfaction" }
];

// ─── Gold Divider ───────────────────────────────────────────────────────────
const GoldDivider = () => (
  <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto my-4" />
);

 const Hero = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);
 
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20 md:pt-0"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.72), rgba(0,0,0,0.78)), url("/images/Background1.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full"
          style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(201,168,76,0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(201,168,76,0.06) 0%, transparent 50%)" }} />
        {/* Corner ornaments */}
        <svg className="absolute top-8 left-8 opacity-20" width="80" height="80" viewBox="0 0 80 80">
          <path d="M0 0 L40 0 L40 4 L4 4 L4 40 L0 40 Z" fill="#C9A84C" />
          <path d="M10 10 L30 10 L30 13 L13 13 L13 30 L10 30 Z" fill="#C9A84C" />
        </svg>
        <svg className="absolute top-8 right-8 opacity-20" width="80" height="80" viewBox="0 0 80 80">
          <path d="M80 0 L40 0 L40 4 L76 4 L76 40 L80 40 Z" fill="#C9A84C" />
          <path d="M70 10 L50 10 L50 13 L67 13 L67 30 L70 30 Z" fill="#C9A84C" />
        </svg>
        <svg className="absolute bottom-8 left-8 opacity-20" width="80" height="80" viewBox="0 0 80 80">
          <path d="M0 80 L40 80 L40 76 L4 76 L4 40 L0 40 Z" fill="#C9A84C" />
          <path d="M10 70 L30 70 L30 67 L13 67 L13 50 L10 50 Z" fill="#C9A84C" />
        </svg>
        <svg className="absolute bottom-8 right-8 opacity-20" width="80" height="80" viewBox="0 0 80 80">
          <path d="M80 80 L40 80 L40 76 L76 76 L76 40 L80 40 Z" fill="#C9A84C" />
          <path d="M70 70 L50 70 L50 67 L67 67 L67 50 L70 50 Z" fill="#C9A84C" />
        </svg>
 
        {/* Horizontal gold lines */}
        <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-900/30 to-transparent" />
        <div className="absolute bottom-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-900/20 to-transparent" />
      </div>
 
      <div className={`relative z-10 text-center px-6 max-w-4xl mx-auto transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className={`flex justify-center mb-8 transition-all duration-1000 delay-100 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
          <img src="/images/Logo.jpg" alt="RK Events Logo" className="w-[120px] h-auto" />
        </div>
 
        <p className={`text-yellow-500 text-xs tracking-[0.5em] uppercase mb-4 transition-all duration-700 delay-200 ${visible ? "opacity-100" : "opacity-0"}`}>
          Welcome to
        </p>
 
        <h1 className={`text-5xl md:text-7xl font-bold text-white mb-2 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ fontFamily: "'Playfair Display', Georgia, serif", letterSpacing: "0.1em" }}>
          RK <span className="text-yellow-400">EVENTS</span>
        </h1>
 
        <p className={`text-yellow-600 text-sm tracking-[0.4em] uppercase mb-6 transition-all duration-700 delay-400 ${visible ? "opacity-100" : "opacity-0"}`}>
          Creating Priceless Happiness
        </p>
 
        <GoldDivider />
 
        <p className={`text-gray-400 text-base md:text-lg max-w-xl mx-auto mt-6 mb-10 leading-relaxed transition-all duration-700 delay-500 ${visible ? "opacity-100" : "opacity-0"}`}>
          From breathtaking weddings to memorable celebrations — we bring your vision to life with elegance, precision, and heart.
        </p>
 
        <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <a href="#contact"
            className="px-10 py-4 bg-yellow-500 text-black font-semibold tracking-widest uppercase text-sm hover:bg-yellow-400 transition-all duration-300 hover:scale-105">
            Book Your Event
          </a>
          <a href="#services"
            className="px-10 py-4 border border-yellow-600/60 text-yellow-400 font-medium tracking-widest uppercase text-sm hover:border-yellow-400 hover:bg-yellow-950/30 transition-all duration-300">
            Explore Services
          </a>
        </div>
 
        {/* Scroll indicator */}
        <div className={`mt-20 flex flex-col items-center gap-2 transition-all duration-700 delay-1000 ${visible ? "opacity-100" : "opacity-0"}`}>
          <p className="text-yellow-700 text-[10px] tracking-[0.3em] uppercase">Scroll to discover</p>
          <div className="w-px h-10 bg-gradient-to-b from-yellow-600 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
};
 
// ─── Stats Bar ─────────────────────────────────────────────────────────────
const StatsBar = () => (
  <section className="bg-yellow-500 py-8 px-6">
    <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
      {stats.map((s, i) => (
        <div key={i}>
          <p className="text-black text-3xl font-bold" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{s.number}</p>
          <p className="text-yellow-900 text-xs tracking-widest uppercase mt-1">{s.label}</p>
        </div>
      ))}
    </div>
  </section>
);

const Landing = () => (
  <>
    <Hero />
    <StatsBar />
  </>
);

export default Landing;
