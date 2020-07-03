//dependents
const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 7777;
//express apps
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public"));

//required file path for notes.js
require("./routes/notes")(app);

//listener port with console log to verify if port is working
app.listen(PORT, () => {
    console.log("App listening on PORT: " + PORT);
  });