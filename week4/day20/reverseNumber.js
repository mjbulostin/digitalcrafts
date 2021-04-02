const reverseNumericalInput = (num) =>
// "231.0"
// ["2","3", "1", ".", "0"]
// ["0",".","1","3","2"]
// ["0.132"]
// 132

parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num);

console.log(reverseNumericalInput(485));
console.log(reverseNumericalInput(0076));
console.log(reverseNumericalInput(-756.65));
console.log(reverseNumericalInput(7560.00));
console.log(reverseNumericalInput(0123));

// function reverseNumber(number) {
//     var revNumber = 0;
//     while (number > 0) {
//         revNumber = (revNumber * 10) + (number % 10);
//         number = Math.floor(number / 10);
//     }

//     return revNumber;
// }

// function reverse(n)
// {
//     var arr=[], reverse=0;
//     while(n>0) arr.push(n%10), n=Math.floor(n/10);
//     while(arr.length) reverse=reverse*10+arr.shift();
//     return reverse;
// }


// 485 = 584
// 0076 = 67
// -756.65 = -56.657
// 7560.00 = 657