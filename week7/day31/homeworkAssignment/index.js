const express = require("express");
const app = express();
const { readFile } = require("fs");

const PORT = 3002;

app.use(express.json())

app.get("/", (req, res) => {
    const message = "Welcome to my main page";
    res.send(message);
});

app.get("/store", (req, res) => {
    const message = "Welcome to my store!";
    res.send(message);
});

app.get("/contact", (req, res) => {
    const message = "Welcome to my contact page!";
    res.send(message);
});

// app.post("/messages/:id", (req, res) => {
//     console.log(req)

//     const copy = [...array[id]]
//     const updateCopy = [...array[id], ...req.body]
//       const {logo, name} = req.body 
//       const message = `Your logo is ${logo} and it is called ${name}`;
//       res.send(message);
//     });

app.get("*", (req, res) => {
    const message = "Uh oh, this page is not real 🤭";
    readFile("./index.html", "utf8", (err, html) => {
        res.send(html);
    });
    });
    
    app.listen(PORT, () => {
    console.log(`Your server is being hosted on localhost:${PORT}`);
    });