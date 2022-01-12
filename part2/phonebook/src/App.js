import React, { useState } from 'react'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 

  const [formData, setFormData] = useState({
    name: "",
    number: ""
  })

  const [searchFilter, setSearchFilter] = useState("")

  const handleFilterChange = (event) => {
    const {value} = event.target

    setSearchFilter(value.toLowerCase())
  }

  const handleFormChange = (event) => {
    const {value, name} = event.target

    setFormData(prev => ({
      ...prev, 
      [name]: value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault() 

    if (persons.filter(person => person.name === formData.name).length) {
      window.alert(`${formData.name} is already saved in your contacts!`)
      setFormData({
        name: "",
        number: ""
      })
      return
    }

    const newPerson = {
      name: formData.name,
      number: formData.number
    }
    setPersons(prev => ([
      ...prev,
      newPerson
    ]))

    setFormData({
      name: "",
      number: ""
    })
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter 
        searchFilter={searchFilter} 
        handleFilterChange={handleFilterChange}/>

      <h2>Add a new Contact</h2>

      <PersonForm 
        handleSubmit={handleSubmit}
        formData={formData}
        handleFormChange={handleFormChange}
      />

      <h2>Numbers</h2>

      <Persons 
        persons={persons}
        searchFilter={searchFilter}
        />
    </div>
  )
}

export default App