import React, { createContext, useReducer } from "react";

import AppReducer from "./AppReducer";

const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 2000 },
    { id: 3, text: "Camera", amount: -30 },
    { id: 4, text: "Book", amount: -50 },
  ],
};

// create Global Context
export const GlobalState = createContext(initialState);

// Global Provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function delTransaction(id) {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  }

  function addTransaction(transactions) {
    dispatch({
      type: "ADD",
      payload: transactions,
    });
  }

  return (
    <GlobalState.Provider
      value={{
        transactions: state.transactions,
        delTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalState.Provider>
  );
};
