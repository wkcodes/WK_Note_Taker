//Server start
console.log("Server starting")

//Dependecy
const express = require("express");

//Config
const app = express();
const PORT = process.env.PORT || 8080;

//Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//Routes
//require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

//Server listen
app.listen(PORT, () => console.log(`Listening on Port: ${PORT}`));

