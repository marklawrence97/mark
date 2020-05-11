import React from 'react';
import TimeLineContent from '../timelineContent/timelineContent';
import './timeline.css';


const TimeLine = () => {
    const pdfUrl = process.env.PUBLIC_URL + '/resume.pdf'
    return (
        <>
        <h2 style={{marginLeft: "20%"}}>
            Resume
        </h2>
        <div style={{marginLeft: "20%", marginBottom: "2%"}}>
            <p>You can view my resume <a href={pdfUrl} target="_blank">here</a>.</p>
        </div>
        <div className="timeline-fade">
        </div>
        <div className="timeline">
            <TimeLineContent
                position="right"
                title="University of Bath"
                role="Computer Science MSc"
                date="May 2020 - Current"
                description="Key Modules: Artificial Intelligence, Human Computer Interaction, Intelligent Control and Cognitive Systems"
                />
            <TimeLineContent
                position="left"
                title="TAP London"
                role="Technical Consultant"
                date="Oct 2019 - Current"
                description=" Provide custom solutions for the Adobe Marketing Cloud. This has involved creating internal-facing web apps and implementing data-driven customer models, for a variety of clients including Metlife, Allianz and Sears."
                />
            <TimeLineContent
                position="right"
                title="University of Leeds"
                role="Mathematics BSc"
                date="Sep 2015 - June 2019"
                description="Dissertation title: The Spatial Prisoner’s Dilemma and the Evolution of Cooperation."
                />
        </div>
        <div className="timeline-bottom">
        </div>
        </>
    )
}

export default TimeLine;