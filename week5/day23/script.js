$(document).ready(() => {
    console.log("We are in jquery");
});
$()

const header = document.querySelector("h1");
console.log("header", header);

const divContainer = document.createElement("div");

const $jdivContainer = $("<div>");

const $header3 = $("<h3>", {
    text: "Mike is Here",
});
$header3.css("color", "blue");

$jdivContainer.append($header3);
$(document.body).append($jdivContainer);
console.log(divContainer);
console.log($jdivContainer);
console.log($header3);

$.ajax({
    url: "https://pokeapi.com/api/v2/pokemon/ditto",
    header: {
        Accept: "application/json",
    }
}).then((res) => {
    console.log(res.name);
}).catch(valueReturned => {
    console.log(valueReturned);
});


