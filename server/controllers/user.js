import User from "../models/user.js";
import ErrorHandler from "../utils/error.js";
import { asyncError } from "../middlewares/error.js";

export const login = asyncError(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select("+password");

  const isMatched = await user.comparePassword(password);
  if (!isMatched) {
    return next(new ErrorHandler("Incorrect Password", 400));
  }

  res.status(200).json({
    success: true,
    message: "welcome back",
  });
});

export const signup = asyncError(async (req, res, next) => {
  const { name, email, password, address, city, country, pinCode } = req.body;
  await User.create({
    name,
    email,
    password,
    address,
    city,
    country,
    pinCode,
  });
  return res.status(201).json({
    success: true,
    message: "Registered Successfully",
  });
});
