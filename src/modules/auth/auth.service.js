import { asyncWrapper } from "../../shared/utils/asyncWrapper.js";
import { userModel } from "../users/user.model.js";
import appError from "../../shared/errors/appErrors.js";
import jwt from "jsonwebtoken";
import { JWT_EXPIRE, JWT_SECRET } from "../../config/env.js";
import { generateToekn } from "../../shared/utils/genarateToken.js";

export const registar = async function (data) {
  const { name, email, password } = data;

  const user = await userModel.findOne({ email });

  if (user) {
    throw new appError("the email is already exist", 400);
  }

  const newUser = await userModel.create({
    name,
    email,
    password,
  });

  const userObject = newUser.toObject();
  delete userObject.password;
  let token = generateToekn(newUser._id);

  return {
    newUser: userObject,
    token,
  };
};
