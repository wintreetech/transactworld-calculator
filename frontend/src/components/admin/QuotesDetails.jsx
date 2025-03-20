import React, { useState } from "react";

// Sample invoice data
const initialInvoices = [
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
];

function QuotesDetails() {
  const [quotes, setQuotes] = useState([]);
  const [invoiceEntryies, setInvoiceEntryies] = useState([]);
  const [invoices, setInvoices] = useState(initialInvoices);
  const [selectedInvoice, setSelectInvoice] = useState("");

  // Update invoice with the new proposed rate and recalc computed fees
  const handleProposedRateChange = (id, value) => {
    setInvoices((prevInvoices) =>
      prevInvoices.map((invoice) => {
        if (invoice.id === id) {
          // Try to convert the entered value to a number
          const proposedRateNum = parseFloat(value);
          const oldTotal = invoice.volume * invoice.currentRate;
          const newTotal = !isNaN(proposedRateNum)
            ? invoice.volume * proposedRateNum
            : 0;
          const savingMO = !isNaN(proposedRateNum) ? oldTotal - newTotal : 0;
          const savingYY = savingMO * 12;

          return {
            ...invoice,
            proposedRate: value, // store raw input (could be empty or non-numeric)
            oldTotal,
            newTotal,
            savingMO,
            savingYY,
          };
        }
        return invoice;
      })
    );
  };

  return (
    <div className="overflow-x-hidden mb-4 rounded-box border border-base-content/5 bg-base-100 overflow-y-auto h-[calc(100vh-150px)]">
      <table className="table table-md table-pin-rows table-pin-cols">
        {/* Table Head */}
        <thead>
          <tr>
            <th></th>
            <th className="text-black">Card Type</th>
            <th className="text-black">Issuing Location</th>
            <th className="text-black">IC</th>
            <th className="text-black">SC</th>
            <th className="text-black">Transactions</th>
            <th className="text-black">Volume</th>
            <th className="text-black">CR(%)</th>
            <th className="text-black">PR(%)</th>
            <th className="text-black">Old Total</th>
            <th className="text-black">New Total</th>
            <th className="text-black">Saving M/O</th>
            <th className="text-black">Saving Y/O</th>
          </tr>
        </thead>
        {/* Table Body */}
        <tbody>
          {invoices.map((invoice, index) => (
            <tr key={invoice.id}>
              <td>{index + 1}</td>
              <td>{invoice.cardType}</td>
              <td>{invoice.issuingLocation}</td>
              <td>{invoice.IC}</td>
              <td>{invoice.SC}</td>
              <td>{invoice.transactions}</td>
              <td>{invoice.volume}</td>
              <td>{invoice.currentRate}</td>
              <td>
                <input
                  type="Number"
                  value={invoice.proposedRate}
                  onChange={(e) =>
                    handleProposedRateChange(invoice.id, e.target.value)
                  }
                  className="input input-bordered w-[60px]"
                  placeholder="0.00"
                />
              </td>
              <td>
                {invoice.oldTotal !== undefined
                  ? invoice.oldTotal.toFixed(2)
                  : "0.00"}
              </td>
              <td>
                {invoice.newTotal !== undefined
                  ? invoice.newTotal.toFixed(2)
                  : "0.00"}
              </td>
              <td>
                {invoice.savingMO !== undefined
                  ? invoice.savingMO.toFixed(2)
                  : "0.00"}
              </td>
              <td>
                {invoice.savingYY !== undefined
                  ? invoice.savingYY.toFixed(2)
                  : "0.00"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default QuotesDetails;
