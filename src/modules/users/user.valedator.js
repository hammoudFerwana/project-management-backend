import Joi from "joi";

const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

export const forgotPasswordSchema = Joi.object({
  email: Joi.string().email().required(),
});

export const updateUserPasswordSchma = Joi.object({
  password: Joi.string().regex(passwordPattern).required().messages({
    "string.pattern.base":
      "Password must contain at least one uppercase letter, one lowercase letter, and one number",
    "any.required": "Password is a required field",
  }),
  newPassword: Joi.string().regex(passwordPattern).required().messages({
    "string.pattern.base":
      "Password must contain at least one uppercase letter, one lowercase letter, and one number",
    "any.required": "Password is a required field",
  }),
});

export const updateUserDataSchema = Joi.object({
  name: Joi.string().min(3).max(30),
  email: Joi.string().email(),
  avatar: Joi.string().uri(),
});
