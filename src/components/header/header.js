import React from 'react';
import Mark from './Mark.jpg';
import './header.css'

const Header = () => {
    return (
        <div className="header-container">
            <img className="ui raised header-image" src={Mark} alt="On Holiday in San Fransisco"/>
            <div className="header-text">
                <h1>Mark Lawrence</h1>
                <p>Technical Consultant at <a href="https://www.wearetaplondon.com/" style={{textDecoration: "underline"}}>TAP London</a>, with a background in Mathematics and Computer Science.</p>
                <a href="https://github.com/marklawrence97" style={{color: "black"}}><i className="big github icon"></i></a>
                <a href="https://www.linkedin.com/in/mark-lawrence-8b5a99123/"><i className="big linkedin icon"></i></a>
            </div>
        </div>
    )
}

export default Header