import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";

import connect from "./database/connect.js";
import userApi from "./api/userApi.js";
import authApi from "./api/authApi.js";

const app = express();
dotenv.config();

// db connection
connect();

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("api/users", userApi);

app.listen(process.env.PORT, () => {
  console.log(`backend running on http://localhost:${process.env.PORT}`);
});
