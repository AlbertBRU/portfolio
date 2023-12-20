import './style.scss';

export default function ContactCard({
    link,
    buttonContent,
    name

}) {
    return (
        <div className={`contact__infos__cards__card card__${name}`}>
            <img
                src={`/src/assets/images/contact/logo-${name}.svg`}
                alt={name}
                className='contact__infos__cards__card__image'
            />
            <p>{link}</p>
            <p className='contact__infos__cards__card__button-text'>{buttonContent}</p>
        </div>
    )
}
