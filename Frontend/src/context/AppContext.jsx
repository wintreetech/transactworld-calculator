import React from "react";
import { AuthProvider } from "./AuthContext";
import { CustomerProvider } from "./CustomerContext";
import { InvoiceProvider } from "./InvoiceContext";
import { QuoteProvider } from "./QuoteContext";

const AppProvider = ({ children }) => {
  return (
    <AuthProvider>
      <CustomerProvider>
        <InvoiceProvider>
          <QuoteProvider>{children}</QuoteProvider>
        </InvoiceProvider>
      </CustomerProvider>
    </AuthProvider>
  );
};

export default AppProvider;
