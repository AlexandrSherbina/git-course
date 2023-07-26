import getMyselfIp from './apis/ip_api.js';
import weather from './components/weather/weather.js'
import search from './components/search/search.js'
import throttle  from './libraries/throttle.js';


const toggleWeather = document.querySelector('#toggle-cloud');
const WeatherEl = document.querySelector('.weather');


const ipData = await getMyselfIp();

weather(ipData);
function toggleFn() {
    WeatherEl.classList.toggle('toggle');
    console.log('toggle');
}
toggleWeather.addEventListener('click', toggleFn);


search();

console.log('Test 3 !!!!!!!!!!!!!!!!!')

// function mouseMove() {
//     console.log(new Date());
// }

// mouseMove = throttle(mouseMove, 3000)

// setInterval(mouseMove, 1000);

console.log('Commit for Master branch !!');