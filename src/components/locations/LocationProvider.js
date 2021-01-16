import React, { useState, useEffect } from "react"
export const LocationContext = React.createContext()

export const LocationProvider = (props) => {
    const [locations, setLocations] = useState([])

    const getLocations = () => {
        return fetch("http://localhost:5000/locations?_expand=address")
            .then(res => res.json())
            .then(setLocations)
    }

    useEffect(() => {
        getLocations()
    }, [])

    useEffect(() => {
    }, [locations])

    return (
        <LocationContext.Provider value={{
            locations
        }}>
            {props.children}
        </LocationContext.Provider>
    )
}
