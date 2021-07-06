import render from './dom';

const icons = [
  {
    description: 'thunderstorm',
    icon: '<i class="bi bi-cloud-lightning-rain-fill"></i>',
    img: 'https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    description: 'drizzle',
    icon: '<i class="bi bi-cloud-drizzle-fill"></i>',
    img: 'https://images.pexels.com/photos/2775196/pexels-photo-2775196.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    description: 'rain',
    icon: '<i class="bi bi-cloud-rain-heavy-fill"></i>',
    img: 'https://images.pexels.com/photos/2600937/pexels-photo-2600937.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    description: 'atmosphere',
    icon: '<i class="bi bi-cloud-sun-fill"></i>',
    img: 'https://images.pexels.com/photos/417045/pexels-photo-417045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    description: 'clear',
    icon: '<i class="bi bi-clouds-fill"></i>',
    img: 'https://images.pexels.com/photos/5046350/pexels-photo-5046350.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    description: 'clouds',
    icon: '<i class="bi bi-cloud-fill"></i>',
    img: 'https://images.pexels.com/photos/2086748/pexels-photo-2086748.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
];

export function getIcon(desc) {
  const myIcon = icons.filter(
    (item) => item.description === desc.toLowerCase()
  );
  return myIcon[0];
}

async function getData(location = 'Kigali') {
  const apiKey = 'e89012cc28912f22e32bfd3770ad7140';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=${apiKey}`;
  const defaultUrl = `https://api.openweathermap.org/data/2.5/weather?q=Kigali&units=metric&APPID=${apiKey}`;
  const response = await fetch(url, { mode: 'cors' });
  const defaultData = await fetch(defaultUrl, { mode: 'cors' });
  let data;
  try {
    data = await response.json();
  } catch (error) {
    render.showError();
    data = await defaultData.json();
  }
  return data;
}

export default async function getWeather(location) {
  const data = await getData(location);
  const icon = getIcon(data.weather[0].main);
  render.renderWeatherInfo({ data, icon });
}
