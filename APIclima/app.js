const apikey ='';
const UrlBase ='https://api.openweathermap.org/data/2.5/weather';

const fetchapi = url => fetch(url).then(repose => repose.json());

async function getClima(lat, lon, apikey){
    const url =`${UrlBase}$lat=${lat}&lon=${lon}&appid=${apikey}`;
    const clima = await fetchapi(url);
    console.log(clima);
    const temperature = (clima.main.temp - 273.15).toFixed(2);
    document.querySelector('h2').innerHTML = temperature + '°C-' + clima.name;
    pintaFondo(temperature);
    pintaFondo(temperature);


}
async function getClimaCity(city, apikey){
    const url = `${UrlBase}?q=${ city}&appid=${apikey}`;
    const  clima = await fetchapi(url);
    console.log(clima);
    const temperatuere = clima.main.tem;
    document.querySelector('.wheater h2').innerHTML = Math.round(temp);
    

}
{
    function pintaFondo(temp){
        const fondo = document.querySelector('body');
        if(temp <13){
            fondo.style.background = '#aaa55';
        }else if (tem <22){
            fondo.style.background = '#dd5555';
        }else{
            fondo.style.background = '#44ddcc';
        }
    }
}
function pintaEmoji(temp){
    const emo = document.querySelector('#emoji');
    if(temp < 13){
        emo.innerHTML = '❄️🥶❄️🥶❄️🥶';
    }else if (emo < 22){
        emo.innerHTML = '☀️🍻☀️🍻';
    }else{
        emo.innerHTML = '🔥🔥🥵🔥🔥';
    }
}

//Obtener geolocalizacion
navigator.geolocation.getCurrentPosition((position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    getClima(lat, lon, apikey);
  });


;