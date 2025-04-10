import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import QuotesDetails from "./QuotesDetails";
import { LuSave } from "react-icons/lu";

import CustomerContext from "../../context/CustomerContext";
import InvoiceContext from "../../context/InvoiceContext";
import QuoteContext from "../../context/QuoteContext";

function Quotes() {
  const [formData, setFormData] = useState({
    customername: "",
    quotename: "",
  });

  const [selectedInvoice, setSelectedInvoice] = useState("");
  const [invoiceData, setInvoiceData] = useState("");

  // context
  const { customers } = useContext(CustomerContext);
  const {
    fetchAllCustomerInvoice,
    invoicesData,
    fetchInvoiceData,
    singleInvoiceData,
    setInvoicesData,
  } = useContext(InvoiceContext);

  const { savedQuote } = useContext(QuoteContext);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "customername") {
      setSelectedInvoice("");
      setInvoicesData([]);
    }

    if (formData.quotename === "") {
      fetchAllCustomerInvoice(value);
    }
  };

  const handleInvoice = (invoice) => {
    setInvoiceData(invoice);
    return invoice;
  };

  useEffect(() => {
    if (selectedInvoice) {
      fetchInvoiceData(formData.customername, selectedInvoice);
    }
  }, [selectedInvoice]);

  const saveInvoice = () => {
    if (!formData.quotename.trim()) {
      toast.error("Please enter a quote name!");
      return;
    }

    savedQuote(formData, invoiceData);

    setTimeout(() => {
      handlePdfGenerate();
      toast.success("Download successfully!");
    }, 3000);
  };

  return (
    <>
      <div className="mb-4">
        <h1 className="text-2xl">Quotes</h1>
      </div>
      <div className="mb-4 gap-4 flex flex-col">
        <div className="flex justify-between">
          <div className="flex gap-4">
            {/* select customer number */}
            <select
              value={formData.customername}
              onChange={handleChange}
              name="customername"
              className="select"
            >
              <option default>Select your customer </option>
              {customers.map((customer, index) => {
                return (
                  <option key={index} value={customer.name}>
                    {customer.name}
                  </option>
                );
              })}
            </select>

            {/* Select Invoice to fetch data */}
            {formData.customername && (
              <select
                value={selectedInvoice}
                onChange={(e) => setSelectedInvoice(e.target.value)}
                name="invoicename"
                className="select w-full"
              >
                <option value="">Select Invoice </option>
                {invoicesData?.map((invoicename, index) => (
                  <option key={index} value={invoicename}>
                    {invoicename}
                  </option>
                ))}
              </select>
            )}
          </div>
          <div>
            {selectedInvoice && selectedInvoice !== "" && (
              <>
                <button
                  className="btn success text-base "
                  onClick={() =>
                    document.getElementById("my_modal_1").showModal()
                  }
                >
                  <LuSave />
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
          selectedInvoiceData={singleInvoiceData}
          handleInvoice={handleInvoice}
          quotename={formData.quotename}
        />
      </div>
    </>
  );
}

export default Quotes;
