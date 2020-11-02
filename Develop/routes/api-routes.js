 //Load data 
 const fs = require('fs');
 let rawData = fs.readFileSync("./db/db.json");
 let data = JSON.parse(rawData)

 //Routing
 module.exports = function (app) {

     //Returns all the notes
     app.get("/api/notes", (req, res) => {
         res.json(data);
     });

     //Saves a new note
     app.post("/api/notes", (req, res) => {
         //Assign id
         req.body["id"] = data.length + 1;
         console.log(req.body)
         //Write the req to notes
         data.push(req.body);
         fs.writeFile("./db/db.json", JSON.stringify(data), err => {
             if (err) throw err;
         });
         res.json(true);
     });

     //Delete a note 
     app.delete("/api/notes/:id", (req, res) => {
         //Gets index of note to be deleted
         let targetNote = (req.params['id'] -1);
         console.log(targetNote);
         //Deletes note
         data.splice(targetNote, 1);
         //Writes changes to file
         fs.writeFile("./db/db.json", JSON.stringify(data), err => {
             if (err) throw err;
         });
     });
 }