import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="ui divider">
            </div>
            <div className="footer-content" style={{display: "flex", justifyContent: "space-between"}}>
                <p>Mark Lawrence</p>
                <p className="email">mark_lawrence97@icloud.com</p>
                <div>
                <a href="https://github.com/marklawrence97" style={{color: "black"}}><i className="github icon"></i></a>
                <a href="https://www.linkedin.com/in/mark-lawrence-8b5a99123/"><i className="linkedin icon"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;