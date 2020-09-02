import React from "react"

export const Location = ({ location }) => (
    <section className="location">
        <h3 className="location__name">{location.name}</h3>
        <address>
            <div>{location.address}</div>
        </address>
    </section>
)