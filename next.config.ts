import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Silencia la advertencia de múltiples lockfiles
  outputFileTracingRoot: process.cwd(),
  // Permite peticiones desde otras computadoras de la red
  experimental: {
    serverActions: {
      allowedOrigins: ['26.159.197.231', 'localhost:3000'],
    },
  },
  // Excluir mapbox-gl del bundling del servidor para evitar errores con Turbopack
  // serverExternalPackages: ['mapbox-gl'],
};

export default nextConfig;