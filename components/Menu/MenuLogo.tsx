"use client";
import Image from 'next/image';

export const MenuLogo = ({ isHovered }: { isHovered: boolean }) => (
  <div className={`pt-4 flex flex-col items-center transition-all duration-500`}>
    <div className={`relative transition-all ease-out animate-in fade-in zoom-in-50 duration-1000 ${
      isHovered ? 'w-24 h-24 mb-4' : 'w-14 h-14'
    }`}>
      <div className="absolute inset-0 bg-blue-600/30 blur-[35px] rounded-full animate-[pulse_3s_ease-in-out_infinite] opacity-70" />
      {isHovered && (
        <div className="absolute -inset-2 border-2 border-dashed border-blue-400/20 rounded-full animate-[spin_20s_linear_infinite] opacity-50" />
      )}
      <div className="relative w-full h-full group">
        <Image 
          src="/logo.png" 
          alt="SOGNE Logo" 
          fill 
          priority 
          sizes="(max-width: 768px) 56px, 96px" 
          className="object-contain relative z-10 filter drop-shadow-[0_0_15px_rgba(255,255,255,0.7)] transition-transform duration-700 ease-out group-hover:rotate-360 group-hover:scale-110" 
        />
      </div>
    </div>

    {isHovered && (
      <div className="flex flex-col items-center text-center animate-in fade-in zoom-in-90 slide-in-from-top-4 duration-700 logo-preserve">
        <h1 className="text-5xl font-black tracking-tighter text-white leading-none relative">
          <span className="relative z-10 drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)] animate-[textPulse_4s_ease-in-out_infinite]">
            SIC
          </span>
          <span className="absolute inset-0 text-white blur-md opacity-50 select-none">SIC</span>
          <span className="absolute inset-0 text-blue-500 blur-[30px] opacity-40 select-none animate-pulse">SIC</span>
        </h1>
        <div className="relative h-0.5 w-28 my-3 overflow-hidden rounded-full">
          <div className="absolute inset-0 bg-slate-800" />
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-blue-400 to-transparent animate-[shimmer_2s_infinite] shadow-[0_0_15px_#3b82f6]" />
        </div>
        <span className="text-[10px] text-blue-300 font-black tracking-[0.25em] uppercase italic drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]">
          Sistema de Información Cartográfica
        </span>
      </div>
    )}
  </div>
);
