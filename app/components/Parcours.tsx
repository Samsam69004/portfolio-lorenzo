export default function Parcours() {
  return (
    <section id="parcours" className="py-20 bg-gradient-to-b from-white to-gray-50 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12 text-[#6B46C1]">
            Mon Parcours
          </h2>
          
          <div className="text-gray-600 text-justify space-y-6 leading-relaxed">
            <p>
              Comédien formé à l&apos;école <strong>Actors Factory</strong> de Paris entre 2019 et 2021, où j&apos;ai approfondi les techniques avancées en art dramatique. Sous la direction de Tiffany Stern et d&apos;autres coachs expérimentés, j&apos;ai appris à affiner mon jeu, à me préparer aux exigences du métier d&apos;acteur, et à explorer différentes approches du travail scénique.
            </p>
            <p>
              Avant cela, j&apos;ai suivi une première formation de trois ans en art dramatique (2016-2019), encadrée par des professeurs venus de cultures et de méthodes diverses. Cette diversité m&apos;a permis de développer une palette de jeu riche et nuancée. J&apos;ai également eu la chance de participer à un stage intensif au Club Manhattan à New York, qui a renforcé ma vision internationale du métier.
            </p>
            <p>
              Pour affiner ma technique, j&apos;ai pris part à un stage de 39 heures dédié à la respiration et à la maîtrise du souffle, animé par des coachs de renommée internationale tels que Carol Fox Prescott, Joanna Beckson et Jodie Lynne McClintock.
            </p>
            <p>
              Sur scène, j&apos;ai interprété plusieurs rôles dans des pièces de théâtre, notamment au sein de la troupe Les Culottés, où j&apos;ai également coécrit et mis en scène des spectacles. J&apos;ai aussi travaillé sous la direction de Cécile Chavel, incarnant différents premiers rôles.
            </p>
            <p>
              Devant la caméra, j&apos;ai eu la chance de jouer dans plusieurs courts-métrages, parmi lesquels <em>Rien de spécial</em>, <em>Au temps du désert</em> ou encore <em>Naufragés</em>, dans des rôles principaux ou secondaires.
            </p>
            <p>
              En parallèle, je cultive une forte polyvalence physique et artistique. Passionné de sport (football, tennis, équitation…), j&apos;utilise ces disciplines pour nourrir mon jeu et enrichir mes personnages. Je parle aussi anglais et espagnol, ce qui me permet d&apos;ouvrir mon travail à d&apos;autres horizons.
            </p>

            <div className="pt-6 text-center">
              <a
                href="/cv_lorenzo.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-[#6B46C1] text-white rounded-lg hover:bg-[#5a3aa3] active:scale-95 transition-all duration-300 shadow-md font-semibold"
              >
                Télécharger le CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
