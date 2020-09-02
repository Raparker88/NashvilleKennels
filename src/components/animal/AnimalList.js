import React, { useContext } from "react"
import { AnimalContext } from "./AnimalProvider"
import { Animal } from "./Animal"
import "./Animal.css"

export const AnimalList = () => {
    const { animals } = useContext(AnimalContext)

    return (
        <div className="animals">
        {
            animals.map(a => <Animal key={a.id} animal={a} />)
        }
        </div>
    )
}