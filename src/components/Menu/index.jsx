import './style.scss';

export default function Menu() {
    return (
        <div className="header__menu">
            <a className="invisible" href="#home">AB</a>
            <div className="header__menu__dummy-space invisible"></div>
            <a className="invisible" href="#home">Home</a>
            <a href="#realisations">Réalisations</a>
            <a href="#parcours">Parcours</a>
            <a href="#contact">Contact</a>
        </div>
    );
}