const express = require("express");
const app = express();
const { graphqlHTTP } = require("express-graphql"); // acts as a middleware for endpoints
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const schema = require("./schema/schema");
const cors = require("cors");
mongoose.set('useFindAndModify', false);
dotenv.config();

app.use(cors());

app.get("/", (request, response) => {
  response.send("response from graphql GrabYourRoom");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

// Mongoose Connectivity
mongoose.connect(
  "mongodb+srv://venky:venky123@cluster0.4jsfz.mongodb.net/grabYourRoom?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) return console.log(err.message);
    console.log("Database Connected!");
    app.listen(8000, () => {
      console.log("Server listening to the port 8000");
    });
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
