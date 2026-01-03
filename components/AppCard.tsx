import React from 'react';
import { AppLink } from '../types';
import { ExternalLink, Gamepad2 } from 'lucide-react';

interface AppCardProps {
  app: AppLink;
}

const AppCard: React.FC<AppCardProps> = ({ app }) => {
  // Map color strings to Tailwind classes safely
  const colorMap: Record<string, string> = {
    red: 'bg-red-100 text-red-600 border-red-200 hover:border-red-400 hover:shadow-red-200',
    blue: 'bg-blue-100 text-blue-600 border-blue-200 hover:border-blue-400 hover:shadow-blue-200',
    amber: 'bg-amber-100 text-amber-600 border-amber-200 hover:border-amber-400 hover:shadow-amber-200',
    purple: 'bg-purple-100 text-purple-600 border-purple-200 hover:border-purple-400 hover:shadow-purple-200',
    green: 'bg-green-100 text-green-600 border-green-200 hover:border-green-400 hover:shadow-green-200',
    cyan: 'bg-cyan-100 text-cyan-600 border-cyan-200 hover:border-cyan-400 hover:shadow-cyan-200',
    slate: 'bg-slate-100 text-slate-600 border-slate-200 hover:border-slate-400 hover:shadow-slate-200',
    orange: 'bg-orange-100 text-orange-600 border-orange-200 hover:border-orange-400 hover:shadow-orange-200',
  };

  const btnColorMap: Record<string, string> = {
    red: 'bg-red-500 hover:bg-red-600',
    blue: 'bg-blue-500 hover:bg-blue-600',
    amber: 'bg-amber-500 hover:bg-amber-600',
    purple: 'bg-purple-500 hover:bg-purple-600',
    green: 'bg-green-500 hover:bg-green-600',
    cyan: 'bg-cyan-500 hover:bg-cyan-600',
    slate: 'bg-slate-500 hover:bg-slate-600',
    orange: 'bg-orange-500 hover:bg-orange-600',
  };

  const themeClasses = colorMap[app.color] || colorMap.blue;
  const btnClasses = btnColorMap[app.color] || btnColorMap.blue;

  return (
    <div
      className={`relative group rounded-3xl border-4 p-6 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl flex flex-col h-full ${themeClasses}`}
    >
      <div className="absolute -top-6 -right-6 w-20 h-20 bg-white rounded-full flex items-center justify-center text-4xl shadow-md transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
        {app.icon}
      </div>

      <div className="mt-4 mb-2">
        <span className="text-xs font-bold uppercase tracking-wider opacity-70 bg-white/50 px-2 py-1 rounded-lg">
          {app.category}
        </span>
      </div>

      <h3 className="text-2xl font-black mb-3 leading-tight">{app.title}</h3>

      <p className="text-sm font-medium opacity-80 mb-6 flex-grow leading-relaxed">
        {app.description}
      </p>

      <a
        href={app.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-auto w-full py-3 px-6 rounded-xl text-white font-bold text-lg shadow-lg flex items-center justify-center gap-2 transition-transform active:scale-95 ${btnClasses}`}
      >
        <Gamepad2 size={24} />
        <span>Play Now</span>
        <ExternalLink size={18} className="opacity-70" />
      </a>
    </div>
  );
};

export default AppCard;