import { Schema, model } from "mongoose";

const IssuingLocationSchema = new Schema(
  {
    locationname: {
      type: text,
      unique: true,
      required: [true, "Location name is requuired"],
    },
  },
  {
    timestamps: true,
  }
);

const issuinglocation = model("issuinglocation", IssuingLocationSchema);

export default issuinglocation;
