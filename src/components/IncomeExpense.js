import React, { useContext } from "react";

// Context
import { GlobalState } from "../context/GlobalContext";

export const IncomeExpense = () => {
  const { transactions } = useContext(GlobalState);

  const amount = transactions.map((e) => e.amount);

  const income = amount
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense =
    amount
      .filter((item) => item < 0)
      .reduce((acc, value) => (acc += value), 0) * -(1).toFixed(2);

  return (
    <>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">
            +${income}
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">
            -${expense}
          </p>
        </div>
      </div>
    </>
  );
};
