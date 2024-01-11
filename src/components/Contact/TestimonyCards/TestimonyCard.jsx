import './style.scss';

export default function TestimonyCard({
    name,
    position,
    testimony,
}) {
    return (
        <div className='contact__carousel__card'>
        <img
            className="contact__carousel__card__image"
            src={`/portfolio/src/assets/images/contact/carousel/${name.toLowerCase()}.png`}
        />
        <div className="contact__carousel__card__container">
            <div className="contact__carousel__card__container__name">{name}</div>
            <div className="contact__carousel__card__container__position">{position}</div>
            <div className="contact__carousel__card__container__text">
                <p>{testimony}</p>
            </div>
        </div>
    </div>
    )
}
