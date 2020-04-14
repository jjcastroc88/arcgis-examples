require([
  'esri/Map',
  'esri/views/MapView',
  'esri/widgets/BasemapToggle',
  'esri/widgets/BasemapGallery',
  'esri/layers/FeatureLayer',
], (Map, MapView, BasemapGallery, BasemapToggle, FeatureLayer) => {
  const map = new Map({
      basemap: getBaseMap(),
    }),
    view = new MapView({
      container: 'maps',
      map: map,
      center: [-74.1502596, 4.6263554],
      zoom: 13,
    }),
    mapGallery = new BasemapGallery({
      view: view,
      source: {
        portal: {
          url: 'http://www.arcgis.com',
          useVectorBasemaps: true,
        },
      },
    }),
    basemapToggle = new BasemapToggle({
      view: view,
      nextBasemap: 'satellite',
    }),
    trailsLayer = new FeatureLayer({
      url:
        'https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads/FeatureServer/0',
    }),
    parksLayer = new FeatureLayer({
      url:
        'https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Parks_and_Open_Space/FeatureServer/0',
    });

  view.ui.add(basemapToggle, 'bottom-right');
  view.ui.add(mapGallery, 'top-left');
  map.add(trailsLayer, 0);
  map.add(parksLayer, 0);
});
