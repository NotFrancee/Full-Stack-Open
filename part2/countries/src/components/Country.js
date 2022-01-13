import React, { useEffect, useState } from "react";

import axios from "axios"
import CountryDetail from "./CountryDetail";

const Country = ({country, showingInfo, handleClick}) => {
    const {name} = country
    
    return showingInfo
    ? (
        <>
            <CountryDetail country={country}/>
        </>
    )
    
    : (
        <>
            <p>{name.common}</p>
            <button onClick={handleClick}>show</button>
        </>
    )
}

export default Country