'use client';

import { useEffect, useRef } from 'react';

export default function Experiences() {
  const experiences = [
    {
      type: 'Court Métrage Historique',
      titre: 'NAUFRAGES',
      date: 'sept. 2022',
      realisateur: 'Arnaut Granat',
      role: 'Rôle Principal: Bardamou',
    },
    {
      type: 'Court Métrage Historique',
      titre: 'AU TEMPS DU DÉSERT',
      date: 'sept. 2021',
      realisateur: 'Arnaut Granat',
      role: 'Second Rôle: Paul',
    },
    {
      type: 'Court Métrage de Fiction',
      titre: 'RIEN DE SPÉCIAL',
      date: 'avr. 2021',
      realisateur: 'Emmanuel Dupré La Tour',
      role: 'Rôle Principal: Simon',
    },
    {
      type: 'Théâtre Comédie',
      titre: 'MONSIEUR SORT',
      date: 'févr. 2018 - août 2019',
      realisateur: 'Troupe: Les Culottés',
      role: 'Écrit par Zack Kennedy et Lorenzo Granjon\nMise en scène: Les Culottés\nRôle Principal: Patrick',
    },
    {
      type: 'Théâtre Comédie en Scenettes',
      titre: '50 NUANCES DE COUPLES',
      date: 'janv. 2019 - août 2019',
      realisateur: 'Écrit et mis en scène par Cécile Chavel',
      role: 'Différents rôles principaux hommes',
    },
  ];

  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cards = cardsRef.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    cards.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cards.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section id="experiences" className="py-20 bg-gradient-to-b from-white to-gray-50 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 text-[#6B46C1]">
          Expériences Professionnelles
        </h2>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Ligne verticale */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#6B46C1]"></div>

            {/* Expériences */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={index} 
                  ref={(el) => { cardsRef.current[index] = el; }}
                  className="relative pl-20 opacity-0"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Point sur la timeline */}
                  <div
                    className="absolute left-5 top-0 w-6 h-6 rounded-full border-4 border-white shadow-lg bg-[#6B46C1] animate-pulse-slow"
                  ></div>

                  {/* Carte d'expérience */}
                  <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 transform">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div>
                        <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold text-white bg-[#6B46C1] mb-3">
                          {exp.type}
                        </span>
                        <h3 className="text-2xl font-bold mb-2 text-[#6B46C1]">
                          {exp.titre}
                        </h3>
                      </div>
                      <span className="text-gray-500 text-sm font-medium whitespace-nowrap">
                        {exp.date}
                      </span>
                    </div>

                    <div className="space-y-2 text-gray-700">
                      <p className="font-semibold">{exp.realisateur}</p>
                      <p className="whitespace-pre-line">{exp.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
