export const MAP_LAYERS = {
  // --- CAPAS BASE ---
  municipios: {
    paint: {
      'line-color': ['case', ['boolean', ['feature-state', 'selected'], false], '#22d3ee', '#2563eb'],
      'line-width': ['case', ['boolean', ['feature-state', 'selected'], false], 5, 1.5],
      'line-opacity': 0.8,
      'line-transition': { duration: 300 }
    }
  },
  sectores: {
    paint: {
      'circle-radius': ['case', ['boolean', ['feature-state', 'selected'], false], 12, 6],
      'circle-color': ['case', ['boolean', ['feature-state', 'selected'], false], '#00f2ff', '#10b981'],
      'circle-stroke-width': ['case', ['boolean', ['feature-state', 'selected'], false], 4, 2],
      'circle-stroke-color': '#ffffff',
      'circle-opacity': 0.9,
      'circle-transition': { duration: 300 }
    }
  },
  salud: {
    glow: {
      paint: {
        'circle-radius': ['case', ['boolean', ['feature-state', 'selected'], false], 25, 18],
        'circle-color': '#06b6d4',
        'circle-blur': 1.5,
        'circle-opacity': ['case', ['boolean', ['feature-state', 'selected'], false], 0.7, 0.4]
      }
    },
    icons: {
      layout: {
        'icon-image': 'hospital-15',
        'icon-size': 1.2,
        'icon-allow-overlap': true,
        'text-field': ['get', 'nombre'],
        'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
        'text-size': 10,
        'text-offset': [0, 1.5],
        'text-anchor': 'top'
      }
    }
  }
};
