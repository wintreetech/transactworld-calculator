import { Schema, model } from "mongoose";

const CardCategorySchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

const CardCategory = model("cardcategory", CardCategorySchema);

export default CardCategory;
