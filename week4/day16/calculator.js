function operation(operator, num1, num2) {
    if (operator === "multiply") {
        answer = num1 * num2;
        console.log(
            `You chose multiplication as your operation and the answer of ${num1} multiplied by ${num2} is ${answer}`
        );
    } else if (operator === "divide") {
        answer = num1 / num2;
        console.log(
        `You chose division as your operation and the answer of ${num1} divided by ${num2} is ${answer}`)
    } else if (operator === "add") {
        answer = num1 + num2;
        console.log(
        `You chose addition as your operation and the answer of ${num1} plus ${num2} is ${answer}`)
    } else if (operator === "subtract") {
        answer = num1 - num2;
        console.log(
        `You chose subtraction as your operation and the answer of ${num1} minus ${num2} is ${answer}`)
    } else 
        console.log("Invalid operation")

}

operation("multiply", 50, 20)
operation("divide", 100, 25)
operation("add", 200, 400)
operation("subtract", 400, 300)