import React from 'react';
import { AppLink } from '../types';
import { ExternalLink, Gamepad2 } from 'lucide-react';

interface AppCardProps {
  app: AppLink;
}

const AppCard: React.FC<AppCardProps> = ({ app }) => {
  // Map color strings from constants.ts to our new brand design specs
  const cardThemeMap: Record<string, { cardBg: string; textAccent: string }> = {
    red: {
      cardBg: 'bg-tintEnglish border-[#FFD6E8] hover:shadow-brandPink/5 hover:border-brandPink/30',
      textAccent: 'text-brandPink',
    },
    blue: {
      cardBg: 'bg-tintMaths border-[#D1E0FF] hover:shadow-brandBlue/5 hover:border-brandBlue/30',
      textAccent: 'text-brandBlue',
    },
    green: {
      cardBg: 'bg-tintScience border-[#C2F5F0] hover:shadow-brandTeal/5 hover:border-brandTeal/30',
      textAccent: 'text-brandTeal',
    },
    slate: {
      cardBg: 'bg-tintHistory border-[#E8D9FF] hover:shadow-brandPurple/5 hover:border-brandPurple/30',
      textAccent: 'text-brandPurple',
    },
    orange: {
      cardBg: 'bg-tintTools border-[#FFE4D6] hover:shadow-brandOrange/5 hover:border-brandOrange/30',
      textAccent: 'text-brandOrange',
    },
    purple: {
      cardBg: 'bg-tintMusic border-[#E8D9FF] hover:shadow-brandLavender/5 hover:border-brandLavender/30',
      textAccent: 'text-brandLavender',
    },
  };

  const currentTheme = cardThemeMap[app.color] || cardThemeMap.blue;

  return (
    <div
      className={`relative group rounded-[32px] border-2 p-7 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col h-full ${currentTheme.cardBg}`}
    >
      {/* Circular Badge for Game Icon / Logo */}
      <div className="absolute top-6 right-6 w-14 h-14 bg-white rounded-full flex items-center justify-center text-3xl shadow-md border border-slate-50 overflow-hidden transform group-hover:scale-105 transition-transform duration-300">
        {app.image ? (
          <img src={app.image} alt={app.title} className="w-full h-full object-contain p-2.5" />
        ) : (
          <span className="p-1 select-none">{app.icon}</span>
        )}
      </div>

      {/* Category Accent Label */}
      <div className="mt-2 mb-1.5">
        <span className={`text-[11px] font-black uppercase tracking-widest ${currentTheme.textAccent}`}>
          {app.category === 'Admin' ? 'Tools' : app.category}
        </span>
      </div>

      {/* Card Title */}
      <h3 className="text-2xl font-black text-brandNavy mb-3 leading-tight pr-12">
        {app.title}
      </h3>

      {/* Card Description */}
      <p className="text-[14px] font-semibold text-midGrey mb-6 flex-grow leading-relaxed">
        {app.description}
      </p>

      {/* Play Now CTA Button */}
      <a
        href={app.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto w-full py-3 px-6 rounded-2xl bg-brandBlue hover:bg-brandPurple text-white font-bold text-base shadow-md hover:shadow-brandBlue/15 flex items-center justify-center gap-2 transition-all active:scale-95"
      >
        <Gamepad2 size={20} />
        <span>Play Now</span>
        <ExternalLink size={15} className="opacity-70" />
      </a>
    </div>
  );
};

export default AppCard;