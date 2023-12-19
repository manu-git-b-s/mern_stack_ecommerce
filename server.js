import express from "express";
import colors from "colors";
import dotenv from "dotenv";

//? configure env //no need to define path because .env file is already in the path.

//? rest object
const app = express();

//? rest api
app.get("/", (req, res) => {
  //   res.send({ message: "Welcome to Ecommerce app MERN STACK Project" });
  res.send("<h1>Welcome to MERN STACK Project!</h1>");
});

dotenv.config();
//? PORT
const port = process.env.PORT || 8000;

//? run listen
app.listen(port, () => {
  console.log(`Server running on ${port}`.bgCyan.white);
});
