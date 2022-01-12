import React from "react";
import Part from "./Part";

const Content = ({course}) => {

    const partsEl = course.parts.map(part => (
        <Part 
            key={part.id}
            part={part}/> 
    ))

    const totalExercises = course.parts.reduce((sum, part) => {
        return sum + part.exercises
    }, 0)

    return (
        <>
        {partsEl}
        <p>Total of {totalExercises} Exercises</p>
        </>
    )
}

export default Content