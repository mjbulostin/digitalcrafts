const getWeatherData = async ()=> {
    const userInput = document.querySelector(".userInput").value 
    const data = away fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zipcodeInput}&appid=dafb506f065156aa5b556b9fd547be3b&units=imperial`)
    const formattedJson = await data.json()
    let root = document.querySelector(".root")
    let zipcode = document.createElement("h2")
    let temp = document.createElement("h2")
    zipcode.innerHTML = formattedJson.name
    temp.innerHTML = formattedJson.main.temp
    root.append(zipcode,temp)

}

const searchBtn = document.querySelector(".search")

searchBtn.addEventListener('click', function(){
    getWeatherData()
})

form.addEventListener("search", e => {
  e.preventDefault();
  let inputVal = input.value;