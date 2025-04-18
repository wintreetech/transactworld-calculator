import React, { useEffect, useState } from "react";

function QuotesDetails({ selectedInvoiceData, handleInvoice, quotename }) {
  const [invoices, setInvoices] = useState("");

  useEffect(() => {
    setInvoices(selectedInvoiceData);
  }, [selectedInvoiceData]);

  console.log("invoices of the selectedInvoiceData", invoices);

  const handleProposedRateChange = (entryid, value) => {
    const parsedValue = parseFloat(value); // input is percentage

    setInvoices((prevInvoice) => {
      const updatedEntries = prevInvoice.invoiceentry?.map((entry) => {
        if (entry._id !== entryid) return entry;

        if (value === "" || isNaN(parsedValue)) {
          return {
            ...entry,
            proposedrate: value,
            oldtotal: 0,
            newtotal: 0,
            savingMO: 0,
            savingYY: 0,
          };
        }

        const volume = entry.transactionVolume;
        const buyingRate = entry.buyingRate;

        const oldtotal = volume * (buyingRate / 100);
        const newtotal = volume * (parsedValue / 100); // ✅ correct percentage
        const savingMO = oldtotal - newtotal;
        const savingYY = savingMO * 12;

        return {
          ...entry,
          proposedrate: value,
          oldtotal,
          newtotal,
          savingMO,
          savingYY,
        };
      });

      return { ...prevInvoice, invoiceentry: updatedEntries };
    });
  };

  useEffect(() => {
    handleInvoice(invoices);
  }, [invoices, quotename]);

  return (
    <div className="overflow-x-hidden mb-4 rounded-box border border-base-content/5 bg-base-100 overflow-y-auto h-[calc(100vh-150px)]">
      {invoices?.invoiceentry?.length > 0 ? (
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
            {invoices?.invoiceentry?.map((invoice, index) => (
              <tr key={invoice._id}>
                <td>{index + 1}</td>
                <td>{invoice.cardType}</td>
                <td>{invoice.issuingLocation}</td>
                <td>{invoice.interchangeFees}</td>
                <td>{invoice.schemeFees}</td>
                <td>{invoice.transactions}</td>
                <td>{invoice.transactionVolume}</td>
                <td>{invoice.buyingRate}</td>
                <td>
                  <input
                    type="Number"
                    value={invoice.proposedrate || ""}
                    onChange={(e) =>
                      handleProposedRateChange(invoice._id, e.target.value)
                    }
                    className="input input-bordered w-[60px]"
                    min="0"
                    placeholder="0.00"
                    step={0.01}
                  />
                </td>
                <td>
                  {invoice.oldtotal !== undefined
                    ? invoice.oldtotal.toFixed(2)
                    : "0.00"}
                </td>
                <td>
                  {invoice.newtotal !== undefined
                    ? invoice.newtotal.toFixed(2)
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
      ) : (
        <h1 className="text-center text-2xl mt-10">
          Please Select Invoice First
        </h1>
      )}
    </div>
  );
}

export default QuotesDetails;
