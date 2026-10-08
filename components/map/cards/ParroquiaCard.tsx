"use client";
import React from 'react';
import { X, MapPin } from 'lucide-react';

export const ParroquiaCard = ({ feature, onClose }: any) => {
  const p = feature?.properties || {};
  const nombre = p.adm3_name || p.nombre || p.name || "Parroquia";
  const municipio = p.adm2_name || p.municipio || "";

  return (
    <div className="bg-slate-900/90 backdrop-blur-xl border border-pink-500/30 rounded-3xl p-5 text-white shadow-2xl animate-in fade-in duration-300">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2 bg-pink-500/20 px-3 py-1 rounded-full border border-pink-500/30">
          <img src="/parroquia.png" alt="Parroquia" className="w-4 h-4 object-contain" />
          <span className="text-[9px] font-black uppercase tracking-widest text-pink-400">Parroquia</span>
        </div>
        <button onClick={onClose} className="text-white/40 hover:text-white transition-colors">
          <X size={16} />
        </button>
      </div>

      <h3 className="text-xl font-black uppercase italic leading-tight mb-2">{nombre}</h3>
      {municipio && (
        <div className="flex items-center gap-1.5 text-slate-400 text-[10px]">
          <MapPin size={12} className="text-pink-400" />
          <span>Municipio: {municipio}</span>
        </div>
      )}
    </div>
  );
};
