import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './nav.css'

const Nav = () => {
    return (
        <div className="nav">
            <div className="ui divider top"></div>
                <Link smooth to={'/mark/#profile'}>
                    Profile
                </Link>
                <Link smooth to={'/mark/#posts'}>
                    Posts
                </Link>
                <Link smooth to={'/mark/#projects'}>
                    Projects
                </Link>
                <Link smooth to={'/mark/#resume'}>
                    Resume
                </Link>
            <div className="ui divider bottom"></div>
        </div>
    )
}

export default Nav