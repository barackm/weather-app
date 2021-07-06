import getWeather from './helper';

// import getIcon from './helper';
getWeather('Paris');

// const content = document.querySelector('');
const form = document.getElementById('content');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = document.querySelector('.city-input');
    getWeather(query.value);
  });
}
