import { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import resume from '/src/assets/data/resume.json';

import 'react-vertical-timeline-component/style.min.css';
import './style.scss';

export default function Parcours() {

    const formatDate = (date) => {
        const dateArray = date.split('-');
        const month = new Date(dateArray[0], dateArray[1] - 1, dateArray[2]).toLocaleString('fr-FR', { month: 'long' });
        return month.charAt(0).toUpperCase() + month.slice(1) + ' ' + dateArray[0];
    }

    const [expandedItems, setExpandedItems] = useState([]);

    return (
        <div className="parcours">
            <div className='title'>MON PARCOURS</div>
            <VerticalTimeline>
                {resume.work.map((work, index) => (
                    <VerticalTimelineElement
                        key={index}
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        // date={'du ' + work.startDate + ' au ' + work.endDate}
                        date={'De ' + formatDate(work.startDate) + ' à ' + formatDate(work.endDate)}
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    // icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">{work.position}</h3>
                        <h4 className="vertical-timeline-element-subtitle">{work.name}</h4>
                        <p>
                            {expandedItems.includes(index) ? work.summary : `${work.summary.substring(0, 150)}...`}
                            {!expandedItems.includes(index) && (
                                <div
                                    className="read-more"
                                    onClick={() => setExpandedItems([...expandedItems, index])}
                                >
                                    Read More
                                </div>
                            )}
                        </p>
                        <div key={index} className='work-highlight-container'>
                            {work.highlights.map((highlight, index) => (
                                <p key={index} className='work-highlight'>
                                    {highlight}
                                </p>
                            ))}
                        </div>
                    </VerticalTimelineElement>
                ))}
                {resume.education.map((education, index) => (
                    <VerticalTimelineElement
                        key={index}
                        className="vertical-timeline-element--education"
                        contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
                        date={'De ' + formatDate(education.startDate) + ' à ' + formatDate(education.endDate)}
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">{education.area}</h3>
                        <h4 className="vertical-timeline-element-subtitle">{education.studyType}</h4>
                        {/* add institution */}
                        <p>{education.institution}</p>
                    </VerticalTimelineElement>
                ))}

        </VerticalTimeline>
        </div >
    );
}