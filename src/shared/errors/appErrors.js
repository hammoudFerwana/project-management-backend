class appErrors extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = String(statusCode).startsWith("4") ? "fail" : "error";
    this.isOpirational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

export default appErrors;
