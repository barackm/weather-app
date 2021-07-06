const render = (function () {
  function renderWeatherInfo(weatherData) {
    const { data, icon } = weatherData;
    const mainContainer = document.getElementById('content');
    const header = document.createElement('div');
    const appContainer = document.querySelector('.app-wrapper');
    appContainer.innerHTML = '';
    const cityInfo = document.createElement('div');
    const inputWrapper = document.createElement('div');
    const form = document.createElement('form');
    const inputText = document.createElement('input');
    const submitBtn = document.createElement('button');
    const weatherInfoWrapper = document.createElement('div');
    const tempWrapper = document.createElement('div');
    const iconWrapper = document.createElement('div');
    const tempDetails = document.createElement('div');
    const weatherStats = document.createElement('div');

    console.log(data);
    mainContainer.style.backgroundImage = `url(${icon.img})`;
    header.classList += 'header-wrapper flex-between w-10';
    weatherInfoWrapper.classList += 'main-weather-info-wrapper flex-center w-10';
    cityInfo.classList += 'city-infos flex-column';
    tempDetails.classList += 'temps-details';
    iconWrapper.classList += 'icon-weather-wrapper';
    weatherStats.classList += 'weather-stats-details';
    tempWrapper.classList += 'temp-area flex-center';
    cityInfo.innerHTML = `<h1>${data.name}</h1>
    <h4 class="m-0">Monday 29 August</h4>`;
    submitBtn.innerHTML = '<i class="bi bi-arrow-right-circle arrow-icon"></i>';
    inputWrapper.classList += 'input-wrapper';
    weatherStats.innerHTML = `<div class="stat-item">
    <h2>
      ${data.main.temp_max}
      <div class="degree-circle"></div>
    </h2>
    <span>High</span>
  </div>
  <div class="stat-item">
    <h2>${data.wind.speed}mph</h2>
    <span>Wind</span>
  </div>
  <div class="stat-item">
    <h2>${data.weather[0].description}</h2>
    <span>Wind</span>
  </div>
  <div class="stat-item">
    <h2>
    ${data.main.temp_min}
      <div class="degree-circle"></div>
    </h2>
    <span>Low</span>
  </div>
  <div class="stat-item">
    <h2>0%</h2>
    <span>Rain</span>
  </div>
  <div class="stat-item">
    <h2>20:57</h2>
    <span>Sunset</span>
  </div>`;

    inputText.setAttribute('type', 'text');
    inputText.setAttribute('placeholder', 'Search City...');
    inputText.classList += 'city-input';
    submitBtn.setAttribute('type', 'submit');
    form.setAttribute('id', 'my-form');
    iconWrapper.innerHTML = `${icon.icon}`;
    tempDetails.innerHTML = `<div class="temp">
    <h1>
      ${data.main.temp}
      <div class="degree-circle"></div>
    </h1>
  </div>
  <div class="description">${data.weather[0].description}</div>
  <div class="unity-toggler-btns flex-center">
    <a href="#">C</a>
  </div>`;
    form.appendChild(inputText);
    form.appendChild(submitBtn);
    inputWrapper.appendChild(form);
    header.appendChild(cityInfo);
    header.appendChild(inputWrapper);
    tempWrapper.appendChild(iconWrapper);
    tempWrapper.appendChild(tempDetails);
    weatherInfoWrapper.appendChild(tempWrapper);
    weatherInfoWrapper.appendChild(weatherStats);
    appContainer.appendChild(header);
    appContainer.appendChild(weatherInfoWrapper);
  }

  function showError(ex) {
    const errorContainer = document.createElement('div');
    const appContainer = document.querySelector('.app-wrapper');
    console.log(ex);
    errorContainer.classList += 'error-message-container flex-center text-center';
    errorContainer.innerHTML = `<p>${ex.message}</p>`;
    appContainer.appendChild(errorContainer);
  }
  return {
    renderWeatherInfo,
    showError,
  };
}());

export default render;
