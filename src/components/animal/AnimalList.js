import React, { useContext } from "react"
import { AnimalContext } from "./AnimalProvider"
import { LocationContext } from "../location/LocationProvider"
import { Animal } from "./Animal"
import "./Animal.css"
import { CustomerContext } from "../customer/CustomerProvider"

export const AnimalList = (props) => {
    const { animals } = useContext(AnimalContext)
    const { locations } = useContext(LocationContext)
    const { customers } = useContext(CustomerContext)

    return (
        <div className="animals">
            <h2>Animals</h2>
            <button onClick={() => props.history.push("/animals/create")}>
                Make Appointment
            </button>
            <article className="animal_list">
                {
                    animals.map(a => {
                        const l = locations.find(l => l.id === a.locationId) || {}
                        const c = customers.find(c => c.id === a.customerId) || {}
                        return <Animal key={a.id} animal={a} location={l} customer={c} />
                
                    })
                }
            </article>
        </div>
    )
}