const express = require("express");
const path = require("path");
const app = express()

app.use(express.static(path.join(__dirname,"public")));

app.get("/getHello", (req,res) =>{
    res.send("Hello NodeJs!!");
});

app.listen(3000, () => {
    console.log("Server is running.")
})