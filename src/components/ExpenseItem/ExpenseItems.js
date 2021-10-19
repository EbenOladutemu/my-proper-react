import './ExpenseItems.css';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../Card/Card';

const ExpenseItems = (props) => {
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button 
        style={{ marginLeft: 5 + 'px' }}
        onClick={ (e) =>  { console.log('Dudes', e.target); } }
        >
          Change Title
      </button>
    </Card>
  );
}

export default ExpenseItems;
