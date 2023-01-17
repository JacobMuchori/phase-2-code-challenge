import  React from "react";

function Transaction({ date, description, category, amount}) {
    return(
            <table className="Transacts">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{date}</td>
                        <td>{description}</td>
                        <td>{category}</td>
                        <td>{amount}</td>
                    </tr>
                </tbody>
            </table>
    )
}

export default Transaction