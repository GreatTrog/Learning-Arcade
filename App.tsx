import React, { useState, useEffect } from 'react';
import { APPS, CATEGORIES } from './constants';
import { Category } from './types';
import AppCard from './components/AppCard';
import Footer from './components/Footer';
import { 
  Sparkles, Rocket, Search, Gamepad2, Calculator, BookOpen, 
  Beaker, Compass, Wrench, GraduationCap, BarChart3, Shield, Award,
  Music
} from 'lucide-react';

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

  const getCategoryIcon = (value: Category, size = 16) => {
    switch (value) {
      case 'All': return <Gamepad2 size={size} />;
      case 'Maths': return <Calculator size={size} />;
      case 'English': return <BookOpen size={size} />;
      case 'Science': return <Beaker size={size} />;
      case 'History': return <Compass size={size} />;
      case 'Admin': return <Wrench size={size} />;
      case 'Music': return <Music size={size} />;
      default: return <Sparkles size={size} />;
    }
  };

  const scrollToGames = () => {
    const mainElement = document.querySelector('main');
    if (mainElement) {
      mainElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#F8FAFD]">
      {/* Decorative Blobs */}
      <div className="blob bg-brandBlue/10 w-96 h-96 rounded-full top-0 left-0 -translate-x-1/2 -translate-y-1/2 mix-blend-multiply opacity-40 animate-blob"></div>
      <div className="blob bg-brandPink/10 w-96 h-96 rounded-full top-0 right-0 translate-x-1/2 -translate-y-1/2 mix-blend-multiply opacity-40 animate-blob animation-delay-2000"></div>
      <div className="blob bg-brandTeal/10 w-80 h-80 rounded-full bottom-0 left-20 translate-y-1/3 mix-blend-multiply opacity-40 animate-blob animation-delay-4000"></div>

      <div className="relative max-w-none mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 pt-8 pb-12">
        {/* Header */}
        <header className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-[#E9EDF5] mb-12">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer transform hover:scale-102 transition-transform shrink-0" 
            onClick={() => { setSelectedCategory('All'); setSearchTerm(''); }}
          >
            <img src="/assets/logo.png" alt="Learning Arcade" className="h-16 md:h-20 lg:h-24 object-contain" />
          </div>

          {/* Category Filters inside Header */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.value;
              let selectedClass = 'bg-brandBlue text-white shadow-md shadow-brandBlue/20';
              if (cat.value === 'English') selectedClass = 'bg-brandPink text-white shadow-md shadow-brandPink/20';
              if (cat.value === 'Science') selectedClass = 'bg-brandTeal text-white shadow-md shadow-brandTeal/20';
              if (cat.value === 'History') selectedClass = 'bg-brandPurple text-white shadow-md shadow-brandPurple/20';
              if (cat.value === 'Admin') selectedClass = 'bg-brandOrange text-white shadow-md shadow-brandOrange/20';
              if (cat.value === 'Music') selectedClass = 'bg-brandLavender text-white shadow-md shadow-brandLavender/20';
              
              return (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`
                    px-4 py-2 rounded-full font-bold text-sm transition-all duration-200 flex items-center gap-2 border border-transparent
                    ${isSelected 
                      ? `${selectedClass} scale-105` 
                      : 'bg-transparent text-brandNavy border-[#E9EDF5] hover:bg-[#EEF5FA]'}
                  `}
                >
                  {getCategoryIcon(cat.value, 15)}
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Let's Learn Button */}
          <button 
            onClick={scrollToGames}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#B58DFF]/40 text-brandBlue font-bold text-sm md:text-base hover:bg-brandBlue/5 transition-all shadow-sm bg-white"
          >
            <Rocket className="rotate-45 text-brandBlue animate-pulse" size={18} />
            Let's Learn!
          </button>
        </header>

        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 items-center mb-8 lg:mb-16 mt-4 lg:mt-8">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-[50px] font-black text-brandNavy leading-tight tracking-tight mb-4 lg:mb-6">
              Explore amazing games <br className="hidden md:inline" />
              and tools to <span className="text-brandBlue">spark</span> <span className="text-brandPurple">your</span> <span className="text-brandPink">curiosity</span> <br className="hidden md:inline" />
              and master every subject!
            </h1>

            {/* Sub-badges */}
            <div className="flex flex-wrap gap-2 mb-5 lg:mb-6">
              <div className="flex items-center gap-1.5 px-3 py-1.5 lg:px-4 lg:py-2 bg-[#F5F2FF] rounded-full border border-brandPurple/10 shadow-sm text-xs lg:text-sm">
                <Gamepad2 size={14} className="text-brandPurple" />
                <span className="font-bold text-brandPurple">Playful</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 lg:px-4 lg:py-2 bg-[#F0F5FF] rounded-full border border-brandBlue/10 shadow-sm text-xs lg:text-sm">
                <BookOpen size={14} className="text-brandBlue" />
                <span className="font-bold text-brandBlue">Educational</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 lg:px-4 lg:py-2 bg-[#FFF9EE] rounded-full border border-brandOrange/15 shadow-sm text-xs lg:text-sm">
                <Award size={14} className="text-brandOrange" />
                <span className="font-bold text-brandOrange">Achieving</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 lg:px-4 lg:py-2 bg-[#EAFBFC] rounded-full border border-brandTeal/10 shadow-sm text-xs lg:text-sm">
                <Compass size={14} className="text-brandTeal" />
                <span className="font-bold text-brandTeal">Explorative</span>
              </div>
            </div>
            
            {/* Embedded Search input inside hero left column */}
            <div className="relative w-full max-w-md shadow-md rounded-2xl overflow-hidden border border-[#E9EDF5] bg-white p-1 flex items-center">
              <div className="pl-3 flex items-center pointer-events-none text-midGrey">
                <Search size={18} />
              </div>
              <input
                type="text"
                placeholder="Search games..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-3 pr-4 py-2 lg:py-3 w-full rounded-xl outline-none transition-all font-semibold text-brandNavy placeholder:text-midGrey/60 placeholder:font-normal bg-transparent text-sm lg:text-base"
              />
            </div>
          </div>

          {/* Right Column (Nova Mascot with Glowing Backdrops) */}
          <div className="lg:col-span-5 flex justify-center items-center relative py-2 lg:py-6">
            {/* Glowing Backdrop Circle */}
            <div className="absolute w-48 h-48 lg:w-96 lg:h-96 rounded-full bg-gradient-to-tr from-brandBlue/10 via-brandPink/10 to-brandOrange/10 blur-3xl -z-10 animate-pulse"></div>
            
            {/* Stars floating background */}
            <div className="absolute top-4 left-4 lg:top-10 lg:left-10 text-brandTeal animate-bounce opacity-60" style={{ animationDuration: '4s' }}>
              <Sparkles size={20} />
            </div>
            <div className="absolute bottom-6 right-6 lg:bottom-12 lg:right-12 text-brandPink animate-bounce opacity-50" style={{ animationDuration: '3s' }}>
              <Sparkles size={16} />
            </div>
            <div className="absolute top-16 right-4 lg:top-24 lg:right-8 text-brandPurple animate-pulse opacity-60">
              <Sparkles size={14} />
            </div>

            {/* Nova Mascot Image */}
            <div className="relative group max-w-[180px] sm:max-w-[240px] lg:max-w-[340px] transform hover:scale-105 transition-all duration-300">
              <img 
                src="/assets/robot.png" 
                alt="Nova the Mascot" 
                className="w-full h-auto drop-shadow-2xl hover:rotate-1 transition-transform duration-300"
              />
              
              {/* Hover speech bubble */}
              <div className="absolute -top-16 -left-12 bg-white border border-[#E9EDF5] text-brandNavy font-bold text-xs p-3 rounded-2xl shadow-lg max-w-[180px] scale-0 group-hover:scale-100 transition-all origin-bottom-right duration-300">
                Hi! I'm Nova, your Learning Arcade guide! Let's explore together! 🚀
              </div>
            </div>
          </div>
        </section>

        {/* Grid */}
        <main className="mb-16">
          {filteredApps.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 md:gap-10">
              {filteredApps.map((app) => (
                <AppCard key={app.id} app={app} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white/50 rounded-3xl border-2 border-dashed border-[#E9EDF5]">
              <div className="text-6xl mb-4">🤔</div>
              <h3 className="text-2xl font-bold text-brandNavy mb-2">No games found</h3>
              <p className="text-midGrey">Try changing the category or search term!</p>
              <button 
                onClick={() => {setSelectedCategory('All'); setSearchTerm('');}}
                className="mt-6 text-brandBlue font-bold hover:underline"
              >
                Clear Filters
              </button>
            </div>
          )}
        </main>

        {/* Bottom Features Strip */}
        <div className="mt-16 bg-white border border-[#E9EDF5] rounded-3xl p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 shadow-sm">
          {/* Feature 1 */}
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#F5F2FF] rounded-2xl text-brandPurple">
              <Gamepad2 size={24} />
            </div>
            <div>
              <h4 className="font-bold text-brandNavy text-base">Fun First</h4>
              <p className="text-xs text-midGrey mt-0.5">Games kids love that make learning fun</p>
            </div>
          </div>
          {/* Feature 2 */}
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#F0F5FF] rounded-2xl text-brandBlue">
              <GraduationCap size={24} />
            </div>
            <div>
              <h4 className="font-bold text-brandNavy text-base">Curriculum Aligned</h4>
              <p className="text-xs text-midGrey mt-0.5">Designed to support key skills and learning goals</p>
            </div>
          </div>
          {/* Feature 3 */}
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#FFF9EE] rounded-2xl text-brandOrange">
              <BarChart3 size={24} />
            </div>
            <div>
              <h4 className="font-bold text-brandNavy text-base">Track Progress</h4>
              <p className="text-xs text-midGrey mt-0.5">See achievements and celebrate every win</p>
            </div>
          </div>
          {/* Feature 4 */}
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#EAFBFC] rounded-2xl text-brandTeal">
              <Shield size={24} />
            </div>
            <div>
              <h4 className="font-bold text-brandNavy text-base">Safe & Kid-Friendly</h4>
              <p className="text-xs text-midGrey mt-0.5">A secure space for kids to explore and grow</p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default App;