import { Router } from "express";
import {
  createInvoice,
  deleteInvoice,
  getInvoiceById,
  getInvoices,
  updateInvoiceEntry,
} from "../../controllers/invoice.controller.js";

const router = Router();

router.post("/", createInvoice);
router.get("/all", getInvoices);
router.get("/single", getInvoiceById);
router.put("/update", updateInvoiceEntry);
router.delete("/delete", deleteInvoice);

export default router;
