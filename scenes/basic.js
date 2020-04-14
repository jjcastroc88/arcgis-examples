require([
  'esri/Map',
  'esri/views/SceneView',
  'esri/widgets/BasemapToggle',
  'esri/widgets/BasemapGallery',
  'esri/layers/FeatureLayer',
], (Map, SceneView, BasemapGallery, BasemapToggle, FeatureLayer) => {
  var map = new Map({
      basemap: getBaseMap(),
      ground: 'world-elevation',
    }),
    view = new SceneView({
      container: 'scenes',
      map: map,
      camera: {
        position: {
          x: -74.1502596,
          y: 4.6263554,
          z: 5000,
        },
        tilt: 75,
      },
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
      definitionExpression: 'ELEV_GAIN < 250',
      renderer: {
        type: 'simple',
        symbol: {
          type: 'simple-line',
          color: 'blue',
          width: '2px',
        },
        outFields: ['TRL_NAME', 'ELEV_GAIN'],
        popupTemplate: {
          // Enable a popup
          title: '{TRL_NAME}', // Show attribute value
          content: 'The trail elevation gain is {ELEV_GAIN} ft.', // Display text in pop-up
        },
      },
    }),
    parksLayer = new FeatureLayer({
      url:
        'https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Parks_and_Open_Space/FeatureServer/0',
    });

  view.ui.add(basemapToggle, 'bottom-right');
  view.ui.add(mapGallery, 'bottom-left');
  map.add(trailsLayer, 0);
  map.add(parksLayer, 0);
});
