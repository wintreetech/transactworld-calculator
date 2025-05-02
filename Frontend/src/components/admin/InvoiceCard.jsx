import React, { Fragment, useState } from "react";
import { TbFileInvoice } from "react-icons/tb";
import InvoiceDetails from "./InvoiceDetails";

const dummyData = [
  {
    cardType: "Credit Card",
    issuingLocation: "New York",
    interchangeFees: 1.25,
    schemeFees: 0.75,
    transactions: 120,
    transactionVolume: 15000.5,
    buyingRate: 1.02,
    total: 230.5,
  },
  {
    cardType: "Credit Card",
    issuingLocation: "New York",
    interchangeFees: 1.25,
    schemeFees: 0.75,
    transactions: 120,
    transactionVolume: 15000.5,
    buyingRate: 1.02,
    total: 230.5,
  },
  {
    cardType: "Credit Card",
    issuingLocation: "New York",
    interchangeFees: 1.25,
    schemeFees: 0.75,
    transactions: 120,
    transactionVolume: 15000.5,
    buyingRate: 1.02,
    total: 230.5,
  },
  {
    cardType: "Credit Card",
    issuingLocation: "New York",
    interchangeFees: 1.25,
    schemeFees: 0.75,
    transactions: 120,
    transactionVolume: 15000.5,
    buyingRate: 1.02,
    total: 230.5,
  },
  {
    cardType: "Credit Card",
    issuingLocation: "New York",
    interchangeFees: 1.25,
    schemeFees: 0.75,
    transactions: 120,
    transactionVolume: 15000.5,
    buyingRate: 1.02,
    total: 230.5,
  },
  {
    cardType: "Credit Card",
    issuingLocation: "New York",
    interchangeFees: 1.25,
    schemeFees: 0.75,
    transactions: 120,
    transactionVolume: 15000.5,
    buyingRate: 1.02,
    total: 230.5,
  },
  {
    cardType: "Credit Card",
    issuingLocation: "New York",
    interchangeFees: 1.25,
    schemeFees: 0.75,
    transactions: 120,
    transactionVolume: 15000.5,
    buyingRate: 1.02,
    total: 230.5,
  },
  {
    cardType: "Credit Card",
    issuingLocation: "New York",
    interchangeFees: 1.25,
    schemeFees: 0.75,
    transactions: 120,
    transactionVolume: 15000.5,
    buyingRate: 1.02,
    total: 230.5,
  },
  {
    cardType: "Credit Card",
    issuingLocation: "New York",
    interchangeFees: 1.25,
    schemeFees: 0.75,
    transactions: 120,
    transactionVolume: 15000.5,
    buyingRate: 1.02,
    total: 230.5,
  },
  {
    cardType: "Credit Card",
    issuingLocation: "New York",
    interchangeFees: 1.25,
    schemeFees: 0.75,
    transactions: 120,
    transactionVolume: 15000.5,
    buyingRate: 1.02,
    total: 230.5,
  },
];

const InvoiceCard = () => {
  const [allEntries, setAllEntries] = useState([]);
  const [showEntries, setShowEntries] = useState(false);

  const date = new Date(Date.now());
  const formattedDate = date.toLocaleDateString();

  const handleShowEntries = () => {
    setShowEntries(true);
    setAllEntries(dummyData);
  };

  const handleCloseEntries = () => {
    setShowEntries(false);
  };

  const handleEdit = (entry, index) => {
    console.log("entry for edit", entry, index + 1);
  };

  const handleRemove = (entry, index) => {
    console.log("entry for remove", entry, index + 1);
  };

  return (
    <Fragment>
      <div className="p-2 overflow-x-hidden overflow-y-auto h-[calc(100vh-150px)] invoice-detail-wrapper">
        {/* card start */}
        <div className="card w-full card-xs shadow-sm p-2 mb-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <TbFileInvoice className="text-4xl" />
              <div className="pl-2">
                <h2 className="card-title text-xl">Invoice name</h2>
                <p className="text-gray-400">Created at : {formattedDate}</p>
              </div>
            </div>
            <div className=" card-actions">
              <button onClick={handleShowEntries} className="btn capitalize">
                show enteries
              </button>
              {showEntries && (
                <button onClick={handleCloseEntries} className="btn capitalize">
                  Close
                </button>
              )}
            </div>
          </div>
          {showEntries && (
            <InvoiceDetails
              invoiceEntries={allEntries}
              onEdit={handleEdit}
              onRemove={handleRemove}
            />
          )}
        </div>
        {/* card end */}
      </div>
    </Fragment>
  );
};

export default InvoiceCard;
