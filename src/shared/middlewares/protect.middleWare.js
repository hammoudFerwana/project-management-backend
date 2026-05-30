import asyncWrapper from "../utils/asyncWrapper.js";
import appError from "../errors/appErrors.js";
import { JWT_SECRET } from "../../config/env.js";
import { userModle } from "../../modules/users/user.model.js";
import jwt from "jsonwebtoken";
let token;
export const protect = asyncWrapper(async (req, res, next) => {
  // 1- check if the token exist
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token) {
    return next(
      new appError("You are not logged in! Please log in to get access.", 401),
    );
  }
  // 2- verify the token
  const decode = jwt.verify(token, JWT_SECRET);

  // 3- check if the user still exist (the token is valid but the user is deleted)
  const user = await userModle.findById(decode.id);

  if (!user) {
    return next(
      new appError(
        "The user belonging to this token does no longer exist.",
        401,
      ),
    );
  }

  // 4- check if the user changed password after the token was issued
  if (user.changedPasswordAfter(decode.iat)) {
    return next(
      new appError("User recently changed password! Please log in again.", 401),
    );
  }

  // 5- grant access to protected route
  req.user = decode;

  // 6- call the next middleware
  next();
});
