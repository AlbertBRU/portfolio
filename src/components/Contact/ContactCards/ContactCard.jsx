import { Tooltip } from 'react-tooltip';


import { useRef, useState } from 'react';
import './style.scss';


export default function ContactCard({
    link,
    buttonContent,
    name
}) {

    const [copied, setCopied] = useState(false);
    const tooltipRef = useRef();

    const handleCopy = () => {
        navigator.clipboard.writeText(link);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    const getTooltipContent = () => {
        if (name === 'email') {
            return copied ? 'Adresse mail copiée !' : 'Cliquer pour copier';
        } else if (name === 'phone') {
            return copied ? 'Numéro de téléphone copié !' : 'Cliquer pour copier';
        } else {
            return null;
        }
    };


    return (
        <div
            className={`contact__infos__cards__card card__${name}`}
            onClick={() => {
                if (name === 'email' || name === 'phone') {
                    handleCopy();
                } else {
                    window.open(`https://${link}`, '_blank');
                }
            }}
            data-tooltip-id="tooltip-contact"
            data-tooltip-content={getTooltipContent()}
            ref={tooltipRef}
        >
            <img
                src={`/portfolio/images/contact/logo-${name}.svg`}
                alt={name}
                className='contact__infos__cards__card__image'
            />
            <p>{link}</p>
            <p className='contact__infos__cards__card__button-text'>{buttonContent}</p>

            {getTooltipContent() && <Tooltip id="tooltip-contact"/>}
        </div>
    )

}