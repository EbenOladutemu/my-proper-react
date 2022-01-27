import React, { useState } from 'react';
import Card from '../Card/Card';
import ExpenseItems from '../ExpenseItem/ExpenseItems';
import NewExpense from '../NewExpense/NewExpense';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const expenses = [
    {
      date: new Date(2021, 1, 1),
      title: 'Car Repairs',
      amount: 40.0,
    },
    {
      date: new Date(2021, 4, 20),
      title: 'Food',
      amount: 450.0,
    },
    {
      date: new Date(2021, 7, 2),
      title: 'Clothing',
      amount: 90.0,
    },
    {
      date: new Date(2021, 11, 12),
      title: 'Miscellaneous',
      amount: 50.0,
    },
  ];

  const [newExpense, setNewExpense] = useState(expenses);

  const onSaveHandler = (expenseData) => {
    const data = {
      ...expenseData,
      id: Math.floor(Math.random() * 100).toString(),
    };
    setNewExpense((prevExpenses) => {
      return [expenseData, ...prevExpenses];
    });
    console.log(data);
    expenses.push(data);
    props.added(data);
  };

  const selectedHandler = (selected) => {
    console.log(selected)
  }

  return (
    <Card className='App'>
      <NewExpense onAddNewExpense={onSaveHandler} />
      <ExpensesFilter onSelected={selectedHandler} />
      {expenses.map((expense) => (
        <ExpenseItems
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
