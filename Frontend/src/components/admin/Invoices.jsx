import React, { useContext, useEffect, useMemo, useState } from "react";
import InvoiceDetails from "./InvoiceDetails";
import toast from "react-hot-toast";
import CustomerContext from "../../context/CustomerContext";
import InvoiceContext from "../../context/InvoiceContext";
import { LuSave } from "react-icons/lu";
import { IoMdAdd } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import { cardTypes, interchangeRates, schemeFees } from "../../config";

const calculateFees = (formData) => {
  const acquirerFeePercent = 0.08;
  const acquirerFeeFixed = 0.05;

  const transactionVolume = parseFloat(formData.transactionVolume) || 0;
  const transactions = parseFloat(formData.transactions) || 0;

  const card = formData.cardType;
  const location = formData.issuingLocation;

  const interChangePercentage = interchangeRates[card]?.[location] || 0;
  const scheme = schemeFees[card]?.[location] || { percent: 0, fixed: 0 };

  const totalInterchangeFee = (
    (interChangePercentage / 100) *
    transactionVolume
  ).toFixed(2);

  const totalSchemeFee = (
    (scheme.percent / 100) * transactionVolume +
    scheme.fixed * transactions
  ).toFixed(2);

  const totalAcquirerFee = (
    (acquirerFeePercent / 100) * transactionVolume +
    acquirerFeeFixed * transactions
  ).toFixed(2);

  const totalofcalculation = (
    parseFloat(totalInterchangeFee) +
    parseFloat(totalSchemeFee) +
    parseFloat(totalAcquirerFee)
  ).toFixed(2);

  const totalAmount = formData.internationalMarkup
    ? (
        transactionVolume * ((parseFloat(formData.buyingRate) || 0) / 100) +
        transactions * (parseFloat(formData.internationalMarkup) || 0)
      ).toFixed(2)
    : (
        transactionVolume *
        ((parseFloat(formData.buyingRate) || 0) / 100)
      ).toFixed(2);

  return {
    totalInterchangeFee,
    interChangePercentage,
    totalSchemeFee,
    totalofcalculation,
    totalAmount,
  };
};

