export default function About() {
  const profil = {
    taille: '184 cm',
    yeux: 'Vert foncé',
    cheveux: 'Châtains',
  };

  const langues = [
    { langue: 'Français', niveau: 100 },
    { langue: 'Anglais', niveau: 80 },
    { langue: 'Espagnol', niveau: 60 },
  ];

  const talents = [
    'Football (Niveau R1)',
    'Tennis (Ancien 15/3)',
    'Football américain (Champion cadet Rhône Alpes)',
    'Équitation (Galop 3)',
    'Écriture (Création)',
    'Natation (Confirmé)',
    'Badminton (Confirmé)',
  ];

  const permis = 'Permis de conduire';

  return (
    <section id="a-propos" className="py-20 bg-white scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 text-[#6B46C1]">
          À Propos
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Profil */}
          <div className="space-y-6 animate-fade-in-left">
            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
              <h3 className="text-2xl font-bold mb-6 text-[#6B46C1]">
                Profil
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-purple-200">
                  <span className="font-semibold text-gray-700">Taille</span>
                  <span className="text-gray-600">{profil.taille}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-purple-200">
                  <span className="font-semibold text-gray-700">Yeux</span>
                  <span className="text-gray-600">{profil.yeux}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-purple-200">
                  <span className="font-semibold text-gray-700">Cheveux</span>
                  <span className="text-gray-600">{profil.cheveux}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-700">{permis}</span>
                  <span className="text-green-500">✓</span>
                </div>
              </div>
            </div>

            {/* Langues */}
            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
              <h3 className="text-2xl font-bold mb-6 text-[#6B46C1]">
                Langues
              </h3>
              <div className="space-y-4">
                {langues.map((langue) => (
                  <div key={langue.langue}>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-gray-700">{langue.langue}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="h-2.5 rounded-full transition-all duration-500 bg-[#6B46C1]"
                        style={{ width: `${langue.niveau}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Talents */}
          <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform animate-fade-in-right">
            <h3 className="text-2xl font-bold mb-6 text-[#6B46C1]">
              Talents
            </h3>
            <div className="grid gap-3">
              {talents.map((talent, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 transform animate-fade-in-right"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="w-2 h-2 rounded-full bg-[#6B46C1]"></div>
                  <span className="text-gray-700">{talent}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
