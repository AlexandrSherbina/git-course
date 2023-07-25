import weatherApi from '../../apis/weather_api.js';

export default async function weatherDescription(data) {
    const {
        loc      
    } = data;
    const coordinates = loc.split(',');
    const latitude = coordinates[0];
    const longitude = coordinates[1];
    
    console.log(data);
    
    const latitudeArg = latitude || '49.0629';
    const longitudeArg = longitude || '33.2458';
    const weatherData = await weatherApi(latitudeArg, longitudeArg);
    const {
        current_weather,
        hourly_units
    } = weatherData;

    const weatherElement = document.querySelector('.weather');
    const temperatureElem = weatherElement.querySelector('#temperature');
    const windElem = weatherElement.querySelector('#wind');
    const timerElem = weatherElement.querySelector('#timer');



    temperatureElem.innerHTML = current_weather.temperature + ' ' + hourly_units.temperature_2m + temperatureElem.innerHTML;
    windElem.textContent = 'Wind: ' + current_weather.windspeed;
    timerElem.textContent = current_weather.time;
}