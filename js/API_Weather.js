// API : https://openweathermap.org/api

// Clé api
const API_KEY = "4081444b7b90198136fefe6ed4ccf35b"; // login 
// Url API
const API_URL = "https://api.openweathermap.org/data/2.5/weather"; // recup donner serveur
// Base source icon
const API_URL_ICON = "http://openweathermap.org/img/wn/"; 
// Url API pour 16 jours
const API_URL_16 = "https://api.openweathermap.org/data/2.5/forecast/daily" // Début de l'URL pour l'API 16 jours

class API_WEATHER{
  constructor(city){
    // Si la ville n'est pas définit alors la ville par défault est Paris
    if(city === undefined){
      city = "paris";
    }

    this.city = city;
  }

  // Faire la requete à l'API openweathermap
  // Retourne une promise
  fetchTodayForecast(){
    return axios
    .get(`${API_URL}?q=${this.city}&units=metric&appid=${API_KEY}`, {
      crossdomain: true
    })
  }
  // Retourne l'element HTML de l'icon symbolisant la méteo.
  getHTMLElementFromIcon(icon){
    return `<img src=${API_URL_ICON}${icon}@2x.png class="weather-icon"/>`
  }

  // Fonction pour avoir 3 jours de meteo
  getThreeDayForecast(){
    return axios
    .get(`${API_URL_16}?q=${this.city}&cnt=4&appid=${API_KEY}`, {
      crossdomain: true
    })

  }
  

}