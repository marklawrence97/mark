import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './nav.css'

const Nav = () => {
    return (
        <div className="nav">
            <div className="ui divider top"></div>
                <Link smooth to={'/#profile'}>
                    Profile
                </Link>
                <Link smooth to={'/#posts'}>
                    Posts
                </Link>
                <Link smooth to={'/#projects'}>
                    Projects
                </Link>
                <Link smooth to={'/#resume'}>
                    Resume
                </Link>
            <div className="ui divider bottom"></div>
        </div>
    )
}

export default Nav