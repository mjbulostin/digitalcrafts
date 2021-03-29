// // Define Variables
// let greetings = "Hello World";
// let number1 = 100;
// const boolean = false;
// // Define an array in javascript
// let array = [1, 2, 3];

// // Define an object in javascript
// let object = { key: "value" };
// let integer = 3;
// let name = "Mike"
// // let newName = name("This is a new string")
// let newInteger = (integer * 5)

let newArray = ["swag", 123123, true, false, "boolean"];
console.log(newArray[1]);
console.log(newArray[3]);
console.log(newArray[4]);
console.log(newArray.length);
console.log("this array has {array.length} things in it");

let complexObject = {
    profile1: { 
      name: "name",
      age: 20,
      height: 7.1,
      metric: "ft"
    },
    profile2: {
        name: "Mike",
        age: 32,
        height: 5.11,
        metric: "ft"
      },
      profile3: {
        name: "Leila",
        age: 12,
        height: 3,
        metric: "ft"
      },
      profile4: {
        name: "Beau",
        age: 1,
        height: 3.5,
        metric: "ft"
      },
      profile5: {
        name: "Sadie",
        age: 10,
        height: 2.1,
        metric: "ft"
      },
};

console.log(complexObject.profile1.name);
console.log(complexObject.profile5.age);
console.log(complexObject.profile3.height);
console.log(complexObject.profile5.name);

complexObject.profile3.height = 1.2;
console.log(complexObject.profile3.height);

complexObject.profile3.metric = "meters";
console.log(complexObject.profile3.metric);

complexObject.profile2.sport = "soccer";
console.log(complexObject.profile2.sport);
