const express = require("express");
const app = express();

app.get("/", (request, response,) => {
    response.send("OK")
})

app.listen(3000, () => {
    console.log("Hello")
})