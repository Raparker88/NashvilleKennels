import React, { useContext } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { Employee } from "./Employee"
import "./Employee.css"
import { LocationContext } from "../location/LocationProvider"

export const EmployeeList = () => {
    const { employees } = useContext(EmployeeContext)
    const { locations } = useContext(LocationContext)

    return (
        <div className="employees">
        {
            employees.map(e => {
                const l = locations.find(l => l.id === e.locationId) || {}
                return <Employee key={e.id} employee={e} location={l}/>
            }) 
                
        }
        </div>
    )
}