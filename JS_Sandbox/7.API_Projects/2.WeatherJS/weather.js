class Weather {
    constructor(city, country) {
      this.apiKey = '110e3632a12262937e3c4cab09e51ff7'
      this.city = city
      this.country = country
    }
  
    // Fetch weather from Openweathermap API
    async getWeather() {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}&units=metric`
      )
  
      const responseData = await response.json()
      console.log(responseData)
  
      return responseData
    }
  
    // Change location
    changeLocation(city, country) {
      this.city = city
      this.country = country
    }
  }