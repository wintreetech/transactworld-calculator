import { Schema, model } from "mongoose";

const CustomerSchema = new Schema(
  {
    businessAddress: {
      type: String,
      required: [true, "BusinessAddress is required"],
      trim: true,
    },
    businessIndustry: {
      type: String,
      required: [true, "BusinessIndustry is required"],
      trim: true,
    },
    businessName: {
      type: String,
      required: [true, "BusinessName is required"],
      trim: true,
    },
    businessType: {
      type: String,
      required: [true, "BusinessType is required"],
      trim: true,
    },
    desiredServices: {
      type: [String],
      required: [true, "DesiredServices is required"],
      trim: true,
    },
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
    merchantCategoryCode: {
      type: String,
      required: [true, "Merchant Category Code is required"],
    },
    merchantCategoryType: {
      type: String,
      required: [true, "Merchant Category Type is required"],
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
