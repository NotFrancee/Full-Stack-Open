import React, { useState, useEffect } from 'react'

import axios from "axios"

import Content from './components/Content'

const App = () => {

  const [searchQuery, setSearchQuery] = useState("")
  const [countries, setCountries] = useState([])

  const handleChange = (event) => {
    const {value} = event.target

    setSearchQuery(value)
  }

  useEffect(() => {
    console.log("effect started");

    axios 
      .get("https://restcountries.com/v3.1/all")
      .then(res => {
        console.log("promise resolved");

        setCountries(res.data)
      })
  }, [])

  return (
    <div>
      Find Country: <input 
        value={searchQuery}
        placeholder='Country Name'
        onChange={handleChange}/>

      <Content countries={countries} searchQuery={searchQuery}/>
    </div>
  )
}

export default App;
