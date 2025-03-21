const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-700 via-indigo-800 to-indigo-900 text-white py-8 md:py-12 px-6 rounded-lg shadow-lg mb-8">
      <div className="container mx-auto relative">
        {/* Éléments de design décoratifs */}
        <div className="absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500 opacity-10 rounded-full translate-y-1/2 -translate-x-1/4"></div>

        <div className="relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100">
            Prix de l'Immobilier à Paris
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl">
            Visualisation interactive de l'évolution des prix au m² depuis
            janvier 2020, par mois et par arrondissement.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;