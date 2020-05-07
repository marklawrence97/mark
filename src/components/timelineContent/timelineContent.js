import React from 'react';
import './timelineContent.css';

const timelineContent = ({ position, title, role, date, description}) => {
    return (
        <div className={`container ${position}`}>
            <p className="desktop">{role} at</p>       
            <div className="ui raised card">
                <div className="content timeline-content"> 
                    <p className="mobile">{role} at</p>  
                    <h3>{title}</h3>
                    <p className="date mobile">{date}</p>
                    <p className="mobile">{description}</p>
                </div>
            </div>
            <p className="date desktop">{date}</p>
            <p className="desktop">{description}</p>
        </div>
    )
}

export default timelineContent