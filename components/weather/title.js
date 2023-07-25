export default function titleWeather(data) {
    const {       
        city
    } = data;
 
    const titleWeatherElement = document.querySelector('.title-weather');
    titleWeatherElement.innerHTML += `<span>${city}</span>`;
}