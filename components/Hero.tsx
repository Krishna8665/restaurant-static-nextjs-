// components/Hero.tsx

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-[1.03]"
        style={{
          backgroundImage: `url('/images/hero-bg.jpg')`, // your large scenic photo
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/25 to-black/45" />
      </div>

      <div className="relative z-10 text-center px-5 sm:px-8 max-w-6xl">
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F5F5DC] mb-4 md:mb-6 leading-tight drop-shadow-2xl">
          Pandeli
          <br />
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.3em] opacity-95">
            Restaurant & Bar
          </span>
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl text-[#D4AF37] font-serif italic mt-6 md:mt-10 mb-12 md:mb-16 drop-shadow-lg">
          Where Great Food Meets Stunning Views of Sarangkot
        </p>

        <div className="flex flex-col sm:flex-row gap-6 md:gap-10 justify-center">
          <a
            href="tel:+9779841234567"
            className="
              bg-[#C1440E] text-white px-10 sm:px-14 py-4 sm:py-5 
              rounded-full text-lg sm:text-xl font-medium tracking-wide
              hover:bg-[#a3390c] hover:scale-105 active:scale-95
              transition-all duration-300 shadow-xl flex items-center justify-center gap-3 min-w-[220px]
            "
          >
            <span className="text-2xl">☎</span> Call Now
          </a>

          <a
            href="https://wa.me/9779841234567"
            target="_blank"
            rel="noopener noreferrer"
            className="
              border-2 border-[#F5F5DC] text-[#F5F5DC] px-10 sm:px-14 py-4 sm:py-5 
              rounded-full text-lg sm:text-xl font-medium tracking-wide
              hover:bg-[#F5F5DC] hover:text-[#C1440E] hover:scale-105
              transition-all duration-300 shadow-xl flex items-center justify-center gap-3 min-w-[220px]
            "
          >
            <span className="text-2xl">💬</span> WhatsApp Us
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-8 h-14 border-2 border-white/50 rounded-full flex items-start justify-center p-2.5">
          <div className="w-1.5 h-5 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}