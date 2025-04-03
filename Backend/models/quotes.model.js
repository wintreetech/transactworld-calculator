import { Schema, model } from "mongoose";

const QuotesSchema = Schema({
  customername: {
    type: String,
    required: [true, "Customer Name is Required for Quote"],
    unique: true,
  },
  quotes: [
    {
      type: Schema.Types.ObjectId,
      ref: "quote",
      required: true,
    },
  ],
});

const quoteCollection = model("quotecollection", QuotesSchema);

export default quoteCollection;
