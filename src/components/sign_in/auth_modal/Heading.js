import React from 'react'
import "./auth.css"
const headstyles = {
    color: '#fff',  
}

function Heading() {
    return (
        <div  className="content" style={headstyles}>
            <div className="Heading">
                Get started
            <br/>
            <br/>
            <br/>
            <br/>
            </div>
            <div className="sub-heading">
               By clicking SignIn, you agree to our Terms. Learn how we process your data in our Privacy Policy and Cookie Policy .
            </div>
        </div>    
    )
}

export default Heading;
