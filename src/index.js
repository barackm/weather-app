import getWeather from './helper';

const lastCity = localStorage.getItem('weather-city');
getWeather(lastCity || 'Kigali');

const form = document.getElementById('content');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = document.querySelector('.city-input');
    localStorage.setItem('weather-city', query.value);
    getWeather(localStorage.getItem('weather-city'));
  });
}
