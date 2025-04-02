import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const CustomerContext = createContext();

const baseUrl = import.meta.env.VITE_BASE_URL;
const apiUrl = import.meta.env.VITE_API_URL;

export const CustomerProvider = ({ children }) => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get(`${baseUrl}${apiUrl}/customer`);
        const data = response.data.customers;
        setCustomers(data);
        setLoading(false);
      } catch (error) {
        console.error("error", error);
        toast.error("something went wrong");
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  // Add the customer to the state
  const addCustomer = (newCustomer) => {
    setCustomers((prevState) => [...prevState, newCustomer]);
    // console.log("customer added in the context", newCustomer);
  };

  return (
    <CustomerContext.Provider value={{ customers, loading, addCustomer }}>
      {children}
    </CustomerContext.Provider>
  );
};

export default CustomerContext;
