import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 mt-16 text-center text-midGrey border-t border-[#E9EDF5]">
      <div className="flex items-center justify-center gap-2 mb-2">
        <span className="text-sm font-bold">Built for fun learning</span>
        <Heart className="text-brandPink fill-current animate-pulse" size={16} />
      </div>
      <p className="text-xs font-semibold opacity-70">
        © {new Date().getFullYear()} Learning Arcade. Keep practicing and leveling up!
      </p>
    </footer>
  );
};

export default Footer;