const mainContainer = document.querySelector(".people-container");
const secondaryContainer = document.querySelector(".products-container");
const header = document.querySelector(".header");

// GET PEOPLE section //

const fetchPeople = async () => {
  let peopleData = await fetch("https://fakerapi.it/api/v1/persons?_quantity=30&_locale=fr");
  let json = await peopleData.json();
  // console.log(json);
  counter = 0;
  for (let people of json.data) {
    // console.log(people);
    const getPeople = document.querySelector(".people-container");
    const peopleCard = document.createElement("div");
    peopleCard.className = "people-card"
    
    const nameOfPeople = document.createElement("h3");
    const phone = document.createElement("h3");
    const email = document.createElement("h3");
    const address = document.createElement("h3");
    const img = document.createElement("img");
    img.height = "300";
    img.width = "300";
    img.src = `http://placeimg.com/640/480/people${counter}`;
    nameOfPeople.innerHTML = json.data[counter]["firstname"] + " " + json.data[counter]["lastname"];
    email.innerHTML = json.data[counter]["email"];
    phone.innerHTML = json.data[counter]["phone"];
    peopleCard.append(img, nameOfPeople, email, phone);
    getPeople.append(peopleCard);
    counter += 1
          
}

  return json;
};

// GET PRODUCTS section //

const fetchProducts = async () => {
  let productData = await fetch("https://fakerapi.it/api/v1/products?_quantity=30&_taxes=12&_categories_type=uuid");
  let json2 = await productData.json();
  console.log(json2);
  counter = 0;

  for (let product of json2.data) {

    const getProducts = document.querySelector(".products-container");
    const productsCard = document.createElement("div");
    const products = document.createElement("h3");
    const img2 = document.createElement("img");
    const description = product.description;
    const name = product.name;

    productsCard.className = "products-card"    
    products.className = "products";
    product.innerHTML = product.name;
    
           
    img2.className = "product-image";
    img2.height = "100";
    img2.width = "140";
    img2.src = `http://placeimg.com/640/480/tech${counter}`;
    
    productsCard.append(img2, name, description);
    getProducts.append(productsCard);
    counter += 1
          
}

  return json2;
};

const peopleButton = document.querySelector(".people-button");
peopleButton.addEventListener("click", ()=>fetchPeople());

const productsButton = document.querySelector(".products-button");
productsButton.addEventListener("click", ()=>fetchProducts());

const clearAll = document.querySelector(".clear-button")
clearAll.addEventListener("click", () => location.reload())



