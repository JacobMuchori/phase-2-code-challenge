import React from "react";
import { useEffect, useState } from "react";
import {nanoid} from'nanoid'
import Transaction from "./Transaction";


function NewTransactionForm() {

    const TRANSACTION__API="https://jacobmuchori.github.io/JacobMuchori.bank.io/db.json"
  
    const [transact, setTransact] = useState([])
    useEffect(() => {
        fetch(TRANSACTION__API)
        .then((response) => response.json())
        .then((results) => {
          setTransact(results.transactions)
        })
      }, [])

    const [addTransaction, setAddTransaction] = useState({
        id: '',
        date: '',
        description: '',
        category: '',
        amount: ''
    })

    const handleAddition =(event) => {

        const tgt= event.target.getAttribute('name');
        const tgtvalue= event.target.value;

        const newTrans= {...addTransaction};
        newTrans[tgt]= tgtvalue;

        setAddTransaction(newTrans)
    }

    const handleSubmit= (event) => {
        event.preventDefault()

        const trans= {
            id: nanoid(),
            date: addTransaction.date,
            description: addTransaction.description,
            category: addTransaction.category,
            amount: addTransaction.amount
        }

        const addedTrans=[...transact, trans]
        setTransact(addedTrans)
        }
        
    return(

        <div className="newTransaction">
            <form onSubmit={handleSubmit}>
            <input 
                placeholder="date" 
                type="date" 
                name="date"
                reruired="required"
                onChange={handleAddition}
            />
            <input 
                placeholder="description"
                type="text" 
                name="description"
                required="required"
                onChange={handleAddition}
            />
            <input 
                placeholder="category" 
                type="text"
                name="category"
                required="required"
                onChange={handleAddition}
            />
            <input 
                placeholder="amount" 
                type="number" 
                name="amount"
                required="required"
                onChange={handleAddition}
            /> 
            <input 
            type="submit"
            />
            </form>
            <div className="submissions">
           {transact.map((ts) => ( 
            <Transaction key={ts.id} date={ts.date} description={ts.description} category={ts.category} amount={ts.amount}/>
            )
        )}
            </div>
        </div>
    )
}

export default NewTransactionForm