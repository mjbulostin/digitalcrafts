// we are going to communicate to an api to display the stuff on screen

// I need to fetch from an api
// fetch("address that you fetchfrom")

let response = fetch("https://pokeapi.co/api/v2/pokemon?&limit=5")
// Then enable object

// resolution
.then((responseWeGetBack)=> responseWeGetBack.json())
.then((data) => console.log(data));

const fetchPokemonData = async () => {
    let reponse = await fetch("https://pokeapi.co/api/v2/pokemon?&limit=5");
    let convertedResponse = await response.json();
    console.log(convertedResponse);
};
fetchPokemonData();
// rejection
//  .catch(console.log("woops, error");
console.log(response);

const getFruit = async (name) => {
    const fruits = {
        pineapple: "🍍",
        peache: "🍑",
        strawberry: "🍓",
    };

    return fruits[name];
}

const makeSmoothie = async () => {
    const firstFruit = await getFruit("peach");
    const secondFruit = await getFruit("pineapple");

    return [firstFruit, secondFruit]

};

const makeSmoothieFaster = async () => {
    const firstFruit = getFruit("peach");
    const secondFruit = getFruit("pineapple");
    const smoothie = await Promise.all([firstFruit, secondFruit]);
    return smoothie;

// console.log(await makeSmoothie));
};

// console.log(makeSmoothieFaster());

const fruitRace = async () => {
    const firstFruit = getFruit("peach");
    const secondFruit = getFruit("pineapple");
    const smoothie = await Promise.race([firstFruit, secondFruit]);
    console.log(winner);
    return winner;

};
fruitRace();

