import 'https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.js';

let api = `https://api.covid19api.com/dayone/country/brazil`;

const country = document.querySelector('.country');
const btnBusca = document.querySelector('.btn-busca');
const inputTextCountry = document.querySelector('.countryText');


const map_token = "pk.eyJ1Ijoia2FlY2lvIiwiYSI6ImNrbmM5bWs0NDFteGwyc28wcWltd2praDQifQ.88Vcrfzy6vXYP4ZQTcsOLQ"
mapboxgl.accessToken = map_token;
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/dark-v10',
zoom:1.5
});



const getCountry = () =>{
  //var api = `https://api.covid19api.com/dayone/country/brazil`
  const valueCountry = document.getElementById("countryText").value;
  if (valueCountry === '' || valueCountry === "Country" || valueCountry === undefined) {
    api = `https://api.covid19api.com/dayone/country/brazil`
    console.log('entrou no if')
    console.log(api)
  }else if (valueCountry !== '' || valueCountry !== "Country" || valueCountry !== undefined) {
  
    api = `https://api.covid19api.com/dayone/country/${valueCountry}`;
    console.log('entrou no else')
    console.log(api)
  }
  country.innerHTML=  valueCountry;
}


console.log(getCountry())

fetch(`${api}`)
.then(response => response.json())
.then(data => {
  const { Country, Deaths, Confirmed, Recovered, Lat, Lon } = data[data.length -1]
  const country = document.querySelector('.country');
  const deaths = document.querySelector('.deaths');
  const confirmed = document.querySelector('.confirmed');
  const recovered = document.querySelector('.recovered');
  deaths.innerHTML = Deaths;
  confirmed.innerHTML = Confirmed;
  recovered.innerHTML = Recovered;
  country.innerHTML = Country;
  
  console.log('País: ',Country)
  console.log('Mortos: ', Deaths)
  console.log('Confirmado: ', Confirmed)
  console.log('Recuperado: ', Recovered)
  console.log('longitude: ', Lon);
  console.log('latitude: ', Lat);
  new mapboxgl.Marker({color: 'red'}).setLngLat([Lon, Lat]).addTo(map);
});


const clearText = () =>{
  inputTextCountry.innerHTML ='';
  console.log("teste")
}
btnBusca.addEventListener('click',getCountry);

//inputTextCountry.addEventListener('click', clearText);

/*const listCountry =['Brazil', 'Canada']
for (const pais in listCountry) {
  country.appendChild(listCountry[pais])
}

*/  
