import mapboxgl from 'mapbox-gl';

export const cleanPaint = (map: mapboxgl.Map, layerId: string) => {
  if (!map.getLayer(layerId)) return;
  // Cleanup feature state if needed
};

export const toggleState = (map: mapboxgl.Map, feature: any, state: boolean) => {
  if (!map || !feature || !feature.source || feature.id === undefined) return;
  try {
    map.setFeatureState(
      { source: feature.source, sourceLayer: feature.sourceLayer, id: feature.id },
      { selected: state }
    );
  } catch (e) {
    // Ignore if feature state is unsupported
  }
};

export const clearAndReset = (map: mapboxgl.Map | null, features: any[], setFeatures: (f: any[]) => void) => {
  if (map && features.length) {
    features.forEach(f => toggleState(map, f, false));
  }
  setFeatures([]);
};

export const exportPDF = (isExporting: boolean, setIsExporting: (b: boolean) => void) => {
  console.log("PDF export helper called");
};
