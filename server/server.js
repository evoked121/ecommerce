import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import http from "http";
import mongoose from "mongoose";
import userRoutes from "./routes/user.js";
import { errorMiddleware } from "./middlewares/error.js";
import User from "./models/user.js";
import Product from "./models/product.js";
import Order from "./models/order.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

//routes
app.use("/api/v1/user", userRoutes);
app.use(errorMiddleware);

const server = http.createServer(app);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    server.listen(process.env.PORT, () => {
      console.log("Server is running");
    });
  })
  .catch((err) => {
    console.log("database connection failed.");
  });
