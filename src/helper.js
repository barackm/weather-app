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
  {
    description: 'Mist',
    icon: '<i class="bi bi-cloud-sun-fill"></i>',
    img: 'https://images.pexels.com/photos/417045/pexels-photo-417045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    description: 'Smoke',
    icon: '<i class="bi bi-cloud-sun-fill"></i>',
    img: 'https://images.pexels.com/photos/417045/pexels-photo-417045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    description: 'Haze',
    icon: '<i class="bi bi-cloud-sun-fill"></i>',
    img: 'https://images.pexels.com/photos/417045/pexels-photo-417045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    description: 'Dust',
    icon: '<i class="bi bi-cloud-sun-fill"></i>',
    img: 'https://images.pexels.com/photos/417045/pexels-photo-417045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    description: 'Fog',
    icon: '<i class="bi bi-cloud-sun-fill"></i>',
    img: 'https://images.pexels.com/photos/417045/pexels-photo-417045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    description: 'Sand',
    icon: '<i class="bi bi-cloud-sun-fill"></i>',
    img: 'https://images.pexels.com/photos/417045/pexels-photo-417045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    description: 'Dust',
    icon: '<i class="bi bi-cloud-sun-fill"></i>',
    img: 'https://images.pexels.com/photos/417045/pexels-photo-417045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    description: 'Ash',
    icon: '<i class="bi bi-cloud-sun-fill"></i>',
    img: 'https://images.pexels.com/photos/417045/pexels-photo-417045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    description: 'Squall',
    icon: '<i class="bi bi-cloud-sun-fill"></i>',
    img: 'https://images.pexels.com/photos/417045/pexels-photo-417045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    description: 'Tornado',
    icon: '<i class="bi bi-cloud-sun-fill"></i>',
    img: 'https://images.pexels.com/photos/417045/pexels-photo-417045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
];

const helper = (() => {
  const getIcon = (desc) => {
    const myIcon = icons.filter(
      (item) => item.description === desc.toLowerCase(),
    );
    return myIcon.length === 0 ? icons[0] : myIcon[0];
  };

  const getData = async (location = 'Kigali') => {
    const apiKey = 'e89012cc28912f22e32bfd3770ad7140';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=${apiKey}`;
    const defaultUrl = `https://api.openweathermap.org/data/2.5/weather?q=Kigali&units=metric&APPID=${apiKey}`;
    let data;

    const defaultData = await fetch(defaultUrl, { mode: 'cors' });

    await fetch(url, { mode: 'cors' })
      .then((res) => {
        data = res.json();
      })
      .catch(async (ex) => {
        render.showError(ex);
        data = await defaultData.json();
      });

    return data;
  };
  const getCurrentDate = () => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const d = new Date();
    return `${days[d.getDay() - 1]}, ${d.getDate()} ${months[d.getMonth()]}`;
  };

  const getWeather = async (location) => {
    const data = await getData(location);
    if (data.cod === '404') {
      return render.showError(data);
    }

    const icon = getIcon(data.weather[0].main);
    return render.renderWeatherInfo({ data, icon, getCurrentDate });
  };

  return {
    getCurrentDate,
    getWeather,
    getData,
    getIcon,
  };
})();

export default helper;
