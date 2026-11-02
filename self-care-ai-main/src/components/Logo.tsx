import React from 'react';
import logoImg from '../assets/logo.png';

interface LogoProps {
  className?: string;
  height?: string;
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = "", 
  height = "h-11",
}) => {
  return (
    <div className={`flex items-center gap-2 group cursor-pointer select-none ${className}`}>
      <img
        src={logoImg}
        alt="SelfCareAI - AI-Powered Disease Detection"
        className={`${height} w-auto object-contain transition-transform duration-300 group-hover:scale-105`}
      />
    </div>
  );
};

export default Logo;
