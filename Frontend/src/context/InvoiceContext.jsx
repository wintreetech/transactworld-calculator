import axios from "axios";
import React, { createContext, useState } from "react";
import toast from "react-hot-toast";

const InvoiceContext = createContext();

const baseUrl = import.meta.env.VITE_BASE_URL;
const apiUrl = import.meta.env.VITE_API_URL;

export const InvoiceProvider = ({ children }) => {
  const addInvoice = async (invoiceData) => {
    try {
      console.log("Invoice function is running", invoiceData);
      const response = await axios.post(
        `${baseUrl}${apiUrl}/invoice/`,
        invoiceData
      );
      console.log("invoice response", response);
      toast.success("save invoice succesfully");
    } catch (error) {
      console.error("error", error);
      toast.error(error);
    }
  };
  return (
    <InvoiceContext.Provider value={{ addInvoice }}>
      {children}
    </InvoiceContext.Provider>
  );
};

export default InvoiceContext;
