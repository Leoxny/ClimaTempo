await axios.get(`api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=f547f2f408903d490db0553c178f903f`)
    
    .then(async function (response) {
      const teste = response.data     

      setTemperatureMin(convertKelvinToC(teste.main.temp_min))
      setTemperatureMax(convertKelvinToC(teste.main.temp_max))
      setWind(teste.wind.speed)
      setHumidity(teste.main.humidity)
      setCurrentTemperature(convertKelvinToC(teste.main.temp))
      
    })
    .catch(function (error) {
      console.log(error);
    })