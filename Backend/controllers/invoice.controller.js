import Invoice from "../models/invoice.model.js";
import invoiceCollection from "../models/invoices.model.js";
import mongoose from "mongoose";

// Create Invoice
const createInvoice = async (req, res) => {
  try {
    const { customername, invoicename, entries } = req.body;

    if (
      Object.values(req.body).some((val) => val === undefined || val === "")
    ) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const newInvoice = await Invoice.create({
      customername,
      invoicename,
      invoiceentry: entries,
    });

    let invoiceCollectionCheck = await invoiceCollection.findOne({
      customername,
    });

    if (!invoiceCollectionCheck) {
      invoiceCollectionCheck = await invoiceCollection.create({
        customername,
        invoices: [newInvoice._id],
      });
    } else {
      // invoiceCollection.invoices.push(newInvoice._id);
      invoiceCollectionCheck.invoices.push(newInvoice._id);

      await invoiceCollectionCheck.save();
    }

    res.status(201).json({
      success: true,
      message: "Invoice created and linked to customer successfully",
      invoice: newInvoice,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get all Invoices
const getInvoices = async (req, res) => {
  try {
    const invoicecollection = await Invoice.find().sort({ createdAt: -1 });

    if (!invoicecollection) {
      return res.status(404).json({
        success: false,
        message: "No invoices found for this customer",
      });
    }

    res.status(200).json({
      success: true,
      message: "invoices fetched successfully",
      length: invoicecollection.length,
      invoicecollection,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// Get all getInvoicesByCustomerName
const getInvoicesByCustomerName = async (req, res) => {
  const { customername } = req.query;

  try {
    const invoicecollection = await invoiceCollection
      .findOne({ customername })
      .populate("invoices");

    if (!invoicecollection) {
      return res.status(404).json({
        success: false,
        message: `No invoices found for ${customername} `,
      });
    }

    const invoicenames = invoicecollection.invoices.map(
      (invoice) => invoice.invoicename
    );

    res.status(200).json({
      success: true,
      message: "invoices fetched successfully",
      length: invoicecollection.length,
      invoicenames,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// Get single Invoice For Customername and Invoicename
const getInvoiceByCustomerNameandInvoiceName = async (req, res) => {
  try {
    const { invoicename, customername } = req.query;
    const customerhaveinvoices = await invoiceCollection
      .findOne({
        customername,
      })
      .populate("invoices");

    if (!customerhaveinvoices) {
      return res.status(404).json({
        success: false,
        message: "Customer not found",
      });
    }

    const invoiceData = customerhaveinvoices.invoices.find(
      (inv) => inv.invoicename === invoicename
    );

    res.status(200).json({
      success: true,
      message: "Invoice fetched successfully",
      invoice: invoiceData,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Get single Invoice For Customername and Invoicename
// const getInvoiceById = async (req, res) => {
//   const { invoicename, customername } = req.body;

//   try {
//     const customerhaveinvoices = await invoiceCollection
//       .findOne({
//         customername,
//       })
//       .populate("invoices");

//     if (!customerhaveinvoices) {
//       return res.status(404).json({
//         success: false,
//         message: "Customer not found",
//       });
//     }

//     const invoiceData = customerhaveinvoices.invoices.find(
//       (inv) => inv.invoicename === invoicename
//     );

//     res.status(200).json({
//       success: true,
//       message: "Invoice fetched successfully",
//       invoice: invoiceData,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// Update Single Invoice Entry By EntryID By Searching the InvoiceName
const updateInvoiceEntry = async (req, res) => {
  try {
    const { invoicename, entryId, updatedFields } = req.body;

    if (!invoicename || !entryId || !updatedFields)
      return res.status(400).json({
        success: false,
        message: "invoicename, entryId, and updatedFields are required.",
      });

    const updatedInvoice = await Invoice.findOneAndUpdate(
      { invoicename, "invoiceentry._id": entryId },
      { $set: { "invoiceentry.$": updatedFields } },
      { new: true, runValidators: true }
    );

    if (!updatedInvoice) {
      return res.status(404).json({
        success: false,
        message: "Invoice or entry not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Invoice entry updated successfully.",
      updatedInvoice,
    });
  } catch (error) {
    console.error("Error updating invoice entry:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};

// Delete Invoice By ID
const deleteInvoice = async (req, res) => {
  try {
    const { invoiceid } = req.body;

    if (!invoiceid) {
      return res.status(400).json({
        success: false,
        message: "Invoice ID is required",
      });
    }

    if (!mongoose.Types.ObjectId.isValid(invoiceid)) {
      return res.status(400).json({
        success: false,
        message: "Invalid invoice ID",
      });
    }
    const deletedInvoice = await Invoice.findByIdAndDelete(invoiceid);

    if (!deletedInvoice) {
      return res.status(404).json({
        success: false,
        message: "Invoice not found",
      });
    }

    await invoiceCollection.findOneAndUpdate(
      {
        customername: deletedInvoice.customername,
      },
      {
        $pull: { invoices: invoiceid },
      },
      { new: true }
    );

    res.json({
      success: true,
      message: "invoice deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export {
  createInvoice,
  getInvoices,
  // getInvoiceById,
  getInvoicesByCustomerName,
  getInvoiceByCustomerNameandInvoiceName,
  updateInvoiceEntry,
  deleteInvoice,
};
