"use client";
import React from 'react';
import { X, MapPin } from 'lucide-react';

export const SectorCard = ({ f, onRemove }: any) => {
  const p = f?.properties || {};
  const nombre = p.name || p.name_en || p.nombre || "Sector";
  const municipio = p.municipality || p.municipio || "";

  return (
    <div className="bg-slate-900/90 backdrop-blur-xl border border-emerald-500/30 rounded-3xl p-5 text-white shadow-2xl animate-in fade-in duration-300">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2 bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-500/30">
          <img src="/Sectores.png" alt="Sector" className="w-4 h-4 object-contain" />
          <span className="text-[9px] font-black uppercase tracking-widest text-emerald-400">Sector</span>
        </div>
        <button onClick={() => onRemove(f)} className="text-white/40 hover:text-white transition-colors">
          <X size={16} />
        </button>
      </div>

      <h3 className="text-xl font-black uppercase italic leading-tight mb-2">{nombre}</h3>
      {municipio && (
        <div className="flex items-center gap-1.5 text-slate-400 text-[10px]">
          <MapPin size={12} className="text-emerald-400" />
          <span>Municipio: {municipio}</span>
        </div>
      )}
    </div>
  );
};
