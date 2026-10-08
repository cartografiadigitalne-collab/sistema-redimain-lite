"use client";
import React, { useState } from 'react';
import { Maximize, Minimize, Crosshair, MapPin, Eye, Filter } from 'lucide-react';

interface TacticalToolbarProps {
  map: any;
  theme?: string;
  selectedFeatures?: any[];
}

export const TacticalToolbar: React.FC<TacticalToolbarProps> = ({ map, selectedFeatures = [] }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  };

  const centerMap = () => {
    if (map) {
      map.flyTo({
        center: [-63.85, 10.98], // Nueva Esparta default center
        zoom: 10,
        pitch: 30,
        bearing: 0,
        duration: 1500
      });
    }
  };

  return (
    <div className="absolute top-4 left-6 z-30 flex items-center gap-2 bg-slate-950/85 backdrop-blur-2xl p-1.5 rounded-2xl border border-cyan-500/30 shadow-[0_0_25px_rgba(6,182,212,0.2)] select-none">
      {/* Botón Recentrar Mapa */}
      <button
        onClick={centerMap}
        title="Centrar vista táctica regional"
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-slate-200 hover:text-cyan-300 hover:bg-cyan-500/20 active:scale-95 transition-all text-xs font-bold font-mono cursor-pointer border border-transparent hover:border-cyan-500/30"
      >
        <Crosshair size={15} className="text-cyan-400" />
        <span className="hidden sm:inline">Recentrar</span>
      </button>

      <div className="w-[1px] h-5 bg-white/10" />

      {/* Indicador Selección */}
      <div className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono">
        <MapPin size={13} className="text-amber-400" />
        <span className="text-slate-400 text-[10px] font-bold">SELECCIONADOS:</span>
        <span className="text-cyan-300 font-bold">{selectedFeatures.length}</span>
      </div>

      <div className="w-[1px] h-5 bg-white/10" />

      {/* Botón Pantalla Completa */}
      <button
        onClick={toggleFullscreen}
        title={isFullscreen ? "Salir de pantalla completa" : "Modo Pantalla Completa"}
        className="p-1.5 rounded-xl text-slate-300 hover:text-cyan-300 hover:bg-cyan-500/20 active:scale-95 transition-all cursor-pointer"
      >
        {isFullscreen ? <Minimize size={16} /> : <Maximize size={16} />}
      </button>
    </div>
  );
};
