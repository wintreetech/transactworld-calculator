import { Schema, model } from "mongoose";

const quoteSchema = new Schema(
  {
    customername: {
      type: String,
      required: [true, "customer name is required"],
    },
    quotename: {
      type: String,
      required: [true, "quote name is required"],
    },
    quoteentry: [
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
          type: String,
          required: true,
        },
        schemeFees: {
          type: String,
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
