import { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import WorkIcon from '/portfolio/src/assets/images/work.svg?react';
import SchoolIcon from '/portfolio/src/assets/images/school.svg?react';
import DoneIcon from '/portfolio/src/assets/images/done.svg?react';

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
        <div className="parcours" id="parcours">
            <h2 className='parcours-title'>Mon parcours</h2>
            <VerticalTimeline>
                {resume.work.map((work, index) => (
                    <VerticalTimelineElement
                        key={index}
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date={'De ' + formatDate(work.startDate) + ' à ' + formatDate(work.endDate)}
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">{work.position}</h3>
                        <h4 className="vertical-timeline-element-subtitle">{work.name}</h4>
                        <p className="vertical-timeline-element-location">
                            {work.location}
                        </p>
                        <p className='vertical-timeline-element-content-text'>
                            {expandedItems.includes(index) ? work.summary : `${work.summary.substring(0, 200)}...`}
                        </p>
                        {!expandedItems.includes(index) && (
                            <div
                                className="read-more"
                                onClick={() => setExpandedItems([...expandedItems, index])}
                            >
                                Cliquer ici pour voir plus
                            </div>
                        )}
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
                        icon={<SchoolIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">{education.area}</h3>
                        <h4 className="vertical-timeline-element-subtitle">{education.studyType}</h4>
                        <p>{education.institution}</p>
                    </VerticalTimelineElement>
                ))}
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    icon={<DoneIcon />}
                />
            </VerticalTimeline>
        </div >
    );
}