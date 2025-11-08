'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          {/* Photo de profil */}
          <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl border-[6px] border-[#6B46C1] animate-float">
            <Image
              src="/images/lorenzo.png"
              alt="Lorenzo Granjon - Comédien"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 256px, 320px"
            />
          </div>

          {/* Informations */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl lg:text-7xl font-bold mb-4 text-[#6B46C1]">
                Lorenzo
                <br />
                Granjon
              </h1>
              <p className="text-2xl lg:text-3xl text-gray-600 font-light mb-6">
                Comédien
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <a
                href="#contact"
                className="px-8 py-4 rounded-full font-semibold text-white bg-[#6B46C1] transition-all duration-300 hover:scale-105 hover:shadow-xl transform"
              >
                Me Contacter
              </a>
              <a
                href="#experiences"
                className="px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 border-2 border-[#6B46C1] text-[#6B46C1] transform"
              >
                Voir mes Projets
              </a>
            </div>

            {/* Contact rapide */}
            <div className="flex items-center gap-2 text-gray-600 mt-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <a href="mailto:lorenzo.granjon@hotmail.com" className="hover:text-[#6B46C1] transition-colors">
                lorenzo.granjon@hotmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-20 animate-bounce">
          <a href="#parcours" className="text-[#6B46C1]">
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
