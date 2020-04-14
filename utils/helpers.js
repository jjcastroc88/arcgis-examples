const baseMaps = [
  'light-gray-vector',
  'dark-gray-vector',
  'satellite',
  'streets-relief-vector',
  'streets-navigation-vector',
];

const getBaseMap = type =>
  type ? baseMaps[type] : baseMaps[Math.floor(Math.random() * baseMaps.length)];
