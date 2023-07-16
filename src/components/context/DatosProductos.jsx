import React, { createContext } from "react";

export const DataProductosContext = createContext();

export const SolicitarDataProducto = ({ children }) => {
  return (
    <DataProductosContext.Provider>{children}</DataProductosContext.Provider>
  );
};
