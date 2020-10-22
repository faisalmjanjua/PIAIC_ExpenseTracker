import React, { useContext } from "react";

// Context
import { GlobalState } from "../context/GlobalContext";

export const Balance = () => {
  const { transactions } = useContext(GlobalState);
  
  const amount = transactions.map(e => e.amount);
  const total = amount.reduce((acc, value) => (acc += value), 0);
  
  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">${total}</h1>
    </>
  );
};
