import React, { useState, useEffect } from 'react'

import phonebookServices from './services/phonebookServices'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [formData, setFormData] = useState({
    name: "",
    number: ""
  })
  const [searchFilter, setSearchFilter] = useState("")
  const [notification, setNotification] = useState({
    message: null,
    isError: false
  })

  const resetFormData = () => {
    setFormData({
      name: "",
      number: ""
    })
  }

  const resetNotification = () => {
    setTimeout(() => {
      setNotification({
        message: null,
        isError: false
      })
    }, 3000);
  }

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

    const duplicate = persons.find(person => person.name === formData.name)
    if (duplicate) {
      if (duplicate.number === formData.number) {
        window.alert(`${formData.name} is already saved in your contacts!`)
        resetFormData() 
        return

      } else {
        const confirm = window.confirm(`${duplicate.name} is already saved in your contacts with number ${duplicate.number}. Do you want to replace this number with ${formData.number}?`)
        if (!confirm) {
          resetFormData() 
          return
        }

        const newPhone = {
          ...duplicate,
          number: formData.number
        }

        phonebookServices
          .editPhone(newPhone.id, newPhone)
          .then(editedPhone => {
            setPersons(prev => prev.map(person => person.id === editedPhone.id ? editedPhone : person))
            setNotification({
              message: `Successfully changed ${editedPhone.name} number to ${editedPhone.number}`,
              isError: false
            })
            
            resetFormData() 
            resetNotification() 
            return
          })


        return
      }


    }

    const newPerson = {
      name: formData.name,
      number: formData.number
    }

    phonebookServices
      .addPhone(newPerson)
      .then(newContact => {        
        setPersons(prev => ([
          ...prev,
          newContact
        ]))
        setNotification({
          message: `successfully added ${newContact.name} to contacts!`,
          isError: false
        })

        resetFormData()
        resetNotification()
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

        setNotification({
          message: `Successufly deleted ${personToDelete.name}`,
          isError: false
        })

        resetNotification()
      })

      .catch(err => {
        setNotification({
          message: `Couldn't delete ${personToDelete.name}: the contact has already been deleted before!`,
          isError: true
        })
        resetNotification() 
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
      <Notification message={notification.message} isError={notification.isError}/>

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