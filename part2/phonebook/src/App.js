import React, { useState } from 'react'

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

  const personsToShow = searchFilter ? persons.filter(person => person.name.toLowerCase().includes(searchFilter)) : persons

  const numbersEl = personsToShow.map(person => <p key={person.name}>{person.name} - {person.number}</p>)

  return (
    <div>
      <h2>Phonebook</h2>

      filter shown with <input 
        name='searchFilter'
        value={searchFilter} 
        placeholder='Search Name' 
        onChange={handleFilterChange}
      />

      <h2>Add a new Contact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input 
                  name='name'
                  value={formData.name} 
                  placeholder='New Name' 
                  onChange={handleFormChange}
                  />
        </div>
        <div>
          number: <input 
                      name='number'
                      value={formData.number} 
                      placeholder='Phone Number' 
                      onChange={handleFormChange}/>
        
        </div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {numbersEl}
    </div>
  )
}

export default App