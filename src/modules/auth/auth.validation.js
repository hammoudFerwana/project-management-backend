import Joi from "joi";

const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

const registerSchema = Joi.object({
  name: Joi.string().trim().min(3).max(30).required().messages({
    "string.base": "Name should be a type of 'text'",
    "any.required": "Name is a required field",
  }),

  email: Joi.string().email().lowercase().trim().required().messages({
    "string.email": "Email must be a valid email address",
    "any.required": "Email is a required field",
  }),

  password: Joi.string().regex(passwordPattern).required().messages({
    "string.pattern.base":
      "Password must contain at least one uppercase letter, one lowercase letter, and one number",
    "any.required": "Password is a required field",
  }),
});

const loginSchema = Joi.object({
  email: Joi.string().email().lowercase().trim().required().messages({
    "string.email": "Email must be a valid email address",
    "any.required": "Email is required for login",
  }),

  password: Joi.string().required().messages({
    "any.required": "Password is required for login",
  }),
});

export { registerSchema, loginSchema };
