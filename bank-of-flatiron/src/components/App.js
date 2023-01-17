import React  from 'react';
//import TransactionList from './TransactionList';
import './App.css';
import FilterCategory from './FilterCategory';
import NewTransactionForm from './NewTransactionForm';

function App() {
 
  return (
    <center className="App">
      <h1>Bank of Flatiron</h1>
      <FilterCategory/>
      <NewTransactionForm/>
    </center>
    )
}

export default App;
