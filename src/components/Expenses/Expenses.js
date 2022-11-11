import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
  const [filtredYear, setFiltredYear] = useState("2020");
  const filterChangeHandeler = (selectedYear) => {
    setFiltredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expenses) => {
    return expenses.date.getFullYear().toString() === filtredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filtredYear}
          onChangeFilter={filterChangeHandeler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
