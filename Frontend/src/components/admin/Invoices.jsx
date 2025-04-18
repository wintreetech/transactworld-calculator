import React, { useContext, useEffect, useMemo, useState } from "react";
import InvoiceDetails from "./InvoiceDetails";
import toast from "react-hot-toast";
import CustomerContext from "../../context/CustomerContext";
import InvoiceContext from "../../context/InvoiceContext";
import { LuSave } from "react-icons/lu";
import { IoMdAdd } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";

// let calculateFees = (formData) => {
//   const interchangeRates = {
//     visa_credit: { UK: 0.3, International: 1.5 },
//     mastercard_credit: { UK: 0.3, International: 1.5 },
//     visa_debit: { UK: 0.2, International: 1.15 },
//     visa_electron: { UK: 0.2, International: 1.15 },
//     visa_v_pay: { UK: 0.2 },
//     mastercard_debit: { UK: 0.2, International: 1.15 },
//     maestro: { UK: 0.2, Europe: 1.15, International: 1.6 },
//     visa_business_debit: { UK: 1.4, EEA: 1.9, Europe: 2.0 },
//     visa_corporate_and_purchasing: { UK: 2.0, Europe: 2.0, International: 2.0 },
//     visa_business: { UK: 1.4, Europe: 2.0, International: 2.0 },
//     mastercard_business: {
//       UK: 1.7,
//       EEA: 1.65,
//       Europe: 2.1,
//       International: 2.0,
//     },
//     maestro_business_and_commercial: { UK: 1.65, EEA: 1.65, Europe: 2.1 },
//   };

//   const schemeFees = {
//     visa_credit: { percent: 0.023, fixed: 0.0097 },
//     mastercard_credit: { percent: 0.3, fixed: 1.5 },
//     mastercard_debit: { percent: 0.025, fixed: 0.01 },
//   };

//   const acquirerFeePercent = 0.08;
//   const acquirerFeeFixed = 0.05;

//   // Ensure numeric values:
//   const transactionVolume = parseFloat(formData.transactionVolume) || 0;
//   const transactions = parseFloat(formData.transactions) || 0;

//   // interchange percentage
//   const interChangePercentage =
//     interchangeRates[formData.cardType]?.[formData.issuingLocation] || 0;

//   // interchange percentage
//   let schemeFeePercent = schemeFees[formData.cardType]?.percent || 0;
//   let schemeFeeFixed = schemeFees[formData.cardType]?.fixed || 0;

//   // Total Value
//   let totalInterchangeFee = (
//     (interChangePercentage / 100) *
//     transactionVolume
//   ).toFixed(2);

//   let totalSchemeFee = (
//     (schemeFeePercent / 100) * transactionVolume +
//     schemeFeeFixed * transactions
//   ).toFixed(2);

//   let totalAcquirerFee = (
//     (acquirerFeePercent / 100) * transactionVolume +
//     acquirerFeeFixed * transactions
//   ).toFixed(2);

//   const totalofcalculation = (
//     parseFloat(totalInterchangeFee) +
//     parseFloat(totalSchemeFee) +
//     parseFloat(totalAcquirerFee)
//   ).toFixed(2);

//   const totalAmount = (transactionVolume * (formData.buyingRate / 100)).toFixed(
//     2
//   );

//   return {
//     totalInterchangeFee,
//     interChangePercentage,
//     totalSchemeFee,
//     totalofcalculation,
//     totalAmount,
//   };
// };

