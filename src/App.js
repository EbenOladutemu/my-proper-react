import Expenses from './components/Expenses/Expenses';
import './App.css';

const App = () => {
  const onSaveHandler = (expenseData) => {
    const data = {
      ...expenseData,
      id: Math.floor(Math.random() * 10)
    }
    console.log(data, 'In App.js');
  }
  return (
    <Expenses added={onSaveHandler}/>
  );
}

export default App;
