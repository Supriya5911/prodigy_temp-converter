function convertTemperature() {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitResult = document.getElementById("fahrenheit");
    const kelvinResult = document.getElementById("kelvin");
    
    const celsiusValue = parseFloat(celsiusInput.value);
    const fahrenheitValue = (celsiusValue * 9/5) + 32;
    const kelvinValue = celsiusValue + 273.15;
  
    fahrenheitResult.textContent = fahrenheitValue.toFixed(2) + "°F";
    kelvinResult.textContent = kelvinValue.toFixed(2) + "K";
  }
  function detectTemperature() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
  
        // Use latitude and longitude to fetch weather information from a weather API
        // You can use services like OpenWeatherMap, WeatherAPI, etc.
  
        // For this example, let's assume you've fetched the temperature in Celsius
        const detectedCelsius = 25; // Replace this with the fetched temperature
  
        const celsiusInput = document.getElementById("celsius");
        celsiusInput.value = detectedCelsius;
  
        convertTemperature(); // Automatically convert the detected temperature
      });
    } else {
      alert("Geolocation is not available in this browser.");
    }
  }
  