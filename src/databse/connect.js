const mongoose = require("mongoose");

const connectToDatabase = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.MongoDb_User}:${process.env.MongoDB_Password}@nodejs.g22cj0e.mongodb.net/?appName=NodeJs`,
    (error) => {
      if (error) {
        return console.log(
          "Ocorreu um erro ao se conectar com o banco de dados",
          error
        );
      }

      return console.log("Conexão ao bando de dados realizada com sucesso");
    }
  );
};

module.exports = connectToDatabase;
