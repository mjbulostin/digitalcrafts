const express = require("express");
const app = express();
const { readFile } = require("fs");

const PORT = 3001;

// middleware
app.use(express.json())


// routes
// 1 Default page aka / *
// 2 /home page
// 3 /about page
// 4 FAQ
// 5 messages

app.get("/", (req, res) => {
  const message = "Welcome to my Main page 👋";
  res.send(message);
});

app.get("/home", (req, res) => {
  const message = "Welcome to my home 🏠";
  res.send(message);
});

app.get("/about", (req, res) => {
  const message = "Welcome to my about me 💪";
  res.send(message);
});

app.get("/faq", (req, res) => {
  const message = "Welcome to my thonking page 🤔";
  res.send(message);
});

app.post("/messages/:id", (req, res) => {
console.log(req)

const copy = [...array[id]]
const updateCopy = [...array[id], ...req.body]
  const {logo, name} = req.body 
  const message = `Your logo is ${logo} and it is called ${name}`;
  res.send(message);
});

app.get("*", (req, res) => {
  const message = "Uh oh, this page is not real 🤭";
  readFile("./index.html", "utf8", (err, html) => {
    res.send(html);
  });
});

app.listen(PORT, () => {
  console.log(`Your server is being hosted on localhost:${PORT}`);
});