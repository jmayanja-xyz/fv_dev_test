const express = require("express");
const app = express();
const port = 4000; // different from react port

//const bodyParser = require('body-parser');

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("sqlite::memory:");

sequelize
  .authenticate()
  .then(function (err) {
    console.log("Connection established.");
    // define new table: 'users'
    User = sequelize.define("users", {
      name: {
        type: Sequelize.STRING,
      },
    });
    setup();
  })
  .catch(function (err) {
    console.log("Unable to connect to database: ", err);
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
