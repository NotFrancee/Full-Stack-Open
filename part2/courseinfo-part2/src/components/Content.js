import React from "react";
import Part from "./Part";

const Content = ({course}) => {

    const partsEl = course.parts.map(part => (
        <Part 
            key={part.id}
            part={part}/> 
    ))

    const totalExercises = course.parts.reduce((s, p) => s + p.exercises, 0)

    return (
        <>
        {partsEl}
        <p><strong>Total of {totalExercises} Exercises</strong></p>
        </>
    )
}

export default Content