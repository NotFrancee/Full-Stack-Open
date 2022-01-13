import React from "react";

const Country = ({country}) => {
    const {name, capital, population, languages, flags} = country

    const languagesEl = Object.keys(languages).map(language => {
        return (
            <li>{languages[language]}</li>
        )
    })
    return (
        <>
            <h1>{name.common}</h1>
            <p>Capital: {capital.join(" ")}</p>
            <p>Population: {population}</p>

            <h2>Languages</h2>

            <ul>
                {languagesEl}
            </ul>

            <img src={flags.svg} alt={`${name.common} flag`} />
        </>
    )
}

export default Country