import React, { useContext } from "react"
import { CustomerContext } from "./CustomerProvider"
import { Customer } from "./Customer"
import "./Customer.css"

export const CustomerList = () => {
    const { customers } = useContext(CustomerContext)

    return (
        <div className="customers">
        {
            customers.map(c => <Customer key={c.id} customer={c} />)
        }
        </div>
    )
}