import { Schema, model } from "mongoose";

const invoiceSchema = new Schema(
  {
    customername: {
      type: String,
      required: true,
    },
    invoicename: {
      type: String,
      required: true,
      lowercase: true,
      default: "demo",
      unique: true,
    },
    invoiceentry: [
      {
        cardtype: {
          type: String,
          required: true,
        },
        issuinglocation: {
          type: String,
          required: true,
        },
        ixfee: {
          type: Number,
          required: true,
        },
        scfee: {
          type: Number,
          required: true,
        },
        transactions: {
          type: Number,
          required: true,
        },
        volume: {
          type: Number,
          required: true,
        },
        buyingrate: {
          type: Number,
          required: true,
        },
        totalprice: {
          type: Number,
          required: true,
          default: 0,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

invoiceSchema.pre("save", function (next) {
  this.invoiceentry.forEach((entry) => {
    entry.totalprice = entry.transactions * entry.volume * entry.buyingrate;
  });
  next();
});

const Invoice = model("invoice", invoiceSchema);
export default Invoice;
