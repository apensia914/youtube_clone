import express from "express";

const app = express();
const port = 4000;

const somethingMiddleware = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}

const privateMiddleware = (req, res, next) => {
    const url = req.url;
    if (url === "/protected") {
        return res.send("<h1>Not Allowed</h1>")
    }
    console.log("Allowed, you may continue");
    next();
}

app.use(somethingMiddleware);
app.use(privateMiddleware);
app.get("/", (req, res) => {
    res.send("Hello World!");
})
app.get("/protected", (req, res) => {
    return res.send("Welcome to private lounge.")
})

app.get("/login", (req, res) => {
    res.send("Please login here!");
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})