import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import postsRoutes from "./routes/posts.js";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const publicPath = path.join(__dirname, "../client/build");

dotenv.config();

const app = express();

app.use(express.static(publicPath));

app.use(bodyParser.json({ extended: true, limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(cors());
app.use("/posts", postsRoutes);

mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() => console.log("DB connected"));

app.listen(process.env.PORT, () => {
  console.log("Server running on port " + process.env.PORT);
});
