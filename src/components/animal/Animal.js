import React from "react"

export const Animal = ({ animal, location, customer }) => (
    <section className="animal">
        <h3 className="animal__name">{animal.name}</h3>
        <div className="animal__breed">Breed: {animal.breed}</div>
        <div className="animal__location">Location: {location.name}</div>
        <div className="animal__customer">Owner: {customer.name}</div>
    </section>
)