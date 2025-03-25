import React from "react";
import { AuthProvider } from "./AuthContext";
import { CustomerProvider } from "./CustomerContext";

const AppProvider = ({ children }) => {
  return (
    <AuthProvider>
      <CustomerProvider>{children}</CustomerProvider>
    </AuthProvider>
  );
};

export default AppProvider;
