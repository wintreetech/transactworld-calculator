import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { keys } from "./config/keys.js";
import routes from "./routes/index.js";
import connectDatabase from "./config/database.js";

dotenv.config();
const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());

//routes
app.use(routes);

const { port } = keys;
app.listen(port, () => {
  console.log(`app is listen on ${port}`);
  connectDatabase();
});
