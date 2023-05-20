import React, { useState } from 'react'
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from '../ExpenseFilters/ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

export default function Expenses(props) {
  const [initialYear, changedYear] = useState('2020')
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === initialYear
  })

  const getYear = (year) => {
    changedYear(year)
  }

  return (
    <li>
    <Card className="expenses">
      <ExpensesFilter selectedYear={initialYear} onGetYear={getYear} />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/>
    </Card>
    </li>
  )
}
