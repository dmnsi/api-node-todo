import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import todoRoute from "./routes/todoRoute.js";

const app = express();
dotenv.config();
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/todos", todoRoute)

app.get("/", (req, res) => {
  res.send("Welcome to the server");
});

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.mongodb)
  .then(() => {
    console.log(`Server is running on http://localhost:${PORT}`);
    app.listen(PORT);
  })
  .catch((err) => console.log(err));