import React from "react";

const Notification = ({message, isError}) => {
    if (message === null) {
        return null
    }
    
    const notificationStyle = {
        border: `1px solid ${isError ? "red" : "green"}`,
        backgroundColor: isError ? "red" : "green",
        color: "white"
    }

    return (
        <div style={notificationStyle}>
            {message}
        </div>
    )
}

export default Notification