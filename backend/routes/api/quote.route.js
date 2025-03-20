import { Router } from "express";
import {
  createQuote,
  getQuotes,
  getQuoteById,
  updateQuoteEntry,
  deleteQuote,
} from "../../controllers/quote.controller.js";

const router = Router();

router.post("/", createQuote);
router.get("/all", getQuotes);
router.get("/single", getQuoteById);
router.put("/update", updateQuoteEntry);
router.delete("/delete", deleteQuote);

export default router;
