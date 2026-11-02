import React, { useState } from 'react';
import { Cog } from 'lucide-react';

interface CompanyLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
  showText?: boolean;
  priority?: boolean;
}

export const CompanyLogo: React.FC<CompanyLogoProps> = ({
  size = 'md',
  className = '',
  showText = false,
}) => {
  const [imageError, setImageError] = useState(false);

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
    '2xl': 'w-24 h-24',
  };

  const imageSrc = '/assets/aistudio/op_engineering_logo_circle.png';

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <div 
        className={`relative ${sizeClasses[size]} rounded-full overflow-hidden bg-slate-950 border border-amber-500/40 shadow-sm shrink-0 flex items-center justify-center p-0.5 group`}
      >
        {!imageError ? (
          <img
            src={imageSrc}
            alt="O P Engineering Company Logo"
            onError={() => setImageError(true)}
            className="w-full h-full object-contain rounded-full transition-transform duration-300 group-hover:scale-105"
            loading="eager"
          />
        ) : (
          <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-amber-500 font-mono font-bold text-xs">
            <Cog className="w-4 h-4 animate-spin-slow text-amber-500" />
          </div>
        )}
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className="text-base sm:text-lg font-black tracking-tight text-slate-900 font-heading uppercase leading-none">
            O P ENGINEERING
          </span>
          <span className="text-[10px] font-mono text-red-600 tracking-wider font-bold uppercase mt-0.5">
            Fire Fighting Solutions · Estd. 1990
          </span>
        </div>
      )}
    </div>
  );
};
