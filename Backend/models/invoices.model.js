import { Schema, model } from "mongoose";

const invoicesSchema = new Schema(
  {
    customername: {
      type: String,
      required: true,
      lowercase: true,
    },
    invoices: [
      {
        type: Schema.Types.ObjectId,
        ref: "invoice",
        required: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const invoiceCollection = model("invoicecollection", invoicesSchema);
export default invoiceCollection;
