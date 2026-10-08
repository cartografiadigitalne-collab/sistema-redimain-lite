"use client";
import React, { useState, useRef } from 'react';
import { MenuLateral } from '../components/Menu/MenuLateral';
import { MapaCentral } from '../components/map/MapaCentral';

export default function HomePage() {
  const zonaReporteRef = useRef<HTMLDivElement>(null);
  const [theme, setTheme] = useState('dark');

  const [layersVisible, setLayersVisible] = useState({
    // Capas Base
    municipios: false,
    parroquias: false,
    sectores: false,

    // Salud e Infraestructura
    hospitales: true,
    clinicas: false,
    ambulatorios: false,
    cdi: false,
    escuelas: true,
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggle = (layer: string) => {
    setLayersVisible(prev => ({
      ...prev,
      [layer]: !prev[layer as keyof typeof prev]
    }));
  };

  return (
    <div className="flex h-[100dvh] w-screen bg-slate-950 overflow-hidden relative">
      <button 
        onClick={() => setIsMobileMenuOpen(true)}
        className="md:hidden absolute top-4 left-4 z-40 p-3 bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-xl text-white shadow-xl"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
      </button>

      <MenuLateral 
        layersVisible={layersVisible} 
        onToggle={handleToggle} 
        theme={theme}
        setTheme={setTheme}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <main ref={zonaReporteRef} className={`flex-1 relative ${theme === 'light' ? 'bg-slate-100' : 'bg-slate-950'}`}>
        <MapaCentral key={theme} theme={theme} layersVisible={layersVisible} />
      </main>
    </div>
  );
}
