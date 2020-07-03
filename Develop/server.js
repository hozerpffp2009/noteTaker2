const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 7777;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public"));


require("./routes/notes")(app);


app.listen(PORT, () => {
    console.log("App listening on PORT: " + PORT);
  });