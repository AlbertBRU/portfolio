import RealElement from '/src/components/Realisations/RealElement';
import data from '/src/assets/data/realisations.json';

import './style.scss';

export default function Realisations() {
    return (
        <div className="realisations">
            <div className='max-width'>
                <h2>Realisations</h2>
                {data.realisations.map((real, index) => (
                    <RealElement
                        key={index}
                        position={index % 2 === 0 ? 'left' : 'right'}
                        tags={real.tags}
                        src={real.image}
                        title={real.title}
                        subtitle={real.subtitle}
                        content={real.content}
                    />
                ))}
            </div>
        </div>
    );
}