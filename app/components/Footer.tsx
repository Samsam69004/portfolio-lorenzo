export default function Footer() {
  return (
    <footer className="py-8 text-white bg-[#6B46C1]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Lorenzo Granjon</h3>
            <p className="text-purple-200">Comédien</p>
          </div>

          <div className="flex gap-6">
            {/* Placeholder pour réseaux sociaux - à activer si nécessaire */}
            <a
              href="mailto:lorenzo.granjon@hotmail.com"
              className="hover:text-purple-200 transition-colors"
              aria-label="Email"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-purple-500 text-center text-purple-200 text-sm">
          <p>&copy; {new Date().getFullYear()} Lorenzo Granjon. Tous droits réservés.</p>
          <p className="mt-2 flex items-center justify-center gap-2">
            Site réalisé avec
            <svg 
              className="w-4 h-4 text-red-400 animate-pulse" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path 
                fillRule="evenodd" 
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" 
                clipRule="evenodd" 
              />
            </svg>
            par{' '}
            <a
              href="https://www.linkedin.com/in/sami-chabane-085881151/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:text-white transition-colors underline"
            >
              Sami Chabane
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
