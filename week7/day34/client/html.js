const addtodo = async () => {
    const todovalue = document.querySelector
    ("todo").value;

    const bodyToSend = {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",

        },
        body: JSON.stringify({
            description: todovalue,
        }),
};
const todo = await fetch("http://localhost:3004/todo", bodyToSend);
const jsontodo = await todo.json();
console.log(jsontodo);
};