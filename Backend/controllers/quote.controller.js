import Quote from "../models/quote.model.js";
import quoteCollection from "../models/quotes.model.js";

// Create Quote
const createQuote = async (req, res) => {
  try {
    const { customername, quotename, quoteentry } = req.body;

    if (!customername || !quotename || !quoteentry) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const newQuote = await Quote.create({
      customername,
      quotename,
      quoteentry: quoteentry,
    });

    let quotesCollectionCheck = await quoteCollection.findOne({ customername });

    if (!quotesCollectionCheck) {
      quotesCollectionCheck = await quoteCollection.create({
        customername,
        quotes: [newQuote._id],
      });
    } else {
      quotesCollectionCheck.quotes.push(newQuote._id);
      await quotesCollectionCheck.save();
    }

    res.status(201).json({
      success: true,
      message: "Quotes created and linked to customer successfully",
      quote: newQuote,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get all quotes
const getQuotes = async (req, res) => {
  try {
    const quoteCollection = await Quote.find().sort({ createdAt: -1 });

    if (!quoteCollection) {
      return res.status(404).json({
        success: false,
        message: "No quotes found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Quotes fetched Successfully",
      length: Quote.length,
      quoteCollection,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// get quote by quotename & customername
const getQuoteById = async (req, res) => {
  try {
    const { quotename, customername } = req.body;

    let customerhavequotes = await quoteCollection
      .findOne({ customername })
      .populate("quotes");

    if (!customerhavequotes) {
      return res.status(404).json({
        success: false,
        message: "Customer not found",
      });
    }

    const quoteData = customerhavequotes.quotes.find(
      (quote) => quote.quotename === quotename
    );

    res.status(200).json({
      success: true,
      message: `Quotes found of ${customername} with this ${quotename} `,
      quote: quoteData,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// update quote by quotename and entryid (spcific entry)
const updateQuoteEntry = async (req, res) => {
  try {
    const { quotename, entryid, updatedfields } = req.body;

    if (!quotename || !entryid || !updatedfields) {
      return res.status(400).json({
        success: false,
        message: `all field required to update the specifc entry of ${quotename} `,
      });
    }

    const updatedquote = await Quote.findOneAndUpdate(
      {
        quotename,
        "quoteentry._id": entryid,
      },
      { $set: { "quoteentry.$": updatedfields } },
      { new: true, runValidators: true }
    );

    if (!updatedquote) {
      return res.status(404).json({
        success: false,
        message: "quote or entry not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "quote entry updated successfully.",
      updatedquote,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// delete quote by quotename
const deleteQuote = async (req, res) => {
  try {
    const { quotename } = req.body;

    if (!quotename) {
      return res.status(400).json({
        success: false,
        message: "please entry quotename for delete",
      });
    }
    const deletedQuotes = await Quote.findOneAndDelete({ quotename });

    if (!deletedQuotes) {
      return res.status(404).json({
        success: false,
        message: "Quotes not found",
      });
    }

    await quoteCollection.findOneAndUpdate(
      {
        customername: deletedQuotes.customername,
      },
      {
        $pull: { quotes: deletedQuotes._id },
      },
      { new: true }
    );
  } catch (error) {}
};

export { createQuote, getQuotes, getQuoteById, updateQuoteEntry, deleteQuote };
