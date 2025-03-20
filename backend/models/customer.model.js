import { Schema, model } from "mongoose";

const CustomerSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      unique: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
      unique: true,
    },
    companyname: {
      type: String,
      required: [true, "Company name is required"],
      trim: true,
    },
    companytype: {
      type: String,
      required: [true, "Company type is required"],
      trim: true,
    },
    companyaddress: {
      type: String,
      trim: true,
    },
    companynumber: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Customer = model("customer", CustomerSchema);

export default Customer;
