import { Schema, Model } from "express";

const quoteSchema = new Schema(
  {
    customername: {
      type: String,
      required: [true, "customer name is required"],
      unique: true,
    },
    quotename: {
      type: String,
      required: [true, "quote name is required"],
    },
    quoteentry: [
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
          type: String,
          required: true,
        },
        scfee: {
          type: String,
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
        processingrate: {
          type: Number,
          required: true,
        },
        oldtotal: {
          type: Number,
          require: true,
        },
        newtotal: {
          type: Number,
          required: true,
        },
        savingmonthly: {
          type: Number,
          required: true,
        },
        savingyearly: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

const Quote = model("quote", quoteSchema);
export default Quote;
