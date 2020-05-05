import React from 'react';
import './timelineContent.css';

const timelineContent = ({ position, title, role, date }) => {
    return (
        <div className={`container ${position}`}>
            <div className="ui raised card">
                <div className="content">
                    <p>{role} at</p>
                    <h3>{title}</h3>
                    <p className="date">{date}</p>
                </div>
            </div>
        </div>
    )
}

export default timelineContent