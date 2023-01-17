import React, { useState } from "react";
import Transaction from "./Transaction";
import { useEffect } from "react";

function FilterCategory() {
    const [data, setData] =useState([])
    const [query, setQuery] = useState("")
    useEffect(() => {
        fetch("https://jacobmuchori.github.io/JacobMuchori.bank.io/db.json?q=" + query)
        .then((response) => response.json())
        .then((results) => {
          setData(results.transactions)
        })
      }, [query])

    function handleSearch(e) {
        e.preventDefault()
        setQuery(e.target.value)
        return (
            <Transaction date={data.date} description={data.description} category={data.category} amount={data.amount}/>
        )
    }

    return(
        <div>
            <div>
                <form onSubmit={handleSearch}>
                <input onChange={(e) => setQuery(e.target.value)}></input>
                <input type="submit" ></input>
                </form>
            </div>
        </div>
    )
}

export default FilterCategory