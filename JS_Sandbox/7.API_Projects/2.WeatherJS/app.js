const storage = new Storage()

//get stored location data
const weatherLocation = storage.getLocationData()

// 1.Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.country)

//init ui
const ui = new UI()

//2. getWeather() function
function getWeather() {
    weather
      .getWeather()
      .then(results => {
       // console.log(results);
        ui.paint(results) //1st create the UI class in ui.js
      })
      .catch(err => console.log(err))
  }
  
//4.Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather)

//change location event
document.getElementById('w-change-btn').addEventListener('click', e => {
  const city = document.getElementById('city').value
  const country = document.getElementById('country').value

  //3. Change location
  weather.changeLocation(city, country)

  //set location in local storage
  storage.setLocationData(city, country)

  //get and display weather
  getWeather()

  //close modal
  $('#locModal').modal('hide')
  const modal = document.getElementById('locModal')
})

