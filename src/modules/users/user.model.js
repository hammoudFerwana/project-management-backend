import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "the name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "the email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    password: {
      type: String,
      required: [true, "the password is required"],
      minlength: [6, "the password must be at least 6 characters long"],
      maxlength: [100, "the password must be less than 100 characters long"],
      select: false,
    },
    avatar: {
      type: String,
      default: "",
    },
    passwordChangedAt: Date,
  },
  { timestamps: true },
);

userSchema.pre("save", async function () {
  if (!this.isModified("password")) {
    return;
  }
  this.password = await bcrypt.hash(this.password, 10);

  if (!this.isNew) {
    this.passwordChangedAt = Date.now() - 1000;
    // -1000 to ensure that the token is issued after the password is changed (JWT is deleted the millsecond)
  }
});

userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.changedPasswordAfter = function (JWTIssuedAt) {
  if (this.passwordChangedAt) {
    const PasswordChangedAtTimeStamp = parseInt(
      this.passwordChangedAt.getTime() / 1000, // convert to seconds and compare with JWTIssuedAt which is in seconds
      10,
    );
    return JWTIssuedAt < PasswordChangedAtTimeStamp;
  }
  return false;
};

export const userModel = mongoose.model("User", userSchema);
