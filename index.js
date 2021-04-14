// importando o map do 'https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css
import 'https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.js';

// variáveis da DOM
const btnCountry = document.querySelector('.btn-busca');

// criando o mapa na tela
const map_token = 'pk.eyJ1Ijoia2FlY2lvIiwiYSI6ImNrbmM5bWs0NDFteGwyc28wcWltd2praDQifQ.88Vcrfzy6vXYP4ZQTcsOLQ';
mapboxgl.accessToken = map_token;
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/dark-v10',
  zoom: 1.5,
});

// função chama a api externa do Covid e jogando o valor do país no parâmetro
const getCountry = async (country) => {
  const url = `https://api.covid19api.com/dayone/country/${country}`;
  const response = await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const { Country, Deaths, Confirmed, Recovered, Lat, Lon } = data[data.length - 1];
      const country = document.querySelector('.country');
      const deaths = document.querySelector('.deaths');
      const confirmed = document.querySelector('.confirmed');
      const recovered = document.querySelector('.recovered');
      deaths.innerHTML = Deaths;
      confirmed.innerHTML = Confirmed;
      recovered.innerHTML = Recovered;
      country.innerHTML = Country;

      let mapa = new mapboxgl.Marker({ color: 'red' }).setLngLat([Lon, Lat]).addTo(map);
      console.log(mapa);
    });
};

// evento pega valor e joga na api
btnCountry.addEventListener('click', () => {
  const inputCountry = document.querySelector('#countryText').value;
  if (inputCountry != inputCountry) {
    window.location.reload();
    mapa;
  }
});

getCountry('brazil');
