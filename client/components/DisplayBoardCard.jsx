import React from 'react'

const DisplayBoardCard = (props) => {
    return (
        <div>
            <h4>Title: {props.name}</h4>
            <h4>Description: {props.description}</h4>
        </div>
    )
}

export default DisplayBoardCard