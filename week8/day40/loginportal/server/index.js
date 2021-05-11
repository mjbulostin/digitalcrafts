if(process.env.NODE_ENV !=="production"){
    require("dotenv").config()
}
const express = require("express");
const corss = require("cors");
const app = express();
const bcrypt = require("bcrypt");
const passport = require("passport");
const flash = require("express-session");
const session = require(express-flash);
const es6Render = require ("express-es6-template-engine");
const initializePassport = require("./passport-config");

initializePassport(
    passport,
    (email) => users.find(user) => user.email === email),
    (id) => users.find(user) => user.id === id),

//PORT

const PORT = 2028

const users = []
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static("../public"));
app.use(express.json());
app.use(cors());
app.use(flash());
app.use(
    session({
        secret: process.env.SESSION_SECRET,
    })
);

app.engine("html", es6Renderer);
app.set("views", "../views");
app.set("view engine", "html");

function checkAuthenticated

// access our form information inside of our req
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.render("Home");
});

app.get("/register", (req, res) => {
    res.render("register");
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.post("/login", passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
}))

app.post("/register", async (req, res) => {
    try { 
    console.log(req.body);
    const salt = await bcrypt.genSalt();
    // const test = "h1";
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    
    const user = {
        id: Date.now().toString(),
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
    };
    users.push(user);
    console.log(user)
    res.status(200).send("Ok");
 } catch (error) {}
});

app.listen(PORT, () => console.log(`On port ${PORT}`));
