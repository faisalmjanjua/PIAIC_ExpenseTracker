import React, { useContext } from "react";
import { GlobalState } from "../context/GlobalContext";

export const Transaction = ({ transaction }) => {
  const sign = transaction.amount > 0 ? "+" : "-";

  const { delTransaction } = useContext(GlobalState);

  return (
    <>
      <li className="minus">
        {transaction.text}
        <span>
          {sign}${Math.abs(transaction.amount)}
        </span>
        <button
          className="delete-btn"
          onClick={() => delTransaction(transaction.id)}
        >
          x
        </button>
      </li>
    </>
  );
};
