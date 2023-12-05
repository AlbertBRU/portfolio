import './style.scss';

export default function Header() {
    return (
        <div className="header">
            <div className="header__title">
                <div className='header__title-prefix'>
                    Hey! Moi c'est
                </div>
                <div className='header__title-name'>
                    Albert BRU
                </div>
            </div>
            <div className="header__buttons">
                <a className="invisible" href="#">Home</a>
                <a href="#">Réalisations</a>
                <a href="#">Parcours</a>
                <a href="#">Contact</a>
            </div>
        </div>
    );
}