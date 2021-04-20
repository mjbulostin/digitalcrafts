console.log("hi");

const http = require("http");
const express = require("express");
const app = express();
const address = "127.0.0.1";
const PORT = 3002;
const { readFile } = require("fs");

app.use(express)
// destructuring
// const user = {
//     name: "joe",
//     age: 31,


// const {age} = user
// consst age = user.age

// const server = http.createServer((req, res) => {
//     console.log(req.url);

//     if (req.url === "/hello-something") {
//         res.statusCode = 200;
//         res.end(`${req.url} is where you are at`);
//     } else {
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/plain");
//     res.end("hello");
// }
// });

app.get("/", (req, res) => {
    readFile("./index.html", "utf8", (err, html) => {
        res.send(html);
    });
    // res.end("Hello");
});

app.get("/poop", (req, res) => {

    if(req.body === doge){
        res.send("user /id is right here"hi 🐕");
    } else {
        res.send("hi 💩");
    }
})

app.get("/home", (req, res) => {
    // res.end("Hello another-place");
});

app.listen(PORT, () => {
    console.log(`Your server is listening on ${PORT}`)
});

// server.listen(PORT, address, () => {
//     console.log(`server is on http://${address}:${PORT}`);
// });