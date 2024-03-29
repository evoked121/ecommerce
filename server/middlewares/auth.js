import User from "../models/user.js";
import ErrorHandler from "../utils/error.js";
import jwt from "jsonwebtoken";
import { asyncError } from "./error.js";

export const isAuthenticated = asyncError(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next(new ErrorHandler("Not Logged in", 401));
  }
  const decodedData = jwt.verify(token, process.env.JWT_SECRET);

  const user = await User.findById(decodedData._id);
  req.user = user;
  next();
});

//isAdmin 在 isAuthenticated 之后，所以req.user中有数据！
export const isAdmin = asyncError(async (req, res, next) => {
  if (req.user.role !== "admin")
    return next(new ErrorHandler("Only Admin allowed", 401));
  next();
});
