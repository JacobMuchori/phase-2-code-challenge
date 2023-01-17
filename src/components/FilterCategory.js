import React, { useState } from "react";
//import Transaction from "./Transaction";

function FilterCategory(props) {
    const [data, setData] =useState({
        id: '',
        date: '',
        description: '',
        category: '',
        amount: '',
        })

    function filterData(e) {
        e.preventDefault();
        setData(e.target.value)
    }
  /* if(data.length > 0) {
    const newData= data.filter((trans) => trans.id !== id || trans.date !== date || trans.description !== description || trans.category !== category || trans.amount !== amount);
    return <Transaction date={newData.date} description={newData.description} category={newData.category} amount={newData.amount}/>
    }
    else*/
    return(
        <div className="">
            <div>
                <input type="text" placeholder="Search"></input>
                <input type="submit" value={data} onChange={filterData}></input>
            </div>
        </div>
    )
}

export default FilterCategory