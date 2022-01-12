import React from "react";
import Person from "./Person";

const Persons = ({persons, searchFilter}) => {

    const personsToShow = searchFilter 
        ? persons.filter(person => person.name.toLowerCase().includes(searchFilter)) 
        : persons

    const personsEl = personsToShow.map(person => (
        <Person person={person} key={person.name} />
    ))
    
    return (
        <>
        {personsEl}
        </>
    )
}

export default Persons