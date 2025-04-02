import React from "react";
import { AuthProvider } from "./AuthContext";
import { CustomerProvider } from "./CustomerContext";
import { InvoiceProvider } from "./InvoiceContext";

const AppProvider = ({ children }) => {
  return (
    <AuthProvider>
      <CustomerProvider>
        <InvoiceProvider>{children}</InvoiceProvider>
      </CustomerProvider>
    </AuthProvider>
  );
};

export default AppProvider;
