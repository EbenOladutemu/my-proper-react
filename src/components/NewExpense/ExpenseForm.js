import React, { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  // Alternate approach for setting state
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // })
  const onTitleChange = (event) => {
    console.log(event.target.value)
    setEnteredTitle(event.target.value);
    // Alternate approach of getting state
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value
    // })
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value }
    // });
  }
  const onAmountChange = (event) => {
    console.log(event.target.value)
    setEnteredAmount(event.target.value);
  }
  const onDateChange = (event) => {
    console.log(event.target.value)
    setEnteredDate(event.target.value);
  }
  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: enteredDate
    }
    console.log(expenseData);
    props.onSave(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }
  return(
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={onTitleChange} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={onAmountChange} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={onDateChange} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm;