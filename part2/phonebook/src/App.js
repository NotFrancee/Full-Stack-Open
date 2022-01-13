import React, { useState, useEffect } from 'react'

import phonebookServices from './services/phonebookServices'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([]) 

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

    phonebookServices
      .addPhone(newPerson)
      .then(response => {        
        setPersons(prev => ([
          ...prev,
          response
        ]))
  
        setFormData({
          name: "",
          number: ""
        })
      })
  }
  
  const handleDelete = (id) => {
    const personToDelete = persons.find(person => person.id === id)
    const confirm = window.confirm(`do you really want to delete ${personToDelete.name}?`)

    if (!confirm) {
      return
    }
    
    phonebookServices
      .deletePhone(id)
      .then(res => {
        setPersons(prev => prev.filter(person => person.id !== id))
      })
  }
  useEffect(() => {
    phonebookServices
      .getAll()
      .then(phones => {
        setPersons(phones)
      })
  }, [])

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
        handleDelete={handleDelete}
        />
    </div>
  )
}

export default App