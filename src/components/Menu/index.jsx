import { useState } from 'react';
import './style.scss';

export default function Menu() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const menuClass = isMenuOpen ? 'menu-open' : '';
    const burgerClass = isMenuOpen ? 'burger-open' : '';

    return (
        <div className="header__menu">
            <a className="header__menu-logo invisible" href="#home">Albert&nbsp;Bru</a>

            <div className="header__menu__dummy-space invisible"></div>

            <a className={`invisible menu-home ${menuClass}`} href="#home" onClick={toggleMenu}> Accueil </a>
            <a className={`menu-realisations ${menuClass}`} href="#realisations" onClick={toggleMenu}> Réalisations </a>
            <a className={`menu-parcours ${menuClass}`} href="#parcours" onClick={toggleMenu}> Parcours </a>
            <a className={`menu-contact ${menuClass}`} href="#contact" onClick={toggleMenu}> Contact </a>

            <div className={`header__menu-burger invisible ${burgerClass}`} onClick={toggleMenu}>
                <span className="header__menu-burger-line line-1"></span>
                <span className="header__menu-burger-line line-2"></span>
                <span className="header__menu-burger-line line-3"></span>
            </div>
        </div>
    );
}