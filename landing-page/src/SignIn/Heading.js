import React from 'react'

const headstyles = {
    color: '#fff',  
}

function Heading() {
    return (
        <div style={headstyles}>
            <div className="Heading">
                <h3 className="Heading__title Fz($ml) Fs(i) Tt(u) Mb(16px) Mt(200px)">
                    <span>Get started</span>
                </h3>
                <div className="Heading__subtitle Fz($ms) C($c-secondary)">
                <div className=""></div>
                </div>
            </div>
            <div className="W(100%) Mt(20px) Mb(30px) Fz($xs) C($c-base)">
                <span>By clicking  
                    <span className="Tt(c)">
                        <span> SignIn</span>
                    </span>, you agree to our 
                    <a className="C($c-secondary) Td(u) Td(n):h" href="https://www.gotinder.com/terms?locale=en" target="_blank" rel="noopener noreferrer">
                        <span>Terms</span>
                    </a>. Learn how we process your data in our 
                    <a className="C($c-secondary) Td(u) Td(n):h" href="https://www.gotinder.com/privacy?locale=en" target="_blank" rel="noopener noreferrer">
                        <span>Privacy Policy</span>
                    </a> and 
                    <a className="C($c-secondary) Td(u) Td(n):h" href="https://www.gotinder.com/cookie-policy?locale=en" target="_blank" rel="noopener noreferrer">
                    <span>Cookie Policy</span>
                    </a>.
                </span>
            </div>
        </div>    
    )
}

export default Heading;
