import './style.scss';

export default function RealElement({
    title,
    content,
    position,
    tags = [],
    src = 'https://picsum.photos/640/360'
}) {
    return (
        <div className={`real-element ${position === 'left' ? 'real-element__left' : 'real-element__right'}`}>

            {position === 'right' &&
                <div className='real-element__image'>
                    <span className='real-element__image__circle-red' />
                    <span className='real-element__image__circle-yellow' />
                    <span className='real-element__image__circle-green' />
                    <img src={src} alt="realisation" />
                </div>
            }

            <div className='real-element__content'>
                <h3>{title}</h3>
                <div className='real-element__tags'>
                    {tags.map((tag, index) => (
                        <span className={`techno-tag techno-tag--${tag}`} key={index}>{tag}</span>
                    ))}
                </div>
                <p>{content}</p>
            </div>

            {position === 'left' &&
                <div className='real-element__image'>
                    <span className='real-element__image__circle-red' />
                    <span className='real-element__image__circle-yellow' />
                    <span className='real-element__image__circle-green' />
                    <img src={src} alt="realisation" />
                </div>
            }

        </div>
    );
}