import React from "react"

export const Employee = ({ employee }) => (
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <div className="employee__location">Location: {employee.locationId}</div>
    </section>
)