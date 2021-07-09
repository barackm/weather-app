import helper from './helper';
import '../dist/main.css';

const lastCity = localStorage.getItem('weather-city');
helper.getWeather(lastCity || 'Kigali');

const form = document.getElementById('content');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = document.querySelector('.city-input');
    localStorage.setItem('weather-city', query.value);
    helper.getWeather(localStorage.getItem('weather-city'));
  });
}