function Invoices() {
  const [customer, setCustomer] = useState("");
  const [invoiceEntries, setInvoiceEntries] = useState([]);
  const [invoiceName, setInvoiceName] = useState("");
  const [currentEntry, setCurrentEntry] = useState({
    cardType: "",
    issuingLocation: "",
    interchangeFees: 0,
    schemeFees: 0,
    transactions: "",
    transactionVolume: "",
    buyingRate: "",
    internationalMarkup: "",
    total: 0,
  });

  const location = useLocation();

  const { customers } = useContext(CustomerContext);
  const { addInvoice } = useContext(InvoiceContext);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // For Customer
    if (name === "customer") {
      setCustomer(value);
    } else {
      setCurrentEntry((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    // For Card Type
    if (name === "cardType") {
      const selectedCard = cardTypes.find((card) => card.value === value);
      const defaultIssuingLocation = selectedCard?.issuing_locations?.[0] || "";

      setCurrentEntry((prev) => ({
        ...prev,
        cardType: value,
        issuingLocation: defaultIssuingLocation,
      }));
    } else {
      setCurrentEntry((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Get locations for selected cardType
  const selectedCard = cardTypes.find(
    (card) => card.value === currentEntry.cardType
  );
  const issuingLocations = selectedCard?.issuing_locations || [];

  // Above is newly added code
  const openModal = () => {
    if (!customer || customer === "Select your customer") {
      toast("Please select a customer, before adding an invoice entry.");
      return; // Prevent modal from opening if no customer is selected
    }
    document.getElementById("my_modal_3").showModal();
  };

  const result = useMemo(
    () => calculateFees(currentEntry),
    [
      currentEntry.cardType,
      currentEntry.issuingLocation,
      currentEntry.transactionVolume,
      currentEntry.transactions,
      currentEntry.buyingRate,
      currentEntry.internationalMarkup,
    ]
  );

  useEffect(() => {
    setCurrentEntry((prev) => ({
      ...prev,
      interchangeFees: result.totalInterchangeFee,
      schemeFees: result.totalSchemeFee,
      total: result.totalAmount,
    }));
  }, [result]);

  // Add confirmation for page unload or reload
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (invoiceEntries.length > 0) {
        const message =
          "The entries you have added will be removed, please save before leaving";
        event.returnValue = message;
        return message;
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    if (location.pathname !== "/admin/invoices") {
      console.log("route changed");
    }

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [invoiceEntries, location]);

  const addEntry = (e) => {
    e.preventDefault();
    if (
      !currentEntry.cardType ||
      !currentEntry.issuingLocation ||
      !currentEntry.transactions ||
      !currentEntry.transactionVolume ||
      !currentEntry.buyingRate
    ) {
      toast("Please fill all the fields.");
      return;
    }
    setInvoiceEntries((prev) => [...prev, { ...currentEntry }]);
    setCurrentEntry({
      cardType: "",
      issuingLocation: "",
      interchangeFees: 0,
      schemeFees: 0,
      transactions: "",
      transactionVolume: "",
      buyingRate: "",
      total: 0,
    });
    document.getElementById("my_modal_3").close();
  };

  const saveInvoice = () => {
    if (
      !customer ||
      !invoiceName ||
      !invoiceEntries ||
      !invoiceEntries.length === 0
    ) {
      toast("Please fill in all fields.");
      return;
    }

    const invoiceData = {
      customername: customer,
      invoicename: invoiceName,
      entries: invoiceEntries,
    };

    addInvoice(invoiceData);

    setInvoiceEntries([]);
  };

  const resetEntry = () => {
    setCurrentEntry({
      cardType: "",
      issuingLocation: "",
      interchangeFees: 0,
      schemeFees: 0,
      transactions: "",
      transactionVolume: "",
      buyingRate: "",
      total: 0,
    });
    document.getElementById("my_modal_3").close();
  };

  return (
    <>
      <div className="mb-4">
        <h1 className="text-2xl">Invoices </h1>
      </div>
      <div className="mb-4 flex justify-between">
        <select
          onChange={handleChange}
          value={customer}
          name="customer"
          className="select"
        >
          <option default>Select your customer</option>
          {customers.map((customer, index) => {
            return (
              <option key={index} value={customer.name}>
                {customer.name}
              </option>
            );
          })}
        </select>

        <div className="flex gap-2">
          <button className="btn text-base tracking-wide" onClick={openModal}>
            <IoMdAdd />
            Add Invoice Entry
          </button>
          {invoiceEntries.length !== 0 ? (
            <button
              className="btn success text-base tracking-wide"
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              <LuSave />
              Save Invoice
            </button>
          ) : null}
        </div>

        <dialog id="my_modal_3" className="modal">
          <div className="modal-box w-11/12 max-w-4xl p-8">
            <form method="dialog" onSubmit={addEntry}>
              <div className="grid grid-cols-3 grid-rows-2 gap-6">
                {/* Card Type */}
                <fieldset className="fieldset">
                  <legend className="fieldset-legend text-sm font-medium">
                    What is your Card type?
                  </legend>
                  <select
                    name="cardType"
                    value={currentEntry.cardType}
                    onChange={handleChange}
                    className="select"
                    required
                  >
                    <option value="" disabled>
                      -- Select Card Type --
                    </option>
                    {cardTypes.map((card) => (
                      <option key={card.value} value={card.value}>
                        {card.label}
                      </option>
                    ))}
                  </select>
                </fieldset>

                {/* Issuing Location */}
                <fieldset className="fieldset">
                  <legend className="fieldset-legend text-sm font-medium">
                    What is your Issuing Location?
                  </legend>
                  <select
                    name="issuingLocation"
                    value={currentEntry.issuingLocation}
                    onChange={handleChange}
                    className="select"
                    required
                    disabled={!currentEntry.cardType} // disable until card type is selected
                  >
                    <option value="" disabled>
                      -- Select Issuing Location --
                    </option>
                    {issuingLocations.map((location) => (
                      <option key={location} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>
                </fieldset>

                {/* Transactions */}
                <fieldset className="fieldset">
                  <legend className="fieldset-legend text-sm font-medium">
                    What is the Number of Transactions?
                  </legend>
                  <input
                    type="number"
                    name="transactions"
                    value={currentEntry.transactions}
                    onChange={handleChange}
                    className="input"
                    placeholder="Enter number of transactions"
                    min={0}
                    step={0.01}
                    required
                  />
                </fieldset>

                {/* Transaction Volume */}
                <fieldset className="fieldset">
                  <legend className="fieldset-legend text-sm font-medium">
                    What is the Transaction Volume?
                  </legend>
                  <input
                    type="number"
                    name="transactionVolume"
                    value={currentEntry.transactionVolume}
                    onChange={handleChange}
                    className="input"
                    placeholder="Enter transaction volume"
                    step={0.01}
                    min={0}
                    required
                  />
                </fieldset>

                {/* Current Buying Rate */}
                <fieldset className="fieldset">
                  <legend className="fieldset-legend text-sm font-medium">
                    What is your Current Buying Rate (%)?
                  </legend>
                  <input
                    type="number"
                    name="buyingRate"
                    value={currentEntry.buyingRate}
                    onChange={handleChange}
                    className="input"
                    placeholder="Enter current buying rate"
                    min={0}
                    step={0.01}
                    required
                  />
                </fieldset>

                {currentEntry.issuingLocation === "International" && (
                  <fieldset className="fieldset">
                    <legend className="fieldset-legend text-sm font-medium">
                      Enter markup (for International only )
                    </legend>
                    <input
                      type="number"
                      min={0}
                      step="0.01"
                      name="internationalMarkup"
                      value={currentEntry.internationalMarkup}
                      onChange={handleChange}
                      className="input w-24 px-2 py-1 border border-gray-300 text-sm"
                      placeholder="e.g. 0.50"
                    />
                  </fieldset>
                )}
              </div>
              <button
                type="submit"
                className="btn absolute right-8 text-3xl bottom-8 w-2 h-8"
              >
                +
              </button>
            </form>
            <button
              onClick={resetEntry}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </div>
        </dialog>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
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
                value={invoiceName}
                onChange={(e) => setInvoiceName(e.target.value)}
                type="text"
                className="grow"
                placeholder="example"
                required
              />
            </label>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button onClick={saveInvoice} type="submit" className="btn">
                  Save
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
      <InvoiceDetails invoiceEntries={invoiceEntries} />
    </>
  );
}

export default Invoices;
