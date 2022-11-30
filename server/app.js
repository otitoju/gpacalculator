const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes/routes");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", routes);

const PORT = process.env.PORT || 6000;

app.get("/", (req, res) => {
    res.send("<h1>C.G.P.A CALCULATOR SERVER</h1>");
});

app.listen(PORT, () => {
    console.log(`Server started on PORT:: ${PORT}`)
});

mongoose.connect("mongodb://localhost:27017/CGPA");
