import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 mt-12 text-center text-slate-500">
      <div className="flex items-center justify-center gap-2 mb-2">
        <span className="text-sm font-semibold">Built for fun learning</span>
        <Heart className="text-red-400 fill-current" size={16} />
      </div>
      <p className="text-xs opacity-70">
        © {new Date().getFullYear()} Learning Arcade. Keep practicing!
      </p>
    </footer>
  );
};

export default Footer;