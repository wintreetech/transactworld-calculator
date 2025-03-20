import { Schema, model } from "mongoose";

const CardTypeSchema = new Schema({
  cardname: {
    type: String,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "CardCategory",
    required: true,
  },
});

const CardType = model("cardtype", CardTypeSchema);

export default CardType;
