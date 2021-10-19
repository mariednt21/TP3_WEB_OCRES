
// Fonction appelée lors du click du bouton, MAINTENANT DISPARU, Chargement de la fonction dès le chargement de la page
function start() {

  // Recupère la valeur entrée par l'utilisateur
  city = document.getElementById('city-input').value

  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER(city);
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .getThreeDayForecast()
    .then(function (response) {
      // Récupère la donnée d'une API
      const data = response.data;
      console.log(data);

      // On récupère l'information principal
      const main = data.list[0].weather[0].main;
      const description = data.list[0].weather[0].description;
      const temp = data.list[0].temp.day;
      const icon = apiWeather.getHTMLElementFromIcon(data.list[0].weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;

      // On récupère l'information principal pour demain
      const main1 = data.list[1].weather[0].main;
      const description1 = data.list[1].weather[0].description;
      const temp1 = data.list[1].temp.day;
      const icon1 = apiWeather.getHTMLElementFromIcon(data.list[1].weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main-demain').innerHTML = main1;
      document.getElementById('today-forecast-more-info-demain').innerHTML = description1;
      document.getElementById('icon-weather-container-demain').innerHTML = icon1;
      document.getElementById('today-forecast-temp-demain').innerHTML = `${temp1}°C`;

      // On récupère l'information principal pour après demain
      const main2 = data.list[2].weather[0].main;
      const description2 = data.list[2].weather[0].description;
      const temp2 = data.list[2].temp.day;
      const icon2 = apiWeather.getHTMLElementFromIcon(data.list[2].weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main-apresdemain').innerHTML = main2;
      document.getElementById('today-forecast-more-info-apresdemain').innerHTML = description2;
      document.getElementById('icon-weather-container-apresdemain').innerHTML = icon2;
      document.getElementById('today-forecast-temp-apresdemain').innerHTML = `${temp2}°C`;

      // On récupère l'information principal pour encore après demain
      const main3 = data.list[3].weather[0].main;
      const description3 = data.list[3].weather[0].description;
      const temp3 = data.list[3].temp.day;
      const icon3 = apiWeather.getHTMLElementFromIcon(data.list[3].weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main-encoreapresdemain').innerHTML = main3;
      document.getElementById('today-forecast-more-info-encoreapresdemain').innerHTML = description3;
      document.getElementById('icon-weather-container-encoreapresdemain').innerHTML = icon3;
      document.getElementById('today-forecast-temp-encoreapresdemain').innerHTML = `${temp3}°C`;


    })
    .catch(function (error) {
      // Affiche une erreur
      console.error(error);
    });
}

// Fonction pour récupérer le nom de ville donner par l'utilisateur
function Actualize() {

  // Recupère la valeur entrée par l'utilisateur
  city = document.getElementById('city-input').value

  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER(city); // Envoie du nom de la ville
  // Appel de la fonction fetchTodayForecast
  console.log(data);

  apiWeather
    .getThreeDayForecast()
    .then(function (response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const main = data.list[0].weather[0].main;
      const description = data.list[0].weather[0].description;
      const temp = data.list[0].main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.list[0].weather[0].icon);


      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;


      // On récupère l'information de demain
      const main2 = data.list[1].weather[0].main;
      const description2 = data.list[1].weather[0].description;
      const temp2 = data.list[1].main.temp;
      const icon2 = apiWeather.getHTMLElementFromIcon(data.list[1].weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main-demain1').innerHTML = main2;
      document.getElementById('today-forecast-more-info-demain1').innerHTML = description2;
      document.getElementById('icon-weather-container-demain1').innerHTML = icon2;
      document.getElementById('today-forecast-temp-demain1').innerHTML = `${temp2}°C`;


    })
    .catch(function (error) {
      // Affiche une erreur
      console.error(error);
    });
}
