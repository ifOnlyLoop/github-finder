import React, {Fragment} from 'react'

const About = (props) => {
    return (
        <Fragment>
            <h1>About This Apps</h1>
            <p>This app was built from scratch so I can learn fetching data from an api.</p> 
            <p>It was built using classes at first then replaced with functions and hooks. </p><p>Finally, Context was intreduced to avoid props drilling as simple alternative to Redux </p>
            
        </Fragment>
    )
}

export default About
