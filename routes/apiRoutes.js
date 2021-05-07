const { res } = require("express");
const fs = require("fs");
const path = require("path");
let db = require("../db/db.json");
module.exports = (app) => {
  app.get("/api/notes", (req, res) => {
    // const newNote = req.param.notes;
    // res.json(newNote);
    fs.readFile("./db/db.json", "utf8", (err, data) => {
      if (err) {
        console.log(err);
        return res.json("There was an error reading your data");
      }
      db = JSON.parse(data);
      console.log(db);
      res.json(db);
    });
  });

  app.post("/api/notes", (req, res) => {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
      if (err) {
        return res.send("There was an error reading your data");
      }
      db = JSON.parse(data);
      const newNote = { ...req.body, id: db.length };
      db.push(newNote);

      fs.writeFile("./db/db.json", JSON.stringify(db), "utf8", (err) => {
        if (err) {
          return res.send("There was an error writing your data");
        }
        res.json(newNote);
      });
    });
  });
};
