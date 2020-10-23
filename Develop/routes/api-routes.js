 //Load data 
const fs = require('fs');
let rawData = fs.readFileSync("./db/db.json");
let data = JSON.parse(rawData)

console.log(data) 

//Routing
module.exports = function(app) {

    //Returns all the notes
    app.get("/api/notes", (req, res) => {
        res.json(data);
        //console.log(noteData);
    });

    //Saves a new note
    app.post("/api/notes", (req, res) => {
        //Write the req to notes
        data.push(req.body);
        fs.writeFile("./db/db.json", JSON.stringify(data), err => {
            if(err) throw err;
        });
        res.json(true);
    })
}

