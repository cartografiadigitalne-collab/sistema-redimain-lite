"use client";
import React, { useState } from 'react';
import { MenuLogo } from './MenuLogo';
import { MenuItem } from './MenuItem';
import { ChevronDown, Sun, Moon } from 'lucide-react';
import { ModalExito, ModalError, ModalCarga } from './ModalsBasicos';

export const MenuLateral = ({ layersVisible, onToggle, theme, setTheme, isMobileMenuOpen, setIsMobileMenuOpen }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showExito, setShowExito] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showCarga, setShowCarga] = useState(false);
  const [mensajeExito, setMensajeExito] = useState('');
  const [mensajeError, setMensajeError] = useState('');
  const [mensajeCarga, setMensajeCarga] = useState('');
  
  const [showCapas, setShowCapas] = useState(false);
  const [showInfraestructura, setShowInfraestructura] = useState(false);

  const [isLockedOpen, setIsLockedOpen] = useState(false);
  const isAnySubmenuOpen = showCapas || showInfraestructura;

  const handleMouseLeave = () => {
    if (isLockedOpen || isAnySubmenuOpen) return;
    setIsHovered(false);
    setShowCapas(false);
    setShowInfraestructura(false);
  };

  const forceCloseMenu = () => {
    setIsLockedOpen(false);
    setIsHovered(false);
    setShowCapas(false);
    setShowInfraestructura(false);
  };

  return (
    <>
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
      
      <aside 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className={`fixed md:relative h-dvh ${theme === 'light' ? 'bg-[#0ea5e9]/95 menu-light' : 'bg-slate-950'} border-r border-white/10 transition-all duration-700 ease-in-out flex flex-col z-50 overflow-hidden transform md:transform-none ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        } ${
          isHovered || isMobileMenuOpen ? 'w-[85vw] md:w-80 shadow-[40px_0_100px_rgba(0,0,0,0.9)]' : 'w-20'
        }`}
      >
        <div className={`shrink-0 transition-all duration-700 ${isHovered || isMobileMenuOpen ? 'mt-8 mb-4 relative' : 'mt-6 mb-12'}`}>
          <MenuLogo isHovered={isHovered || isMobileMenuOpen} />
          {(isHovered || isMobileMenuOpen) && (
            <button 
              onClick={(e) => {
                e.stopPropagation();
                if (isLockedOpen || isAnySubmenuOpen) {
                  forceCloseMenu();
                } else {
                  setIsLockedOpen(true);
                }
              }}
              className="absolute top-0 right-4 p-2 text-white/30 hover:text-white transition-colors"
              title={isLockedOpen || isAnySubmenuOpen ? "Forzar cierre del menú" : "Fijar menú abierto"}
            >
              {isLockedOpen || isAnySubmenuOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="3" x2="9" y2="21"/></svg>
              )}
            </button>
          )}
        </div>

        <div className="flex-1 flex flex-col justify-start overflow-y-auto px-2 mini-menu-scrollbar transition-all duration-300">
          <nav className="w-full space-y-6 pb-10">
            
            {/* ==================== CAPAS BASE ==================== */}
            <div className="space-y-3">
              <button 
                onClick={() => isHovered && setShowCapas(!showCapas)}
                className={`w-full flex items-center transition-all duration-500 group relative overflow-hidden ${
                  isHovered ? 'gap-4 p-4 rounded-3xl mx-1' : 'justify-center py-4'
                } ${showCapas ? 'bg-white/10 shadow-xl' : 'hover:bg-white/5'}`}
              >
                <div className={`relative shrink-0 rounded-full flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isHovered ? 'w-11 h-11' : 'w-14 h-14'} bg-white/90 group-hover:bg-white group-hover:scale-105 shadow-lg`}>
                  <img src="/Capas.png" className="w-7 h-7 object-contain transition-transform duration-500 group-hover:rotate-12" alt="Capas" />
                </div>
                {isHovered && (
                  <div className="flex-1 flex items-center justify-between animate-in fade-in slide-in-from-left-4 duration-500">
                    <span className={`text-[13px] font-black tracking-[0.15em] transition-colors ${theme === 'light' ? 'text-[#172554] group-hover:text-[#172554]' : 'text-slate-400 group-hover:text-white'}`}>CAPAS BASE</span>
                    <ChevronDown size={18} className={`transition-transform duration-300 text-slate-500 ${showCapas ? 'rotate-180' : ''}`} />
                  </div>
                )}
              </button>
              {isHovered && showCapas && (
                <div className="ml-8 space-y-3 border-l-2 border-white/5 pl-4 mt-2 animate-in slide-in-from-top-4 fade-in duration-500">
                  <MenuItem theme={theme} iconSrc="/Municipios.png" label="MUNICIPIOS" active={layersVisible.municipios} accentColor="#3b82f6" isHovered={isHovered} onClick={() => onToggle('municipios')} />
                  <MenuItem theme={theme} iconSrc="/parroquia.png" label="PARROQUIAS" active={layersVisible.parroquias} accentColor="#ec4899" isHovered={isHovered} onClick={() => onToggle('parroquias')} />
                  <MenuItem theme={theme} iconSrc="/Sectores.png" label="SECTORES" active={layersVisible.sectores} accentColor="#10b981" isHovered={isHovered} onClick={() => onToggle('sectores')} />
                </div>
              )}
            </div>

            <div className="px-6"><hr className="border-white/10" /></div>

            {/* ==================== SALUD E INFRAESTRUCTURA ==================== */}
            <div className="space-y-3">
              <button onClick={() => isHovered && setShowInfraestructura(!showInfraestructura)} className={`w-full flex items-center transition-all duration-500 group relative overflow-hidden ${isHovered ? 'gap-4 p-4 rounded-3xl mx-1' : 'justify-center py-4'} ${showInfraestructura ? 'bg-white/10 shadow-xl' : 'hover:bg-white/5'}`}>
                <div className={`relative shrink-0 rounded-full flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isHovered ? 'w-11 h-11' : 'w-14 h-14'} bg-white/90 group-hover:bg-white group-hover:scale-105 shadow-lg`}>
                  <img src="/infraestructura.png" className="w-7 h-7 object-contain transition-transform duration-500 group-hover:rotate-12" alt="Infraestructura" />
                </div>
                {isHovered && (
                  <div className="flex-1 flex items-center justify-between animate-in fade-in slide-in-from-left-4 duration-500">
                    <span className={`text-[13px] font-black tracking-[0.15em] transition-colors ${theme === 'light' ? 'text-[#172554] group-hover:text-[#172554]' : 'text-slate-400 group-hover:text-white'}`}>SALUD E INFRAESTRUCTURA</span>
                    <ChevronDown size={18} className={`transition-transform duration-300 text-slate-500 ${showInfraestructura ? 'rotate-180' : ''}`} />
                  </div>
                )}
              </button>
              {isHovered && showInfraestructura && (
                <div className="ml-8 space-y-3 border-l-2 border-white/5 pl-4 mt-2">
                  <MenuItem theme={theme} iconSrc="/hospital.png" label="HOSPITALES" active={layersVisible.hospitales} accentColor="#6366f1" isHovered={isHovered} onClick={() => onToggle('hospitales')} />
                  <MenuItem theme={theme} iconSrc="/clinica.png" label="CLÍNICAS" active={layersVisible.clinicas} accentColor="#0ea5e9" isHovered={isHovered} onClick={() => onToggle('clinicas')} />
                  <MenuItem theme={theme} iconSrc="/ambulatorio.png" label="AMBULATORIOS" active={layersVisible.ambulatorios} accentColor="#f43f5e" isHovered={isHovered} onClick={() => onToggle('ambulatorios')} />
                  <MenuItem theme={theme} iconSrc="/dispensario.png" label="CDI" active={layersVisible.cdi} accentColor="#d946ef" isHovered={isHovered} onClick={() => onToggle('cdi')} />
                  <MenuItem theme={theme} iconSrc="/social.png" label="ESCUELAS" active={layersVisible.escuelas} accentColor="#d946ef" isHovered={isHovered} onClick={() => onToggle('escuelas')} />
                </div>
              )}
            </div>

          </nav>
          
          <div className={`mt-4 mb-2 flex justify-center transition-all duration-500 ${isHovered ? 'px-4' : 'px-0'}`}>
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={`flex items-center justify-center gap-2 rounded-full p-2 bg-white/5 hover:bg-white/10 border border-white/10 transition-all ${isHovered ? 'w-full' : 'w-10 h-10'}`}
              title={theme === 'dark' ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            >
              {theme === 'dark' ? (
                <Sun size={18} className="text-yellow-400" />
              ) : (
                <Moon size={18} className="text-sky-300" />
              )}
              {(isHovered || isMobileMenuOpen) && <span className={`text-[10px] font-bold uppercase tracking-wider ${theme === 'light' ? 'text-[#172554]' : 'text-slate-300'}`}>{theme === 'dark' ? 'Modo Claro' : 'Modo Oscuro'}</span>}
            </button>
          </div>
        </div>

      </aside>

      <ModalExito isOpen={showExito} onClose={() => setShowExito(false)} mensaje={mensajeExito} />
      <ModalError isOpen={showError} onClose={() => setShowError(false)} mensaje={mensajeError} />
      <ModalCarga isOpen={showCarga} mensaje={mensajeCarga} />
    </>
  );
};
