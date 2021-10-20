import Card from "../Card/Card";
import ExpenseItems from "../ExpenseItem/ExpenseItems";
import NewExpense from "../NewExpense/NewExpense";

const Expenses = () => {
  const expense = [
    {
      date: new Date(2021, 1, 1),
      title: 'Car Repairs',
      amount: 40.00
    },
    {
      date: new Date(2021, 4, 20),
      title: 'Food',
      amount: 450.00
    },
    {
      date: new Date(2021, 7, 2),
      title: 'Clothing',
      amount: 90.00
    },
    {
      date: new Date(2021, 11, 12),
      title: 'Miscellaneous',
      amount: 50.00
    }
  ]

  return (
    <Card className="App">
      <NewExpense/>
      <ExpenseItems
       date={ expense[0].date }
       title={ expense[0].title }
       amount={ expense[0].amount }
      />
      <ExpenseItems
       date={ expense[1].date }
       title={ expense[1].title }
       amount={ expense[1].amount }
      />
      <ExpenseItems
       date={ expense[2].date }
       title={ expense[2].title }
       amount={ expense[2].amount }
      />
      <ExpenseItems
       date={ expense[3].date }
       title={ expense[3].title }
       amount={ expense[3].amount }
      />
    </Card>
  )
}

export default Expenses;