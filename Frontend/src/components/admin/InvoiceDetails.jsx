import React, { useEffect } from "react";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { MdOutlineEdit } from "react-icons/md";
import { IoMdRemoveCircleOutline } from "react-icons/io";

function InvoiceDetails({ invoiceEntries, onEdit, onRemove }) {
  const handleEdit = (item, index) => {
    if (onEdit) onEdit(item, index);
  };

  const handleRemoveEntry = (item, index) => {
    if (onRemove) onRemove(item, index);
  };

  return (
    <>
      <div className="overflow-x-auto mb-4 rounded-box border border-base-content/5 bg-base-100 overflow-y-auto h-[calc(100vh-150px)]">
        {invoiceEntries.length > 0 ? (
          <table className="table table-md table-pin-rows table-pin-cols ">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th className="text-black">Card Type</th>
                <th className="text-black">Issuing Location</th>
                <th className="text-black">Interexchange Fee</th>
                <th className="text-black">Scheme Fee</th>
                <th className="text-black">No of Transactions</th>
                <th className="text-black">Transactions Volume</th>
                <th className="text-black">Current Rate</th>
                <th className="text-black">Total</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            {/* body */}

            <tbody>
              {invoiceEntries.map((item, index) => {
                const capitalizeWords = (str) => {
                  return str
                    .split("_")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ");
                };

                const cardType = capitalizeWords(item.cardType);

                return (
                  <tr key={index} className="text-2xl">
                    <td>{index + 1}</td>
                    <td>{cardType}</td>
                    <td>{item.issuingLocation}</td>
                    <td>{item.interchangeFees}</td>
                    <td>{item.schemeFees}</td>
                    <td>{item.transactions}</td>
                    <td>{item.transactionVolume}</td>
                    <td>{item.buyingRate}</td>
                    <td>{item.total}</td>
                    <td>
                      <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn m-1">
                          <PiDotsThreeOutlineVerticalFill />
                        </div>
                        <ul
                          tabIndex={0}
                          className="dropdown-content menu bg-base-100 rounded-box z-1 w-40 p-2 shadow-sm capitalize"
                        >
                          <li onClick={() => handleEdit(item, index)}>
                            <a>
                              <MdOutlineEdit />
                              edit
                            </a>
                          </li>
                          <li onClick={() => handleRemoveEntry(item, index)}>
                            <a className="text-red-500">
                              <IoMdRemoveCircleOutline />
                              remove
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <h1 className="text-center text-2xl mt-10">
            No Invoice Entries Added
          </h1>
        )}
      </div>
    </>
  );
}

export default InvoiceDetails;
