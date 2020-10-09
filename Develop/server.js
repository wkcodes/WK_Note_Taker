//Dependecy
const express = require("express");
//const apiRoutes = require("./routes/api-routes");
//const htmlRoutes = require("./routes/html-routes");

//Config
const app = express();
const PORT = process.env.PORT || 8080;

//Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//Router
require("./routes/api-routes");
require("./routes/html-routes");

app.listen(PORT, () => console.log(`Listening on Port: ${PORT}`));

console.log("connected?");

//look in index file
