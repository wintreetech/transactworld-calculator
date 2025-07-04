import { Router } from "express";
import {
  createInvoice,
  deleteInvoice,
  getInvoiceByCustomerNameandInvoiceName,
  getInvoices,
  getInvoicesByCustomerName,
  updateInvoiceEntry,
} from "../../controllers/invoice.controller.js";

const router = Router();

router.post("/", createInvoice);
router.get("/all", getInvoices); // 
router.get("/customerinvoices", getInvoicesByCustomerName); // invoice names 
router.get("/single", getInvoiceByCustomerNameandInvoiceName); // single invoice data
router.put("/update", updateInvoiceEntry);
router.delete("/delete", deleteInvoice);

export default router;
