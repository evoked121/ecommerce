import User from "../models/user.js";
import ErrorHandler from "../utils/error.js";
import { asyncError } from "../middlewares/error.js";
import { sendToken, getDataUri } from "../utils/features.js";
import { cookieOptions } from "../utils/features.js";
import cloudinary from "cloudinary";

export const login = asyncError(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHandler("Incorrect Email or Password", 400));
  }

  if (!password) return next(new ErrorHandler("Please Enter Password", 400));

  const isMatched = await user.comparePassword(password);

  if (!isMatched) {
    return next(new ErrorHandler("Incorrect Password", 400));
  }

  sendToken(user, res, "welcome back", 200);
});

export const signup = asyncError(async (req, res, next) => {
  const { name, email, password, address, city, country, pinCode } = req.body;
  let user = await User.findOne({ email });
  if (user) {
    return next(new ErrorHandler("User already exist", 400));
  }

  let avatar = undefined;

  if (req.file) {
    const file = getDataUri(req.file);
    const myCloud = await cloudinary.v2.uploader.upload(file.content);
    avatar = {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    };
  }

  user = await User.create({
    avatar,
    name,
    email,
    password,
    address,
    city,
    country,
    pinCode,
  });

  sendToken(user, res, "Registered successfully", 201);
});

export const getMyProfile = asyncError(async (req, res, next) => {
  const user = await User.findById(req.user._id);
  res.status(200).json({
    success: true,
    user,
  });
});

export const logOut = asyncError(async (req, res, next) => {
  res
    .status(200)
    .cookie("token", "", {
      ...cookieOptions,
      expires: new Date(Date.now()),
    })
    .json({
      success: true,
      message: "Logged Out Successfully",
    });
});

export const updateProfile = asyncError(async (req, res, next) => {
  const user = await User.findById(req.user._id);

  const { name, email, address, city, country, pinCode } = req.body;

  if (name) user.name = name;
  if (email) user.email = email;
  if (address) user.address = address;
  if (city) user.city = city;
  if (country) user.country = country;
  if (pinCode) user.pinCode = pinCode;

  await user.save();

  res.status(200).json({
    success: true,
    message: "Profile Updated Successfully",
  });
});

export const changePassword = asyncError(async (req, res, next) => {
  const user = await User.findById(req.user._id).select("+password");

  const { oldPassword, newPassword } = req.body;

  if (!oldPassword || !newPassword)
    return next(
      new ErrorHandler("Please Enter Old Password & New Password", 400)
    );

  const isMatched = await user.comparePassword(oldPassword);

  if (!isMatched) return next(new ErrorHandler("Incorrect Old Password", 400));

  user.password = newPassword;
  await user.save();

  res.status(200).json({
    success: true,
    message: "Password Changed Successully",
  });
});

/*export const forgetPassword = asyncError(async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) return next(new ErrorHandler("Incorrect Email", 404));

  const randomNumber = Math.random() * (999999 - 100000) + 100000;
  const otp = Math.floor(randomNumber);
  const otp_expire = 15 * 60 * 1000;

  user.otp = otp;
  user.otp_expire = new Date(Date.now() + otp_expire);
  await user.save();

  const message = `Your OTP for Reseting Password is ${otp}.\n Please ignore if you haven't requested this.`;

  res.status(200).json({
    success: true,
    message: `Email sent to ${user.email}`,
  });
});

export const resetPassword = asyncError(async (req, res, next) => {
  const user = await User.findById(req.user._id);
  res.status(200).json({
    success: true,
    user,
  });
});
*/
export const updatePic = asyncError(async (req, res, next) => {
  const user = await User.findById(req.user._id);

  const file = getDataUri(req.file);

  await cloudinary.v2.uploader.destroy(user.avatar.public_id);

  const myCloud = await cloudinary.v2.uploader.upload(file.content);
  user.avatar = {
    public_id: myCloud.public_id,
    url: myCloud.secure_url,
  };

  await user.save();

  res.status(200).json({
    success: true,
    message: "Avatar Updated Successfully",
  });
});
