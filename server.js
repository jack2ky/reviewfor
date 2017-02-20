const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

var reviews = require("./dummyData/reviewsCenter");
var scores = require("./dummyData/scoresSide");
var company = require("./dummyData/company");
var user = require("./dummyData/user");

app.get("/reviewfor", (req, res) => {
    res.render("reviewfor", {
            company : company,
            reviews : reviews,
            scores: scores,
            user : user
        })
})

app.listen(4000, () => {
    console.log("Lisetening on port 4000")
})
