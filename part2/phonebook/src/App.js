import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleNewNameChange = (event) => {
    const {value} = event.target

    setNewName(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault() 

    const newPerson = {
      name: newName
    }
    setPersons(prev => ([
      ...prev,
      newPerson
    ]))
    setNewName("")
  }

  const numbersEl = persons.map(person => <p key={person.name}>{person.name}</p>)

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input 
                  value={newName} 
                  placeholder='New Name' 
                  onChange={handleNewNameChange}/>
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