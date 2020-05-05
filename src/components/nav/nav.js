import React from 'react';
import './nav.css'

const Nav = () => {
    return (
        <div className="nav">
            <div className="ui divider top"></div>
                <a href="">
                    Profile
                </a>
                <a href="">
                    Posts
                </a>
                <a href="">
                    Projects
                </a>
                <a href="">
                    Resume
                </a>
            <div className="ui divider bottom"></div>
        </div>
    )
}

export default Nav