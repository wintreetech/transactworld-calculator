import React, { useEffect, useState } from "react";

function QuotesDetails({ selectedInvoiceData, handleInvoice, quotename }) {
  const [invoices, setInvoices] = useState("");

  useEffect(() => {
    setInvoices(selectedInvoiceData);
  }, [selectedInvoiceData]);

  const handleProposedRateChange = (entryid, value) => {
    setInvoices((prevInvoice) => {
      const updatedEntries = prevInvoice.invoiceentry?.map((entry) =>
        entry._id === entryid
          ? {
              ...entry,
              proposedrate: value,
              oldtotal: entry.volume * entry.buyingrate,
              newtotal: !isNaN(parseFloat(value))
                ? entry.volume * parseFloat(value)
                : 0,
              savingMO:
                entry.volume * entry.buyingrate -
                (entry.volume * parseFloat(value) || 0),
              savingYY:
                (entry.volume * entry.buyingrate -
                  (entry.volume * parseFloat(value) || 0)) *
                12,
            }
          : entry
      );
      return { ...prevInvoice, invoiceentry: updatedEntries };
    });
  };

  useEffect(() => {
    handleInvoice(invoices);
  }, [quotename]);

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
          {invoices.invoiceentry?.length > 0 ? (
            invoices.invoiceentry.map((invoice, index) => (
              <tr key={invoice._id}>
                <td>{index + 1}</td>
                <td>{invoice.cardtype}</td>
                <td>{invoice.issuinglocation}</td>
                <td>{invoice.ixfee}</td>
                <td>{invoice.scfee}</td>
                <td>{invoice.transactions}</td>
                <td>{invoice.volume}</td>
                <td>{invoice.buyingrate}</td>
                <td>
                  <input
                    type="Number"
                    value={invoice.proposedrate || ""}
                    onChange={(e) =>
                      handleProposedRateChange(invoice._id, e.target.value)
                    }
                    className="input input-bordered w-[60px]"
                    placeholder="0.00"
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
            ))
          ) : (
            <tr>
              <td colSpan="13" className="text-center">
                Please Select Invoice First.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default QuotesDetails;
