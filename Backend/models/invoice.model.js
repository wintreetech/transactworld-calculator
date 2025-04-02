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
        cardType: {
          type: String,
          required: true,
        },
        issuingLocation: {
          type: String,
          required: true,
        },
        interchangeFees: {
          type: Number,
          required: true,
        },
        schemeFees: {
          type: Number,
          required: true,
        },
        transactions: {
          type: Number,
          required: true,
        },
        transactionVolume: {
          type: Number,
          required: true,
        },
        buyingRate: {
          type: Number,
          required: true,
        },
        total: {
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
