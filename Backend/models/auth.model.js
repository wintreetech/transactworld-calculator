import { Schema, model } from "mongoose";

const authSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "User name is required"],
      unique: true,
      trim: true,
      minlength: 2,
      maxlength: 100,
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  { timestamps: true }
);

const Auth = model("user", authSchema);

export default Auth;
