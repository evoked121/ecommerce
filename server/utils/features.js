import { createTransport } from "nodemailer";
import DataUriParser from "datauri/parser.js";
import path from "path";

export const getDataUri = (file) => {
  const parser = new DataUriParser();
  const extName = path.extname(file.originalname).toString();
  return parser.format(extName, file.buffer);
};

export const sendToken = (user, res, message, statusCode) => {
  const token = user.generateToken();

  res
    .status(statusCode)
    .cookie("token", token, {
      ...cookieOptions,
      expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
    })
    .json({
      success: true,
      message: message,
      token,
    });
};

//(process.env.NODE_ENV || "").trim() === "development"

export const cookieOptions = {
  secure: false,
  httpOnly: false,
  sameSite: false,
};

/*export const sendEmail = async (subject, to, text) => {
  const transporter = createTransport({})
};*/
