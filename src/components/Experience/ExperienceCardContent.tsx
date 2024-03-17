import React from 'react';
import './ExperienceCardContent.css'

interface ExperienceCardContentProps {
    cardTitle?: string;
    cardSubTitle?: string;
    fromDate?: string;
    toDate?: string;
    detailedText?: string;
    techStack?: string[];
}

const ExperienceCardContent : React.FC<ExperienceCardContentProps> = (props) => {
    const { cardTitle, cardSubTitle, fromDate, toDate, detailedText, techStack } = props;

    return (
        <>
            <div className="card">
                <div className="card-title">{cardTitle}</div>
                <div className="card-subtitle">{cardSubTitle} ({fromDate} - {toDate})</div>
                <p className="detailed-text">{detailedText}</p>
                <div className="tech-stack">
                    {techStack && techStack.map((tech, index) => (
                        <div key={index} className="tech-stack-item">{tech}</div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ExperienceCardContent;
