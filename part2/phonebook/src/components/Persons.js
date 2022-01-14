import React from "react";

const Person = ({person, handleDelete}) => {
    const {name, number} = person
    return (
        <div>
            {name} - {number} <button onClick={() => handleDelete(person.id)}>Delete</button>
        </div>
    )
}

const Persons = ({persons, searchFilter, handleDelete}) => {

    const personsToShow = persons.filter(person => person.name.toLowerCase().includes(searchFilter)) 

    const personsEl = personsToShow.map(person => (
        <Person person={person} key={person.name} handleDelete={handleDelete}/>
    ))
    
    return (
        <>
        {personsEl}
        </>
    )
}

export default Persons