const { res } = require("express");
const fs = require("fs");
const path = require("path");

module.exports = (app) => {
  app.get("./api/notes", (req, res) =>
    fs.readFile(path.join(__dirname, "./db.db.json"), "utf8", (error, data) => {
      res.json(data);
    })
  );
  app.post("./api/notes", (req, res) =>
    res.sendFile(path.join(__dirname, "./db.db.json"))
  );
};
