import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";

import connect from "./database/connect.js";

const app = express();
dotenv.config();

// db connection
connect();

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.listen(process.env.PORT, () => {
  console.log(`backend running on port ${process.env.PORT}`);
});
