import axios from "axios";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import React, { createContext } from "react";
import toast from "react-hot-toast";

const QuoteContext = createContext();

const baseUrl = import.meta.env.VITE_BASE_URL;
const apiUrl = import.meta.env.VITE_API_URL;

export const QuoteProvider = ({ children }) => {
  // Handle pdf generation
  const handlePdfGenerate = async (quotedata) => {
    const { quoteentry, customername, quotename, createdAt } = quotedata;

    if (!quoteentry || quoteentry.length === 0) {
      toast.error("No quote data available to generate PDF.");
      return;
    }

    const date = new Date(createdAt);
    const options = {
      year: "numeric", // e.g., "2025"
      month: "long", // e.g., "April"
      day: "numeric", // e.g., "3"
    };

    const doc = new jsPDF();

    // Add a title
    doc.setFontSize(16);
    doc.text(`Quotes For ${customername} `, 10, 20);

    // Customer Details
    doc.setFontSize(12);
    doc.text(`Customer Name: ${customername}`, 10, 30);
    doc.text(`Quote Name: ${quotename}`, 10, 40);
    doc.text(`Date: ${date.toLocaleDateString(undefined, options)}`, 10, 50);

    // Table headers
    const headers = [
      [
        "Location",
        "Card Type",
        "No Of Transaction",
        "Transactions Volume",
        "Buying Rate",
        "Processing Rate",
        "Saving Monthly",
        "Saving Yearly",
        "Old Total",
        "New Total",
      ],
    ];

    //Table body
    const body = await quoteentry.map((entry) => [
      entry.issuingLocation || "N/A",
      entry.cardType || "N/A",
      entry.transactions || 0,
      entry.transactionVolume || 0,
      entry.buyingRate || 0,
      entry.processingrate || 0,
      entry.savingmonthly || 0,
      entry.savingyearly || 0,
      entry.oldtotal || 0,
      entry.newtotal || 0,
    ]);

    // Add table
    autoTable(doc, {
      startY: 60,
      head: headers,
      body: body,
      theme: "grid",
      styles: {
        fontSize: 10,
        halign: "center",
      },
    });

    // Save PDF
    doc.save(`${quotename.replace(/\b\w/g, (char) => char.toUpperCase())}.pdf`);
  };

  // Save quote data
  const savedQuote = async (formData, invoiceData) => {
    const { customername, quotename } = formData;
    const { invoiceentry } = invoiceData;

    for (const index in invoiceentry) {
      console.log(index);
      const item = invoiceentry[index];

      if (item.proposedrate === "" && !item.proposedrate) {
        toast.error(
          `Entry at index (${parseInt(index) + 1}) has an empty proposed rate.`,
          {
            duration: 6000,
          }
        );
        return;
      }
    }

    const newEntry = invoiceentry.map((entry) => {
      return {
        cardType: entry.cardType,
        issuingLocation: entry.issuingLocation,
        interchangeFees: entry.interchangeFees,
        schemeFees: entry.schemeFees,
        transactions: entry.transactions,
        transactionVolume: entry.transactionVolume,
        buyingRate: entry.buyingRate,
        processingrate: entry.proposedrate,
        oldtotal: entry.oldtotal,
        newtotal: entry.newtotal,
        savingmonthly: entry.savingMO,
        savingyearly: entry.savingYY,
      };
    });

    console.log("formData from context", customername, "quotename", quotename);
    console.log("invoiceData from context", invoiceData);
    console.log("invoice entries from context", invoiceentry);
    console.log("new invoice entries from context", newEntry);
    if (quotename && quotename !== "") {
      console.log("quote name is there");
      try {
        const response = await axios.post(`${baseUrl}${apiUrl}/quote`, {
          customername,
          quotename,
          quoteentry: newEntry,
        });

        console.log("response from the savedQuote: ", response);
        if (response.data.success) {
          const { customername, quotename } = response.data.quote;
          toast.success(
            `Quote ${quotename} created and linked to ${customername} succesfully!`,
            {
              duration: 6000,
            }
          );
          setTimeout(() => {
            handlePdfGenerate(response.data.quote);
            toast.success("Download successfully!");
          }, 3000);
        }
      } catch (error) {
        console.error(error);
        toast.error(error.response.data.message);
      }
    } else {
      toast.error("Please enter a quote name!");
      return;
    }
  };

  return (
    <QuoteContext.Provider value={{ savedQuote }}>
      {children}
    </QuoteContext.Provider>
  );
};

export default QuoteContext;
