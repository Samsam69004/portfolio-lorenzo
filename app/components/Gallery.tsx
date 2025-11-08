'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';

export default function Gallery() {
  const [showAll, setShowAll] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);
  
  const handleTogglePhotos = () => {
    if (!showAll) {
      // Si on ouvre, on scroll doucement après un petit délai
      setShowAll(true);
    } else {
      // Si on ferme, on scroll vers le début de la galerie
      setShowAll(false);
      setTimeout(() => {
        galleryRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };
  
  // Photos de Lorenzo
  const images = Array.from({ length: 24 }, (_, i) => ({
    id: i + 1,
    src: `/images/photo${i + 1}.jpg`,
    title: `Photo ${i + 1}`,
    category: i % 3 === 0 ? 'Portrait' : i % 3 === 1 ? 'Scène' : 'Coulisses'
  }));

  const [filter, setFilter] = useState('Tous');
  const categories = ['Tous', 'Portrait', 'Scène', 'Coulisses'];

  const filteredImages = filter === 'Tous' 
    ? images 
    : images.filter(img => img.category === filter);

  // Afficher seulement 6 photos par défaut (2 lignes)
  const displayedImages = showAll ? filteredImages : filteredImages.slice(0, 6);  return (
    <section id="galerie" className="py-20 bg-white scroll-mt-20" ref={galleryRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-8 text-[#6B46C1]">
          Galerie
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Découvrez mes différents projets et rôles à travers ces photos
        </p>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, idx) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-110 animate-fade-in-up ${
                filter === category
                  ? 'text-white shadow-lg scale-105 bg-[#6B46C1]'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grille d'images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto transition-all duration-500">
          {displayedImages.map((image, idx) => (
            <div
              key={image.id}
              className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105 hover:-rotate-1 animate-scale-in"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              
              {/* Overlay au hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center p-6">
                <span className="text-white text-lg font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bouton Afficher plus */}
        {filteredImages.length > 6 && (
          <div className="text-center mt-12">
            <button
              onClick={handleTogglePhotos}
              className="px-8 py-4 bg-[#6B46C1] text-white rounded-full font-semibold hover:bg-[#5a3aa3] transition-all duration-300 hover:scale-105 transform shadow-lg"
            >
              {showAll ? 'Afficher moins' : `Afficher toutes les photos (${filteredImages.length})`}
            </button>
          </div>
        )}        {/* Section Showreel */}
        <div className="mt-20 max-w-6xl mx-auto space-y-12">
          <div>
            <h3 className="text-3xl font-bold text-center mb-8 text-[#6B46C1]">
              Bande Démo
            </h3>
            <div className="aspect-video rounded-2xl shadow-xl overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/XVFMNwbhSAY"
                title="Bande démo Lorenzo Granjon"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-center mb-8 text-[#6B46C1]">
              Au Temps du Désert
            </h3>
            <div className="aspect-video rounded-2xl shadow-xl overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/k-Ekc5HHuXU"
                title="Au Temps du Désert - Lorenzo Granjon"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
