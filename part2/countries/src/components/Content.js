import React from "react";
import Countries from "./Countries";

const Content = ({countries, searchQuery}) => {
    const countriesToShow = countries.filter(country => (country.name.common.toLowerCase().includes(searchQuery)))

    return countriesToShow.length > 10 
    ? (
        <p>Too many Matches, specify more filters</p>
    )

    : (
        <>
            <Countries countriesToShow={countriesToShow}/>
        </>
    )
}

export default Content