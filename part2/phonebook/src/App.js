import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      number: "555-555-555"
    }
  ]) 

  const [formData, setFormData] = useState({
    name: "",
    number: ""
  })

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

  const numbersEl = persons.map(person => <p key={person.name}>{person.name} - {person.number}</p>)

  return (
    <div>
      <h2>Phonebook</h2>
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