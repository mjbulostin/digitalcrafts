const express = require("express")
const app = express()

const PORT = 3030
// http methods
// get
// post

// routes
// app.get("path"),()=>{})
app.get("/home", (req,res) => {
    res.send("welcome to home");
});

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
});

app.get("/", (req, res) => {
    readFile("./index.html", "utf8", (err, html) => {
        res.send(html);
    });
    // res.end("Hello");
});

// app.get("/about", (req, res) => {

//     if(req.body === doge){
//         res.send("user /id is right here 🐕");
//     } else {
//         res.send("hi 💩");
//     }
// })

app.get("/about", (req,res) => {
    res.send("about page");
});

app.get("/team", (req,res) => {
    res.send("team page");
});

app.post("/FAQ", (req,res) => {
    res.send("FAQ page");
});
