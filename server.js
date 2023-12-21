import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.js";

// configure env //no need to define path because .env file is already in the path.
dotenv.config({ path: "./" });

// Databse connect
connectDB();

// rest object
const app = express();

// Middleware
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/v1/auth", authRoutes);

// rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to MERN STACK Project!</h1>");
});

// PORT
const port = process.env.PORT || 8080;

// run listen
app.listen(port, () => {
  console.log(`Server running on ${process.env.DEV_MODE || "development"} mode ${port}`.bgCyan.white);
});
