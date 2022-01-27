import React, { useState } from 'react';
import './ExpenseItems.css';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../Card/Card';

const ExpenseItems = (props) => {
  /* 
    useState:
      - should be called only inside component functions and not nested functions.
      - Returns 2 parameters [first-current state, second-function/method to update current state]
  */
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle('New'); 
    console.log('Dudes', title);
  };
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button style={{ marginLeft: 5 + 'px' }} onClick={clickHandler}>
        Change Title
      </button>
    </Card>
  );
};


export default ExpenseItems;
