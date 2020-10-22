import React, { useContext } from "react";

// Component
import { Transaction } from "./Transaction";

// Context
import { GlobalState } from "../context/GlobalContext";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalState);

  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((e) => (
          <Transaction key={e.id} transaction={e} />
        ))}
      </ul>
    </>
  );
};
