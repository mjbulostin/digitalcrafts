const mainContainer = document.querySelector(".main-container");
// const buttonPersons = document.querySelector("#getPersons");
// const personsData = document.querySelector(".personsData")

const fetchPersonsData = async () => {
  let response = await fetch("https://fakerapi.it/api/v1/persons?_quantity=30&_locale=en_US");
  let json = await response.json();
  console.log(json);
  
  for (let persons of json.data) {
    console.log(persons);
    const personsContainer = document.createElement("div");
    personsContainer.className = "persons";
    firstNameOfPersons.innerHTML = firstNameOfPersons.firstname;
    const firstNameOfPersons = document.createElement("h3");
    const img = document.createElement("img");
    img.height = "200";
    img.width = "200";
    img.src = `http://placeimg.com/640/480/people`;
    
    personsContainer.append(firstNameOfPersons);
    mainContainer.append(personsContainer);
}

  return json;
};

const submit = document.querySelector("button");
submit.addEventListener("click", function () {
  fetchPersonsData();
});

