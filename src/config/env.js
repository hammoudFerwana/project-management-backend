import { config } from "dotenv";
import Joi from "joi";
config({
  path: ".env",
});

const envSchema = Joi.object({
  PORT: Joi.number().default(3000).required().messages({
    "any.required": "PORT is required",
    "number.base": "PORT must be a number",
  }),
  NODE_ENV: Joi.string()
    .valid("development", "production", "test")
    .default("development")
    .messages({
      "string.base": "NODE_ENV must be a string",
      "any.only":
        "NODE_ENV must be either 'development', 'production', or 'test'",
    }),
  DB_CONNECTION: Joi.string().required().messages({
    "any.required": "DB_CONNECTION is required",
    "string.base": "DB_CONNECTION must be a string",
  }),
  JWT_SECRET: Joi.string().required().messages({
    "any.required": "JWT_SECRET is required",
    "string.base": "JWT_SECRET must be a string",
  }),
  JWT_EXPIRE: Joi.string().required().messages({
    "any.required": "JWT_EXPIRE is required",
    "string .base": "JWT_EXPIRE must be a string",
  }),
})
  .unknown()
  .required();

const { error, value } = envSchema.validate(process.env, {
  abortEarly: false,
});

if (error) {
  console.error("\n❌ Configuration validation error:");
  console.error("====================================================");
  error.details.forEach((detail) => {
    console.error(` 🔴 [Config Error]: ${detail.message}`);
  });
  console.error("====================================================\n");
  process.exit(1); // its for stop the server
}
export const { PORT, DB_CONNECTION, NODE_ENV, JWT_SECRET, JWT_EXPIRE } = value;
