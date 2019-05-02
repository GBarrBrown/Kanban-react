import React, {Fragment} from 'react'
import DisplayBoardCard from './DisplayBoardCard';

const App = () => {
    return(
        <Fragment>
            <h1>Hello, world!</h1>
            <DisplayBoardCard name="This is the title" description="This is the description"/>
            <DisplayBoardCard name="This is the title" description="This is the description"/>
            <DisplayBoardCard name="This is the title" description="This is the description"/>
        </Fragment>
    )
}

export default App