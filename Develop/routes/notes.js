const fs = require('fs');
const path = require('path');

module.exports = app => {

   //begin function to read db.json file
    fs.readFile("db/db.json","utf8", (err, data) => {

        if (err) throw err;

        var notes = JSON.parse(data);

  
        app.get("/api/notes", (req, res) => {
           
            res.json(notes);
        });

       // begin function for new notes that were added
        app.post("/api/notes", (req, res) => {
         
            let newNote = req.body;
            notes.push(newNote);
            update();
            return console.log("Added new note: ");
        });

       // begin function for getting notes by id
        app.get("/api/notes/:id", (req,res) => {
         
            res.json(notes[req.params.id]);
        });

       // begin function to delete specific notes
        app.delete("/api/notes/:id", (req, res) => {
            notes.splice(req.params.id, 1);
            update();
            console.log("Deleted note");
        });

       //begin function to access notes.html
        app.get('/notes', (req,res) => {
            res.sendFile(path.join(__dirname, "../public/notes.html"));
        });
        
        //begin function to access index.html
        app.get('*', (req,res) => {
            res.sendFile(path.join(__dirname, "../public/index.html"));
        });
        //begin function that updates after note is added and or removed
        function update() {
            fs.writeFile("db/db.json",JSON.stringify(notes,'\t'),err => {
                if (err) throw err;
                return true;
            });
        }

    });

}