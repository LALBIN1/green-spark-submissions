// Initialize the map at Delhi as default location
const map = L.map('map').setView([28.6139, 77.2090], 13);

// Load map tiles from OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Waste bin data (you can add even more)
const bins = [
  // Organic
  { lat: 28.6145, lng: 77.2095, type: "Organic Bin", color: "green" },
  { lat: 28.6110, lng: 77.2040, type: "Organic Bin", color: "green" },
  { lat: 28.6152, lng: 77.2181, type: "Organic Bin", color: "green" },

  // Plastic
  { lat: 28.6165, lng: 77.2140, type: "Plastic Bin", color: "orange" },
  { lat: 28.6180, lng: 77.2200, type: "Plastic Bin", color: "orange" },
  { lat: 28.6122, lng: 77.2155, type: "Plastic Bin", color: "orange" },

  // E-Waste
  { lat: 28.6100, lng: 77.2070, type: "E-Waste Bin", color: "purple" },
  { lat: 28.6190, lng: 77.2088, type: "E-Waste Bin", color: "purple" },

  // Hazardous
  { lat: 28.6177, lng: 77.2022, type: "Hazardous Bin", color: "red" },
  { lat: 28.6085, lng: 77.2103, type: "Hazardous Bin", color: "red" },

  // General
  { lat: 28.6130, lng: 77.2115, type: "General Bin", color: "blue" },
  { lat: 28.6201, lng: 77.2133, type: "General Bin", color: "blue" }
];

// Function to choose color-coded marker icons
function getIcon(color) {
  return new L.Icon({
    iconUrl: `https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|${color}`,
    iconSize: [21, 34],
    iconAnchor: [10, 34],
    popupAnchor: [1, -34]
  });
}

// Add all bins to the map with colored markers
bins.forEach((bin) => {
  L.marker([bin.lat, bin.lng], { icon: getIcon(bin.color) })
    .addTo(map)
    .bindPopup(`<strong>${bin.type}</strong>`);
});
