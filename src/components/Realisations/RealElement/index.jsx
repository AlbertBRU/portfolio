import { useState } from 'react';
import './style.scss';

export default function RealElement({
    title,
    subtitle = '',
    content,
    position,
    tags = [],
    image = 'https://picsum.photos/640/360',
    gif,
}) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className={`real-element ${position === 'left' ? 'real-element__left' : 'real-element__right'}`}
        >

            <div className='real-element__content'>
                <div className='real-element__content__title'>
                    <p className='real-element__content__title__title'>{title} </p>
                    {subtitle &&
                        <>
                            <span className='real-element__content__title__separator' />
                            <p className='real-element__content__title__subtitle'>{subtitle}</p>
                        </>
                    }
                </div>
                <div className='real-element__tags'>
                    {tags.map((tag, index) => (
                        <span className={`techno-tag techno-tag--${tag.toLowerCase()}`} key={index}>{tag}</span>
                    ))}
                </div>
                <p>{content}</p>
            </div>

            <div className='real-element__image'>
                <div className='real-element__image-container'> 
                    <span className='real-element__image__circle-red' />
                    <span className='real-element__image__circle-yellow' />
                    <span className='real-element__image__circle-green' />
                    <img
                        src={gif && hovered ? gif : image}
                        alt="realisation"
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                    />
                </div>
            </div>


        </div>
    );
}