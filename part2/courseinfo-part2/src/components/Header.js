import React from "react";
import Course from "./Course";

const Header = ({course}) => {
    return (
        <h1>{course.name}</h1>
    )
}

export default Header