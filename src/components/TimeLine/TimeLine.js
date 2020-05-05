import React from 'react';
import TimeLineContent from '../timelineContent/timelineContent';
import './timeline.css';


const TimeLine = () => {
    return (
        <>
        <h2 style={{marginLeft: "20%"}}>
            Resume
        </h2>
        <div className="timeline-fade">
        </div>
        <div className="timeline">
            <TimeLineContent
                position="right"
                title="University of Bath"
                role="Computer Science MSc"
                date="May 2020 - Current"
                />
            <TimeLineContent
                position="left"
                title="TAP London"
                role="Technical Consultant"
                date="Oct 2019 - Current"
                />
            <TimeLineContent
                position="right"
                title="University of Leeds"
                role="Mathematics BSc"
                date="Sep 2015 - June 2019"
                />
        </div>
        <div className="timeline-bottom">
        </div>
        </>
    )
}

export default TimeLine;