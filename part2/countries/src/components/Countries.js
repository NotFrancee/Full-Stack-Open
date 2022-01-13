import React, { useState } from "react";
import Country from "./Country";

const Countries = ({countriesToShow}) => {

    const [showingInfo, setShowingInfo] = useState("")

    const handleShow = (countryName) => {
        setShowingInfo(countryName)

        console.log(showingInfo)
    }

    const CountriesListEl = countriesToShow.map(country => {
        return (
            <Country 
                key={country.name.official} 
                country={country} 
                showingInfo={showingInfo === country.name.official}
                handleClick={() => handleShow(country.name.official)}/> 
        )
    })

    return countriesToShow.length === 1 
    ? (
        <>
            <Country 
                country={countriesToShow[0]}
                showingInfo={true}/>
        </>
    )

    : (
        <>
            {CountriesListEl}
        </>
    )
}

export default Countries