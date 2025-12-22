const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      "https://cloud.mongodb.com/v2/694970108005a44268f7e92b#/overview?connectCluster=NodeJs"
    );
    console.log("Conectado ao MongoDB!");
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error);
  }
};

module.exports = connectToDatabase;

// const { Person } = require("./person");
// const dotenv = require("dotenv");
// const connectToDatabase = require("./src/databse/connect");

// dotenv.config();

// connectToDatabase();

// require("./modules/path");
// require("./modules/fs");
// require("./modules/http.js");

// require("./modules/express");

// const person = new Person("Paulo");
