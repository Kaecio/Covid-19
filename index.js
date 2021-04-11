
import 'https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.js';
const api = 'https://api.covid19api.com/dayone/country/france';


const map_token = "pk.eyJ1Ijoia2FlY2lvIiwiYSI6ImNrbmM5bWs0NDFteGwyc28wcWltd2praDQifQ.88Vcrfzy6vXYP4ZQTcsOLQ"
mapboxgl.accessToken = map_token;
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/dark-v10',
zoom:1.5
});


const dataCovid = fetch(`${api}`)
.then(response => response.json())
.then(data => {
  const { Country, Deaths, Confirmed, Recovered, Lat, Lon } = data[data.length -1]
  console.log('País: ',Country)
  console.log('Mortos: ', Deaths)
  console.log('Confirmado: ', Confirmed)
  console.log('Recuperado: ', Recovered)
  console.log('latitude: ', Lat);
  console.log('longitude: ', Lon);
  new mapboxgl.Marker({color: 'red'}).setLngLat([Lon, Lat]).addTo(map);
});

console.log('ola',dataCovid)