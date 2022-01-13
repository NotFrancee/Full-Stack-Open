import React from "react";

const Person = ({person, handleDelete}) => {
    const {name, number} = person
    return (
        <div>
            {name} - {number} <button onClick={() => handleDelete(person.id)}>Delete</button>
        </div>
    )
}

export default Person