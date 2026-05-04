import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
 
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
 
  const links = ["Services", "About", "Gallery", "Contact"];
 
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-black/95 backdrop-blur-md border-b border-yellow-900/40 py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={`${import.meta.env.BASE_URL}images/Logo.jpg`} alt="RK Events Logo" className="w-[42px] h-auto" />
          <div>
            <p className="text-yellow-400 font-bold text-lg leading-none tracking-widest" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>RK EVENTS</p>
            <p className="text-yellow-600/70 text-[9px] tracking-[0.2em] uppercase">Creating Priceless Happiness</p>
          </div>
        </div>
        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`}
              className="text-gray-300 hover:text-yellow-400 text-sm tracking-widest uppercase transition-colors duration-300 relative group">
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-yellow-500 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a href="#contact" className="border border-yellow-500 text-yellow-400 text-sm px-5 py-2 hover:bg-yellow-500 hover:text-black transition-all duration-300 tracking-widest uppercase">
            Book Now
          </a>
        </div>
        {/* Mobile hamburger */}
        <button className="md:hidden text-yellow-400 text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-black/98 border-t border-yellow-900/40 px-6 py-4 flex flex-col gap-4">
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-yellow-400 text-sm tracking-widest uppercase transition-colors">{link}</a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)} className="border border-yellow-500 text-yellow-400 text-sm px-5 py-2 text-center hover:bg-yellow-500 hover:text-black transition-all tracking-widest uppercase">
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