const calculateFees = (formData) => {
  const interchangeRates = {
    visa_credit: {
      "UK & EEA": 0.3,
      International: 1.5,
    },
    mastercard_credit: {
      "UK & EEA": 0.3,
      International: 1.5,
    },
    visa_debit: {
      "UK & EEA": 0.2,
      International: 1.15,
    },
    visa_electron: {
      "UK & EEA": 0.2,
      International: 1.15,
    },
    visa_v_pay: {
      "UK & EEA": 0.2,
    },
    mastercard_debit: {
      "UK & EEA": 0.2,
      International: 1.15,
    },
    maestro: {
      "UK & EEA": 0.2,
      Europe: 1.15,
      International: 1.6,
    },
    visa_business_debit: {
      UK: 1.4,
      EEA: 1.9,
      Europe: 2.0,
    },
    visa_corporate_and_purchasing: {
      UK: 2.0,
      Europe: 2.0,
      International: 2.0,
    },
    visa_business: {
      UK: 1.4,
      Europe: 2.0,
      International: 2.0,
    },
    mastercard_business: {
      UK: 1.7,
      EEA: 1.65,
      Europe: 2.0,
      International: 2.0,
    },
    maestro_business_and_commercial: {
      UK: 1.65,
      EEA: 1.65,
      Europe: 2.1,
    },
  };

  const schemeFees = {
    visa_credit: {
      "UK & EEA": { percent: 0.023, fixed: 0.0097 },
      International: { percent: 0.023, fixed: 0.093 },
    },
    mastercard_credit: {
      "UK & EEA": { percent: 0.0298, fixed: 0.0085 },
      International: { percent: 0.0298, fixed: 0.0914 },
    },
    visa_debit: {
      "UK & EEA": { percent: 0.018, fixed: 0.0097 },
      International: { percent: 0.018, fixed: 0.093 },
    },
    visa_electron: {
      "UK & EEA": { percent: 0.018, fixed: 0.0097 },
      International: { percent: 0.018, fixed: 0.093 },
    },
    visa_v_pay: {
      "UK & EEA": { percent: 0.018, fixed: 0.0097 },
    },
    mastercard_debit: {
      "UK & EEA": { percent: 0.0298, fixed: 0.0085 },
      International: { percent: 0.0298, fixed: 0.0085 },
    },
    maestro: {
      "UK & EEA": { percent: 0.0298, fixed: 0.0085 },
      Europe: { percent: 0.0298, fixed: 0.0085 },
      International: { percent: 0.0298, fixed: 0.0085 },
    },
    visa_business_debit: {
      UK: { percent: 0.023, fixed: 0.0097 },
      EEA: { percent: 0.023, fixed: 0.0097 },
      Europe: { percent: 0.023, fixed: 0.0097 },
    },
    visa_corporate_and_purchasing: {
      UK: { percent: 0.023, fixed: 0.0097 },
      Europe: { percent: 0.023, fixed: 0.0097 },
      International: { percent: 0.023, fixed: 0.0097 },
    },
    visa_business: {
      UK: { percent: 0.023, fixed: 0.0097 },
      Europe: { percent: 0.023, fixed: 0.0097 },
      International: { percent: 0.023, fixed: 0.0097 },
    },
    mastercard_business: {
      UK: { percent: 0.0298, fixed: 0.0085 },
      EEA: { percent: 0.0298, fixed: 0.0085 },
      Europe: { percent: 0.0298, fixed: 0.0085 },
      International: { percent: 0.0298, fixed: 0.0914 },
    },
    maestro_business_and_commercial: {
      UK: { percent: 0.0298, fixed: 0.0085 },
      EEA: { percent: 0.0298, fixed: 0.0085 },
      Europe: { percent: 0.0298, fixed: 0.0085 },
    },
  };

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

  const totalAmount = (
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
    total: 0,
  });

  const location = useLocation();

  const { customers } = useContext(CustomerContext);
  const { addInvoice } = useContext(InvoiceContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "customer") {
      setCustomer(value);
    } else {
      setCurrentEntry((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

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
      // Show toast message if fields are empty
      toast("Please fill all the fields.");
      return; // Stop further execution
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

  const cardTypes = [
    {
      value: "visa_credit",
      label: "Visa Credit",
      issuing_locations: ["UK & EEA", "International"],
    },
    {
      value: "mastercard_credit",
      label: "Mastercard Credit",
      issuing_locations: ["UK & EEA", "International"],
    },
    {
      value: "visa_debit",
      label: "Visa Debit",
      issuing_locations: ["UK & EEA", "International"],
    },
    {
      value: "visa_electron",
      label: "Visa Electron",
      issuing_locations: ["UK & EEA", "International"],
    },
    {
      value: "visa_v_pay",
      label: "Visa V Pay",
      issuing_locations: ["UK & EEA"],
    },
    {
      value: "mastercard_debit",
      label: "Mastercard Debit",
      issuing_locations: ["UK & EEA", "International"],
    },
    {
      value: "maestro",
      label: "Maestro",
      issuing_locations: ["UK & EEA", "Europe", "International"],
    },
    {
      value: "visa_business_debit",
      label: "Visa Business Debit",
      issuing_locations: ["UK", "EEA", "Europe"],
    },
    {
      value: "visa_corporate_and_purchasing",
      label: "Visa Corporate and Purchasing",
      issuing_locations: ["UK", "Europe", "International"],
    },
    {
      value: "visa_business",
      label: "Visa Business",
      issuing_locations: ["UK", "Europe", "International"],
    },
    {
      value: "mastercard_business",
      label: "Mastercard Business",
      issuing_locations: ["UK", "EEA", "Europe", "International"],
    },
    {
      value: "maestro_business_and_commercial",
      label: "Maestro Business and Commercial",
      issuing_locations: ["UK", "EEA", "Europe"],
    },
  ];

  const allIssuingLocations = Array.from(
    new Set(cardTypes.flatMap((card) => card.issuing_locations))
  );

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
                  >
                    <option value="" disabled>
                      -- Select Issuing Location --
                    </option>
                    {allIssuingLocations.map((location) => (
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
              </div>
              <button type="submit" className="btn absolute right-8 bottom-8">
                Add Invoice Entry
              </button>
            </form>
            <button
              onClick={() => document.getElementById("my_modal_3").close()}
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
