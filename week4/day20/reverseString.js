function aString(str) {
    let newString = "";
    for (let x = str.length - 1; x >= 0; x--) {
        newString = newString + str[x];
    }
    return newString;

}

console.log(aString('greetings'))

// const str1 = "leahciM si eman yM";
// const str2 = "racecar";
// const str3 = "ysae os era smhtirogla";

// const stringReversal = (str) => {
//     const strArray = str.split("");
//     let newArray = []

//     for (let i = str.length; i > 0; i--) {
//         str[i];
//         console.log(str[i]);
//     }

//     return result;
// }




