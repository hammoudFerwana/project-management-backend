import appErrors from "../errors/appErrors.js";

export const validateRequest = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body, {
      abortEarly: false, // for all the errors to be collected
      stripUnknown: true, // to remove any unknown fields from the request body (role : admin)
    });

    if (error) {
      const errorMessages = error.details.map((detail) => detail.message);
      return next(new appErrors(errorMessages.join(", ")), 400);
    }
    req.body = value;
    next();
  };
};
