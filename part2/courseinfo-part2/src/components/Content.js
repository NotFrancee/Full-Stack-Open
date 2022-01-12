import React from "react";
import Part from "./Part";

const Content = ({course}) => {

    const partsEl = course.parts.map(part => (
        <Part 
            key={part.id}
            part={part}/> 
    ))

    return (
        <>
        {partsEl}
        </>
    )
}

export default Content