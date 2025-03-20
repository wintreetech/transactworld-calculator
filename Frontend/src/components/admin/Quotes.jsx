import React, { useState } from "react";
import QuotesDetails from "./QuotesDetails";

import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
const doc = new jsPDF();

function Quotes() {
  const [formData, setFormData] = useState({
    customername: "",
    invoicename: "",
  });

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

  return (
    <>
      <div className="mb-4">
        <h1 className="text-2xl">Quote</h1>
      </div>
      <div className="mb-4 gap-4 flex flex-col">
        <div className="flex justify-between">
          <div className="flex gap-4">
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
            <select
              value={formData.invoicename}
              onChange={handleChange}
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
            <button className="btn" onClick={handlePdfGenerate}>
              Generate PDF
            </button>
          </div>
        </div>
        <QuotesDetails />
      </div>
    </>
  );
}

export default Quotes;
