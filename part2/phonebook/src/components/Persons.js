import React from "react";
import Person from "./Person";

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