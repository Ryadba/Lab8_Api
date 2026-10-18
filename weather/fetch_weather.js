let weatherUrl = 'https://api.weather.gov/gridpoints/MPX/116,72/forecast'

let weatherTable = document.querySelector('#weather-forecast')

fetch(weatherUrl)
    .then(response => {
        return response.json()
    })
    .then(weatherJson => {
        displayWeatherTable(weatherJson)
    })
    .catch(error => {
        console.log(error)
        alert('Sorry, could not get weather forecast !')
    })


function displayWeatherTable(weatherJson) {
    // console.log(weatherJson)
    let forecastArray = weatherJson.properties.periods
    
    console.log(forecastArray)
    forecastArray.forEach(forecastPeriodData => {

        //Create the single table row container
        let tableRow = document.createElement('tr')

        // Get the period name ex. Tonight, Monday, Monday Night and add to the table
        console.log(forecastPeriodData)
        let periodName = forecastPeriodData.name
        console.log(periodName)

        let periodNameTableData = document.createElement('td')
        periodNameTableData.innerHTML = periodName

        tableRow.appendChild(periodNameTableData)


        // Get temperature, create td, add to table row
        let temperature = forecastPeriodData.temperature
        let temperatureUnit = forecastPeriodData.temperatureUnit
        let temperatureTableData = document.createElement('td')
        temperatureTableData.innerHTML = temperature + temperatureUnit
        tableRow.appendChild(temperatureTableData)

        // Add weather icon
        let weatherIconSource = forecastPeriodData.icon
        let weatherIconTableData = document.createElement('td')
        let weatherIconImage = document.createElement('img')
        weatherIconImage.src = weatherIconSource
        weatherIconTableData.appendChild(weatherIconImage)
        tableRow.appendChild(weatherIconTableData)

        // Add weather description (detailed forecast)
        let detailedForecast = forecastPeriodData.detailedForecast
        let detailedForecastTableData = document.createElement('td')
        detailedForecastTableData.innerHTML = detailedForecast
        tableRow.appendChild(detailedForecastTableData)

         // Add Wind Speed and Wind Direction Column
        let windSpeed = forecastPeriodData.windSpeed          // ex., "5 mph"
        let windDirection = forecastPeriodData.windDirection  // ex., "NE"
        let windString = windSpeed + ', ' + windDirection      // Combine speed and direction as "5 mph, NE"

        let windTableData = document.createElement('td')
        windTableData.innerHTML = windString
        tableRow.appendChild(windTableData)


        // Add table row (with all the new td elements in it)
        // to the table
        weatherTable.appendChild(tableRow)
    })
}