// String interpolation in JS

let height = "6ft";
let weight = "140lbs";

let string = 'string';
let string2 = "string";
let string3 = `string`;
let integer = 2.3;
let JoesDimensions = `Joes height is ${height} and he weighs ${weight}`;

// console.log(JoesDimensions);

// console.log(integer); 

//for in is for objects
let singlePizza = {
     
    crust: 'thin',
    toppings: [
        "cheese", 
        "pepperoni", 
        "mushrooms",
        "peppers",
        "onions",
        "anchovies",
        "feta", 
        "quinoa", 
        "pineapple",
],
    size: "Large",
    sauce: ["marinara", "alfredo"],
};


for (const topping of singlePizza.toppings) {
    console.log(topping);
    // console.log("This is the key ", pizza);
    // console.log(singlePizza[pizza]);
}


let cars = ["Subaru", "Audi", "Honda", "BMW"];
// for of is for arrays
for (const car of cars) {
    console.log("this is a", car);
}

// if else statements
let age = 2
if (age < 5) {
    console.log("You're too young")
} else {
    console.log("You're getting too old");
}

// if else statements
let playerHeight = 5.3;
if (playerHeight < 4) {
    console.log("Play point guard");
} else if (playerHeight < 6 && playerHeight > 5) {
    console.log("bench");
} else {
    console.log("Center");
}

// calculate("multiply", num1, num2);
// print out the message of whatever operation t hey did
// and the correct answer


calculate("multiply", 23, 84);
    console.log(" You did multiple and your answer is ${answerHere}")
calculate("subtract", 102, 84);
calculate("add", 102, 84);
calculate("divide", 10, 20);