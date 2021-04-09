// function isAnagram(stringX, stringY) {
//     stringX = stringX.replace(/[^\w]/g, "").toLowerCase()
//     stringY = stringY.replace(/[^\w]/g, "").toLowerCase()

//     const charMapX = getCharMap(stringX)
//     const charMapY = getCharMap(stringY)

//     for (let char in charMapX) {
//         if (charMapX[char] !== charMapY[char]) {
//             return false
//         }
//     }

//     return true
// }

// function getCharMap(string) {
//     let charMap = {}

//     for (let char of string) {
//         charMap[char] = charMap[char] + 1 || 1
//     }
//     return charMap
// }

//////////////////////// 

// function isAnagram(stringA, stringB) {

//     stringA = stringA.replace(/[^\w]/g, '').toLowerCase()
//     stringB = stringB.replace(/[^\w]/g, '').toLowerCase()

//     return sortString(stringA) === sortString(stringB)
// }


// function sortString(string) {
//     return string.split('').sort().join('');
// }

// console.log(isAnagram("hello", "oellh"));
// console.log(isAnagram("listen", "lidfje"));
// console.log(isAnagram("Listen", "silent"));
// console.log(isAnagram("dorMITORY", "dirty room"));
// console.log(isAnagram("convers a t i o n", "voices!RANT!ON  !"));
// console.log(isAnagram("dkj fsdjfh", "this doesn't work"));

//////////////////////// 

const a = [4,3,6,3,4,3]

function findDuplicates(a){
    let counts = {}

    for(let i =0; i < a.length; i++){
        if (counts[a[i]]){
        counts[a[i]] += 1
        } else {
        counts[a[i]] = 1
        }
    }
    for (let prop in counts){
        if (counts[prop] >= 2){
            console.log(prop + " counted: " + counts[prop] + " times.")
        }
    }
    // console.log(counts)
}

// findDuplicates(a)

console.log(findDuplicates([1, 2, 3, 4, 5, 1]));
console.log(findDuplicates([1, 2, 2, 2, 2, 3, 2, 3, 2]));
console.log(findDuplicates([12, 12, 1, 2, 12, 22, 11]));
