const path = require("path");
const fs = require("fs")
const db = ("./db.json");

class Helper {
    getAllNotes() {
        fs.readFileAsync(db, "utf8", (err, data) => {
            if (err) {
                throw err;
            }
            return JSON.parse(data);
        });
    }
}

module.exports = new Helper;