import { useState, useEffect } from 'react';
import Header from '../Header';

import './style.scss';
import './scroll.scss';

export default function Home() {

    const [age, setAge] = useState(31);

    useEffect(() => {
        const currentDate = new Date();
        const birthDate = new Date('1992-08-07');

        const differenceInMilliseconds = currentDate - birthDate;

        const ageInYears = Math.floor(differenceInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));

        setAge(ageInYears);
    }, [])

    return (
        <div className="home" id="home">
            <div className="header">
                <div className="header__title">
                    <div className="header__title-prefix">
                        Hey! 👋 Moi c'est
                    </div>
                    <div className="header__title-name">
                        Albert BRU
                    </div>
                </div>
            </div>            
            <div className="header__menu">
                <a className="invisible" href="#home">Home</a>
                <a href="#realisations">Réalisations</a>
                <a href="#parcours">Parcours</a>
                <a href="#contact">Contact</a>
            </div>
            <div className='home__content max-width'>
                <p>
                    Développeur web junior de {age} ans, j'ai entrepris une aventure passionnante dans le monde du développement web il y a deux ans. À l'origine, j'ai arpenté les méandres du marketing digital, cherchant constamment des moyens créatifs pour raconter des histoires et créer des connexions en ligne.
                    <br />
                    Ma route m'a conduit à une reconversion qui a changé ma perspective de manière significative. Aujourd'hui, je suis plongé dans le code, transformant des idées en lignes de commande et des projets numériques en réalité interactive. C'est incroyable de voir comment deux mondes en apparence différents peuvent se compléter si parfaitement.
                </p>
                <p>
                    Ce portfolio est mon petit coin du web où je partage mes créations, mes apprentissages et mes moments de triomphe (et parfois de désespoir, soyons honnêtes !).
                    <br />
                    N'hésitez pas à me laisser un petit message si vous avez des questions, des idées à partager ou simplement pour discuter des dernières tendances en matière de développement web. Merci de faire partie de cette aventure avec moi !
                </p>
                <p>
                    À bientôt sur le code et au-delà !  🚀
                </p>
            </div>
            <div className='home__footer'>
                <div className='mouse' />
                <p>Voir plus</p>
            </div>
        </div>
    );
}