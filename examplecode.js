// Function to get air quality data using Air Pollution API
async function getAirQuality(lat, lon) {
  const airQualityUrl = `http://api.openweathermap.org/data/2.5/air_pollution?
lat=${lat}&lon=${lon}&appid=${apiKey}`;
  const response = await fetch(airQualityUrl);
  const data = await response.json();
  return data.list[0].components;
}
// Initialize Leaflet map
const map = L.map('map').setView([51.505, -0.09], 5);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);
// Function to update map and chart
async function updateAirQuality(city) {
  // Get coordinates from Geocoding API
  const { lat, lon } = await getCoordinates(city);
  // Fetch air quality data
  const airQualityData = await getAirQuality(lat, lon);
  // Update map marker
  const marker = L.marker([lat, lon]).addTo(map)
      .bindPopup(`<b>${city}</b><br>PM2.5: ${airQualityData.pm2_5}, CO: $
{airQualityData.co}`)
      .openPopup();
  map.setView([lat, lon], 10);
  // Update chart
  const ctx = document.getElementById('aqChart').getContext('2d');
  const chart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['PM2.5', 'PM10', 'CO', 'NO2', 'O3', 'SO2'],
          datasets: [{
              label: 'Pollutant Levels',
              data: [airQualityData.pm2_5, airQualityData.pm10, airQualityData.co,
airQualityData.no2, airQualityData.o3, airQualityData.so2],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
}