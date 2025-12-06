import React, { useState, useEffect } from 'react';
import { APPS, CATEGORIES } from './constants';
import { Category } from './types';
import AppCard from './components/AppCard';
import Footer from './components/Footer';
import { Sparkles, Rocket, Search } from 'lucide-react';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredApps, setFilteredApps] = useState(APPS);

  useEffect(() => {
    const results = APPS.filter(app => {
      const matchesCategory = selectedCategory === 'All' || app.category === selectedCategory;
      const matchesSearch = app.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            app.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
    setFilteredApps(results);
  }, [selectedCategory, searchTerm]);

  return (
    <div className="min-h-screen relative overflow-hidden bg-sky-50">
      {/* Decorative Blobs */}
      <div className="blob bg-pink-300 w-96 h-96 rounded-full top-0 left-0 -translate-x-1/2 -translate-y-1/2 mix-blend-multiply opacity-50 animate-blob"></div>
      <div className="blob bg-yellow-300 w-96 h-96 rounded-full top-0 right-0 translate-x-1/2 -translate-y-1/2 mix-blend-multiply opacity-50 animate-blob animation-delay-2000"></div>
      <div className="blob bg-cyan-300 w-80 h-80 rounded-full bottom-0 left-20 translate-y-1/3 mix-blend-multiply opacity-50 animate-blob animation-delay-4000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-white rounded-full shadow-md mb-6 animate-bounce">
            <Rocket className="text-indigo-600 mr-2" size={32} />
            <span className="text-indigo-600 font-bold text-lg">Let's Learn!</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-800 mb-6 tracking-tight">
            Learning <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Arcade</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto font-medium">
            Discover amazing games and tools to help you become a master of Maths and English!
          </p>
        </header>

        {/* Controls Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 sticky top-4 z-50 bg-white/80 backdrop-blur-md p-4 rounded-3xl shadow-lg border border-white/50">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`
                  px-5 py-2.5 rounded-2xl font-bold transition-all duration-200 flex items-center gap-2
                  ${selectedCategory === cat.value 
                    ? `bg-${cat.color}-500 text-white shadow-lg scale-105` 
                    : `bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-700`}
                `}
              >
                {selectedCategory === cat.value && <Sparkles size={16} />}
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Search games..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2.5 w-full md:w-64 rounded-xl border-2 border-slate-200 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100 outline-none transition-all font-semibold text-slate-600 placeholder:font-normal"
            />
          </div>
        </div>

        {/* Grid */}
        <main>
          {filteredApps.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {filteredApps.map((app) => (
                <AppCard key={app.id} app={app} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white/50 rounded-3xl border-2 border-dashed border-slate-300">
              <div className="text-6xl mb-4">🤔</div>
              <h3 className="text-2xl font-bold text-slate-700 mb-2">No games found</h3>
              <p className="text-slate-500">Try changing the category or search term!</p>
              <button 
                onClick={() => {setSelectedCategory('All'); setSearchTerm('');}}
                className="mt-6 text-indigo-500 font-bold hover:underline"
              >
                Clear Filters
              </button>
            </div>
          )}
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;