const template = document.querySelector("#pet-card-template")
const wrapper = document.createDocumentFragment()

async function start() {
  const weatherPromise = await fetch("https://api.weather.gov/gridpoints/MFL/110,50/forecast")
  const weatherData = await weatherPromise.json()
  const ourTemperature = weatherData.properties.periods[0].temperature
  document.querySelector("#temperature-output").textContent = ourTemperature
}
start()

async function petsArea() {
  const petsPromise = await fetch("https://learnwebcode.github.io/bootcamp-pet-data/pets.json")
  const petsData = await petsPromise.json()
  petsData.forEach(pet => {
    const clone = template.content.cloneNode(true)
    clone.querySelector("h3").textContent = pet.name

    wrapper.appendChild(clone)
  })
  document.querySelector(".list-of-pets").appendChild(wrapper)
}
petsArea()



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