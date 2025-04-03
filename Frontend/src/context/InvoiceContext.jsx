import axios from "axios";
import React, { createContext, useState } from "react";
import toast from "react-hot-toast";

const InvoiceContext = createContext();

const baseUrl = import.meta.env.VITE_BASE_URL;
const apiUrl = import.meta.env.VITE_API_URL;

export const InvoiceProvider = ({ children }) => {
  const [invoicesData, setInvoicesData] = useState(null);
  const [singleInvoiceData, setSingleInvoiceData] = useState(null);
  const [loading, setLoading] = useState(false);

  const addInvoice = async (invoiceData) => {
    try {
      // console.log("Invoice function is running", invoiceData);
      const response = await axios.post(
        `${baseUrl}${apiUrl}/invoice/`,
        invoiceData
      );
      // console.log("invoice response", response);
      toast.success("save invoice succesfully");
    } catch (error) {
      console.error("error", error);
      toast.error(error);
    }
  };

  // Fetch Invoice Based on the Customer
  const fetchInvoiceData = async (customername, selectedInvoice) => {
    setLoading(true);
    // console.log(
    //   "customername",
    //   customername,
    //   "selectedInvoice",
    //   selectedInvoice
    // );
    try {
      const response = await axios.get(`${baseUrl}${apiUrl}/invoice/single`, {
        params: {
          customername: customername,
          invoicename: selectedInvoice,
        },
      });

      // console.log("response", response);
      // console.log("response", response.data.invoice);

      if (response.data.success) {
        setSingleInvoiceData({
          invoiceentry: response.data.invoice.invoiceentry.map((entry) => ({
            ...entry,
            proposedrate: "",
            oldtotal: 0,
            newtotal: 0,
            savingMO: 0,
            savingYY: 0,
          })),
        });
        setLoading(false);
        toast.success(`Invoice Fetched Sucessfully for ${selectedInvoice}`);
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  // Fetch all invoices of a specific customer
  const fetchAllCustomerInvoice = async (customername) => {
    try {
      const response = await axios.get(
        `${baseUrl}${apiUrl}/invoice/customerinvoices`,
        {
          params: {
            customername,
          },
        }
      );

      setInvoicesData(response.data.invoicenames);
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <InvoiceContext.Provider
      value={{
        addInvoice,
        fetchInvoiceData,
        fetchAllCustomerInvoice,
        invoicesData,
        singleInvoiceData,
        loading,
      }}
    >
      {children}
    </InvoiceContext.Provider>
  );
};

export default InvoiceContext;
