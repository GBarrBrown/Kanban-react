import React from 'react'

const DisplayBoardCard = (props) => {
    return (
        <div className="BoardCard">
            <p>Title: {props.name}</p>
            <p>Description: {props.description}</p>
        </div>
    )
}

export default DisplayBoardCard