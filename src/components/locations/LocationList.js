import React, { useContext } from "react"
import { LocationContext } from "./LocationProvider"
import Location from "./Location"
import "./Location.css"

export default (props) => {
    const { locations } = useContext(LocationContext)

    return (
        <>
            <h1>Locations</h1>
            <div className="Locations">
                {
                    
                    locations.map(t => {

                        return <Location key={t.id} Location={t} {...props} />
                        
                    }) 
                }

            </div>
        </>
    )
}
