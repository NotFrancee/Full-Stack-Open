import React from "react";
import Country from "./Country";

const Content = ({countries, searchQuery}) => {

    console.log(countries)
    const countriesToShow = countries.filter(country => (country.name.common.toLowerCase().includes(searchQuery)))
    const countriesNo = countriesToShow.length

    let contentEl

    if (countriesNo === 1) {
        contentEl = <Country 
                        country={countriesToShow[0]} 
                    />
    } else if (countriesNo < 11) {
        contentEl = countriesToShow.map(country => {
            return <p 
                key={country.name.official}
                >{country.name.common}
            </p>
        })
    } else {
        contentEl = <p>Too many Matches, specify more filters</p>
    }

    console.log(countriesNo);
    console.log(contentEl);

    return (
        <>
        {contentEl}
        </>
    )
}

export default Content