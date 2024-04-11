async function start() {
  const weatherPromise = await fetch("https://api.weather.gov/gridpoints/MFL/110,50/forecast")
  const weatherData = await weatherPromise.json()
  const ourTemperature = weatherData.properties.periods[0].temperature
  document.querySelector("#temperature-output").textContent = ourTemperature
}

start()





function filterPets() {
  //this is where we filter the pets based on the button clicked

}



document.querySelector("#all-pets").addEventListener("click", function () {
  //do stuff// 
})

document.querySelector("#only-dogs").addEventListener("click", function () {
  //do stuff// 
})

document.querySelector("#only-cats").addEventListener("click", function () {
  //do stuff// 
})