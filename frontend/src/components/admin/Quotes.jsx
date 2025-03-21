import React, { useState } from "react";
import toast from "react-hot-toast";
import QuotesDetails from "./QuotesDetails";

import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
const doc = new jsPDF();

function Quotes() {
  const [formData, setFormData] = useState({
    customername: "",
    quotename: "",
  });

  const [invoiceName, setInvoiceName] = useState("");
  const [invoiceData, setInvoiceData] = useState([]);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePdfGenerate = () => {
    // Add a logo (Ensure the logo is in base64 format or a public URL)
    //const logoUrl = "https://example.com/logo.png"; // Replace with your logo URL

    //doc.addImage(logoUrl, "PNG", 10, 10, 50, 20); // (X, Y, Width, Height)

    // Invoice details (below the logo)
    doc.setFontSize(14);
    doc.text("Transactoworld Calculator", 10, 40);
    doc.setFontSize(12);
    doc.text("123 Business Street", 10, 50);
    doc.text("City, Country, ZIP", 10, 58);
    doc.text("Email: info@example.com", 10, 66);
    doc.text("Phone: +1234567890", 10, 74);

    // Invoice number and date (right side)
    doc.setFontSize(12);
    doc.text("Invoice #: 1001", 140, 40);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 140, 50);

    // Table with data
    autoTable(doc, {
      startY: 80, // Positioning table below the invoice details
      head: [["ID", "Name", "Age"]],
      body: [
        [1, "Alice", 25],
        [2, "Bob", 30],
        [3, "Charlie", 28],
      ],
      theme: "grid",
      styles: {
        halign: "center",
      },
    });

    // Save the PDF
    doc.save("invoice.pdf");
  };

  const saveInvoice = () => {
    toast.success("save quotes succesfully");
    handlePdfGenerate();
    console.log("save quote", {
      customername: formData.customername,
      invoiceName,
      quotename: formData.quotename,
    });
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
              <option default>Select your customer</option>
              <option value="Shubham Makwana">Shubham Makwana</option>
              <option value="Alice Johnson">Alice Johnson</option>
              <option value="Bob Smith">Bob Smith</option>
              <option value="Carol White">Carol White</option>
            </select>

            {/* Select Invoice to fetch data */}
            <select
              value={invoiceName}
              onChange={(e) => setInvoiceName(e.target.value)}
              name="invoicename"
              className="select w-full"
            >
              <option default>Select your invoices</option>
              <option value="Shubham Makwana">Shubham Makwana</option>
              <option value="Alice Johnson">Alice Johnson</option>
              <option value="Bob Smith">Bob Smith</option>
              <option value="Carol White">Carol White</option>
            </select>
          </div>
          <div>
            {/* <button className="btn" onClick={handlePdfGenerate}>
              Generate PDF
            </button> */}
            <button
              className="btn"
              onClick={() => document.getElementById("my_modal_1").showModal()}
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
                    <button onClick={saveInvoice} type="submit" className="btn">
                      Save
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
        <QuotesDetails
          invoiceData={invoiceData}
          invoicename={invoiceName}
          customername={formData.customername}
        />
      </div>
    </>
  );
}

export default Quotes;
