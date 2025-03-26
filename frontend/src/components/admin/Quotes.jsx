import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import QuotesDetails from "./QuotesDetails";
import axios from "axios";

// For PDF
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

function Quotes() {
  const initialInvoicesData = {
    kiran: [
      {
        id: 1,
        cardType: "Shubham",
        issuingLocation: "USA",
        IC: 0.5,
        SC: 0.3,
        transactions: 100,
        volume: 5000,
        currentRate: 0.59, // current rate (CR(%))
        proposedRate: "", // proposed rate (PR(%)) as string for controlled input
      },
      {
        id: 2,
        cardType: "MasterCard",
        issuingLocation: "UK",
        IC: 0.4,
        SC: 0.25,
        transactions: 200,
        volume: 10000,
        currentRate: 0.92,
        proposedRate: "",
      },
      {
        id: 3,
        cardType: "MasterCard",
        issuingLocation: "UK",
        IC: 0.4,
        SC: 0.25,
        transactions: 200,
        volume: 10000,
        currentRate: 0.92,
        proposedRate: "",
      },
      {
        id: 5,
        cardType: "MasterCard",
        issuingLocation: "UK",
        IC: 0.4,
        SC: 0.25,
        transactions: 200,
        volume: 10000,
        currentRate: 0.92,
        proposedRate: "",
      },
      {
        id: 6,
        cardType: "MasterCard",
        issuingLocation: "UK",
        IC: 0.4,
        SC: 0.25,
        transactions: 200,
        volume: 10000,
        currentRate: 0.92,
        proposedRate: "",
      },
    ],
    invoice2: [
      {
        id: 1,
        cardType: "Makwana",
        issuingLocation: "USA",
        IC: 0.5,
        SC: 0.3,
        transactions: 100,
        volume: 5000,
        currentRate: 0.59, // current rate (CR(%))
        proposedRate: "", // proposed rate (PR(%)) as string for controlled input
      },
      {
        id: 2,
        cardType: "MasterCard",
        issuingLocation: "UK",
        IC: 0.4,
        SC: 0.25,
        transactions: 200,
        volume: 10000,
        currentRate: 0.92,
        proposedRate: "",
      },
      {
        id: 3,
        cardType: "MasterCard",
        issuingLocation: "UK",
        IC: 0.4,
        SC: 0.25,
        transactions: 200,
        volume: 10000,
        currentRate: 0.92,
        proposedRate: "",
      },
      {
        id: 5,
        cardType: "MasterCard",
        issuingLocation: "UK",
        IC: 0.4,
        SC: 0.25,
        transactions: 200,
        volume: 10000,
        currentRate: 0.92,
        proposedRate: "",
      },
      {
        id: 6,
        cardType: "MasterCard",
        issuingLocation: "UK",
        IC: 0.4,
        SC: 0.25,
        transactions: 200,
        volume: 10000,
        currentRate: 0.92,
        proposedRate: "",
      },
    ],
    invoice3: [
      {
        id: 1,
        cardType: "Visa",
        issuingLocation: "USA",
        IC: 0.5,
        SC: 0.3,
        transactions: 100,
        volume: 5000,
        currentRate: 0.59, // current rate (CR(%))
        proposedRate: "", // proposed rate (PR(%)) as string for controlled input
      },
      {
        id: 2,
        cardType: "MasterCard",
        issuingLocation: "UK",
        IC: 0.4,
        SC: 0.25,
        transactions: 200,
        volume: 10000,
        currentRate: 0.92,
        proposedRate: "",
      },
      {
        id: 3,
        cardType: "MasterCard",
        issuingLocation: "UK",
        IC: 0.4,
        SC: 0.25,
        transactions: 200,
        volume: 10000,
        currentRate: 0.92,
        proposedRate: "",
      },
      {
        id: 5,
        cardType: "MasterCard",
        issuingLocation: "UK",
        IC: 0.4,
        SC: 0.25,
        transactions: 200,
        volume: 10000,
        currentRate: 0.92,
        proposedRate: "",
      },
      {
        id: 6,
        cardType: "MasterCard",
        issuingLocation: "UK",
        IC: 0.4,
        SC: 0.25,
        transactions: 200,
        volume: 10000,
        currentRate: 0.92,
        proposedRate: "",
      },
    ],
    invoice4: [
      {
        id: 1,
        cardType: "Visa",
        issuingLocation: "USA",
        IC: 0.5,
        SC: 0.3,
        transactions: 100,
        volume: 5000,
        currentRate: 0.59, // current rate (CR(%))
        proposedRate: "", // proposed rate (PR(%)) as string for controlled input
      },
      {
        id: 2,
        cardType: "MasterCard",
        issuingLocation: "UK",
        IC: 0.4,
        SC: 0.25,
        transactions: 200,
        volume: 10000,
        currentRate: 0.92,
        proposedRate: "",
      },
      {
        id: 3,
        cardType: "MasterCard",
        issuingLocation: "UK",
        IC: 0.4,
        SC: 0.25,
        transactions: 200,
        volume: 10000,
        currentRate: 0.92,
        proposedRate: "",
      },
      {
        id: 5,
        cardType: "MasterCard",
        issuingLocation: "UK",
        IC: 0.4,
        SC: 0.25,
        transactions: 200,
        volume: 10000,
        currentRate: 0.92,
        proposedRate: "",
      },
      {
        id: 6,
        cardType: "MasterCard",
        issuingLocation: "UK",
        IC: 0.4,
        SC: 0.25,
        transactions: 200,
        volume: 10000,
        currentRate: 0.92,
        proposedRate: "",
      },
    ],
    invoice5: [
      {
        id: 1,
        cardType: "Visa",
        issuingLocation: "USA",
        IC: 0.5,
        SC: 0.3,
        transactions: 100,
        volume: 5000,
        currentRate: 0.59, // current rate (CR(%))
        proposedRate: "", // proposed rate (PR(%)) as string for controlled input
      },
      {
        id: 2,
        cardType: "MasterCard",
        issuingLocation: "UK",
        IC: 0.4,
        SC: 0.25,
        transactions: 200,
        volume: 10000,
        currentRate: 0.92,
        proposedRate: "",
      },
      {
        id: 3,
        cardType: "MasterCard",
        issuingLocation: "UK",
        IC: 0.4,
        SC: 0.25,
        transactions: 200,
        volume: 10000,
        currentRate: 0.92,
        proposedRate: "",
      },
      {
        id: 5,
        cardType: "MasterCard",
        issuingLocation: "UK",
        IC: 0.4,
        SC: 0.25,
        transactions: 200,
        volume: 10000,
        currentRate: 0.92,
        proposedRate: "",
      },
      {
        id: 6,
        cardType: "MasterCard",
        issuingLocation: "UK",
        IC: 0.4,
        SC: 0.25,
        transactions: 200,
        volume: 10000,
        currentRate: 0.92,
        proposedRate: "",
      },
    ],
    invoice6: [
      {
        id: 1,
        cardType: "Visa",
        issuingLocation: "USA",
        IC: 0.5,
        SC: 0.3,
        transactions: 100,
        volume: 5000,
        currentRate: 0.59, // current rate (CR(%))
        proposedRate: "", // proposed rate (PR(%)) as string for controlled input
      },
      {
        id: 2,
        cardType: "MasterCard",
        issuingLocation: "UK",
        IC: 0.4,
        SC: 0.25,
        transactions: 200,
        volume: 10000,
        currentRate: 0.92,
        proposedRate: "",
      },
      {
        id: 3,
        cardType: "MasterCard",
        issuingLocation: "UK",
        IC: 0.4,
        SC: 0.25,
        transactions: 200,
        volume: 10000,
        currentRate: 0.92,
        proposedRate: "",
      },
      {
        id: 5,
        cardType: "MasterCard",
        issuingLocation: "UK",
        IC: 0.4,
        SC: 0.25,
        transactions: 200,
        volume: 10000,
        currentRate: 0.92,
        proposedRate: "",
      },
      {
        id: 6,
        cardType: "MasterCard",
        issuingLocation: "UK",
        IC: 0.4,
        SC: 0.25,
        transactions: 200,
        volume: 10000,
        currentRate: 0.92,
        proposedRate: "",
      },
    ],
  };

  const [formData, setFormData] = useState({
    customername: "",
    quotename: "",
  });

  const [selectedInvoice, setSelectedInvoice] = useState("");
  const [selectedInvoiceData, setSelectedInvoiceData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [invoiceData, setInvoiceData] = useState("");
  const [quoteData, setQuoteData] = useState("");

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleInvoice = (invoice) => {
    setInvoiceData(invoice);
  };

  // Fetch Invoice Based on the Customer
  const fetchInvoiceData = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(
        "http://localhost:5955/api/v1/invoice/single",
        {
          params: {
            customername: formData.customername,
            invoicename: selectedInvoice,
          },
        }
      );

      if (response.data.success) {
        toast.success(`Invoice Fetched Sucessfully for ${selectedInvoice} `);
        setSelectedInvoiceData({
          ...response.data.invoice,
          invoiceentry: response.data.invoice.invoiceentry.map((entry) => ({
            ...entry,
            proposedrate: "",
            oldtotal: 0,
            newtotal: 0,
            savingMO: 0,
            savingYY: 0,
          })),
        });
      } else {
        setError("Invoice not found.");
        setSelectedInvoiceData("");
      }
    } catch (error) {
      setError("Failed to fetch invoice. Try again.");
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (selectedInvoice) {
      fetchInvoiceData();
    }
  }, [selectedInvoice]);

  const saveQuote = async () => {
    try {
      const response = await axios.post("http://localhost:5955/api/v1/quote/", {
        customername: formData.customername,
        quotename: formData.quotename,
        quoteentry: invoiceData.invoiceentry.map((entry) => ({
          cardtype: entry.cardtype,
          issuinglocation: entry.issuinglocation,
          ixfee: entry.ixfee,
          scfee: entry.scfee,
          transactions: entry.transactions,
          volume: entry.volume,
          buyingrate: entry.buyingrate,
          processingrate: entry.proposedrate,
          oldtotal: entry.oldtotal,
          newtotal: entry.newtotal,
          savingmonthly: entry.savingMO,
          savingyearly: entry.savingYY,
        })),
      });

      if (response.data.success) {
        const { quoteentry } = response.data.quote;
        setQuoteData(quoteentry);
        toast.success("Quote saved successfully!");
      } else {
        toast.error("Failed to save quote.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error saving quote.");
    }
  };

  useEffect(() => {
    console.log("quoteData", quoteData);
  }, [formData.quotename]);

  const handlePdfGenerate = () => {
    if (!quoteData || quoteData.length === 0) {
      toast.error("No quote data available to generate PDF.");
      return;
    }
    const doc = new jsPDF();

    // Add a title
    doc.setFontSize(16);
    doc.text(`Quotes For the ${formData.customername} `, 10, 20);

    // Customer Details
    doc.setFontSize(12);
    doc.text(`Customer Name: ${formData.customername}`, 10, 30);
    doc.text(`Quote Name: ${formData.quotename}`, 10, 40);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 10, 50);

    // Table headers
    const headers = [
      [
        "Card Type",
        "No Of Transaction",
        "Total value of transactions",
        "Buying Rate",
        "Processing Rate",
      ],
    ];

    //Table body
    const body = quoteData.map((entry) => [
      entry.cardtype || "N/A",
      entry.transactions || 0,
      entry.volume || 0,
      entry.buyingrate || 0,
      entry.processingrate || 0,
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
    doc.save(`${formData.quotename}.pdf`);
  };

  const saveInvoice = () => {
    if (!formData.quotename.trim()) {
      toast.error("Please enter a quote name!");
      return;
    }

    saveQuote();
    setTimeout(() => {
      handlePdfGenerate();
    }, 2000);
    toast.success("Saved successfully!");
  };

  return (
    <>
      <div className="mb-4 gap-4 flex flex-col">
        <div className="flex justify-between">
          <div className="flex gap-4">
            {/* select customer number */}
            <select
              value={formData.customername}
              onChange={handleChange}
              name="customername"
              className="select w-full"
            >
              <option value="">-- Select Customer --</option>
              <option value="kiran devgadkar">kiran devgadkar</option>
              <option value="Alice Johnson">Alice Johnson</option>
              <option value="Bob Smith">Bob Smith</option>
              <option value="Carol White">Carol White</option>
            </select>

            {/* Select Invoice to fetch data */}
            {formData.customername && (
              <select
                value={selectedInvoice}
                onChange={(e) => setSelectedInvoice(e.target.value)}
                name="invoicename"
                className="select w-full"
              >
                <option value="">-- Select Invoice --</option>
                {Object.keys(initialInvoicesData).map((invoiceName) => (
                  <option key={invoiceName} value={invoiceName}>
                    {invoiceName}
                  </option>
                ))}
              </select>
            )}
          </div>
          <div>
            {selectedInvoice && (
              <>
                <button
                  className="btn"
                  onClick={() =>
                    document.getElementById("my_modal_1").showModal()
                  }
                >
                  Save & Download
                </button>
                <dialog
                  id="my_modal_1"
                  className="modal modal-bottom sm:modal-middle"
                >
                  <div className="modal-box">
                    <label className="input w-full">
                      <svg
                        className="h-[1em] opacity-50"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <g
                          strokeLinejoin="round"
                          strokeLinecap="round"
                          strokeWidth="2.5"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                          <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                        </g>
                      </svg>
                      <input
                        value={formData.quotename}
                        onChange={handleChange}
                        type="text"
                        name="quotename"
                        className="grow"
                        placeholder="example"
                      />
                    </label>
                    <div className="modal-action">
                      <form method="dialog">
                        <button
                          onClick={saveInvoice}
                          type="submit"
                          className="btn"
                        >
                          Save
                        </button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </>
            )}
          </div>
        </div>
        <QuotesDetails
          selectedInvoiceData={selectedInvoiceData}
          handleInvoice={handleInvoice}
          quotename={formData.quotename}
        />
      </div>
    </>
  );
}

export default Quotes;
