import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const onSaveHandler = (expenseData) => {
    const data = {
      ...expenseData,
      id: Math.floor(Math.random() * 100).toString()
    }
    console.log(data);
    props.onAddNewExpense(data);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSave={onSaveHandler} />
    </div>
  )
}

export default NewExpense;
