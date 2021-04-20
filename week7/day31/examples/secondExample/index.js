const express = require("express");
const app = express();

const port = 3000;

const getYawn = () => {
    const yawn = await fetch("http://localhost:3000/yawn");
    const yawnjson = await yawn.json()
    return yawnjson
}

// tell what routess exist so that if you navigate to them in the url
// you get back whatever is in res.send
app.get("/", (req, res) => {
    res.send("hello");
});

app.get("/yawn", (req, res) => {
    res.send("yawwwwnnnnnnn");
});

app.listen(port, () => {
    console.log(`server is on ${PORT}`);
});