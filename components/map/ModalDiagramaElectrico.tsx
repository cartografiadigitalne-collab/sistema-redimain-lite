"use client";
import React from 'react';
import { X, Zap, Cpu, Activity } from 'lucide-react';

interface ModalDiagramaElectricoProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalDiagramaElectrico: React.FC<ModalDiagramaElectricoProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-slate-950/95 border border-yellow-500/40 rounded-3xl shadow-[0_0_50px_rgba(234,179,8,0.25)] flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="p-5 border-b border-white/10 bg-slate-900/80 flex justify-between items-center shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl bg-yellow-500/15 border border-yellow-500/40 flex items-center justify-center text-yellow-400">
              <Zap size={18} className="animate-pulse" />
            </div>
            <div>
              <h3 className="text-sm font-black uppercase tracking-wider text-white">
                Diagrama Unifilar — Sistema Eléctrico Regional
              </h3>
              <p className="text-[10px] font-mono text-slate-400">
                Esquema de Red de Subestaciones y Líneas de Alta Tensión
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-rose-500/20 text-slate-400 hover:text-rose-300 transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto custom-scrollbar flex-1 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/10 flex items-center gap-3">
              <Activity className="text-yellow-400 shrink-0" size={20} />
              <div>
                <span className="text-[9px] text-slate-400 font-mono block">CAPACIDAD INSTALADA</span>
                <span className="text-sm font-bold text-white font-mono">230 kV / 115 kV</span>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/10 flex items-center gap-3">
              <Zap className="text-amber-400 shrink-0" size={20} />
              <div>
                <span className="text-[9px] text-slate-400 font-mono block">ESTADO OPERATIVO</span>
                <span className="text-sm font-bold text-emerald-400 font-mono">ESTABLE (98.4%)</span>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/10 flex items-center gap-3">
              <Cpu className="text-cyan-400 shrink-0" size={20} />
              <div>
                <span className="text-[9px] text-slate-400 font-mono block">SUBESTACIONES</span>
                <span className="text-sm font-bold text-cyan-300 font-mono">14 PRINCIPALES</span>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/40 border border-white/10 flex flex-col items-center justify-center min-h-[240px] text-center">
            <Zap size={48} className="text-yellow-400/40 mb-3 animate-pulse" />
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">
              Esquema Unifilar Interactivo
            </h4>
            <p className="text-xs text-slate-400 max-w-md font-mono">
              Visualización de carga, nodos de distribución y estado de transformadores en tiempo real.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-900/80 border-t border-white/10 flex justify-between items-center text-[10px] font-mono text-slate-400 shrink-0">
          <span>CENTRO DE CONTROL ELÉCTRICO REGIONAL</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-300 rounded-xl font-bold uppercase transition-colors"
          >
            Cerrar Esquema
          </button>
        </div>

      </div>
    </div>
  );
};
