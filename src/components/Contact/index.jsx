import { Carousel } from 'react-responsive-carousel';

import testimonies from '/src/assets/data/testimony.json';
import ContactCard from './ContactCards/ContactCard';
import TestimonyCard from './TestimonyCards/TestimonyCard';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './style.scss';

export default function Contact() {
    return (
        <div className="contact" id="contact">
            <h2>Me contacter</h2>

            <div className="contact__picture">
                <img
                    src="/portfolio/images/contact/carousel/albert.png"
                    alt="Photo d'Albert"
                    className='contact__picture__image'
                />
                <p className='contact__picture__text'>It's a me !</p>
            </div>

            <div className="contact__infos">
                <p className='contact__infos__text'>Vous pouvez me contacter facilement en utilisant une des options ci-dessous :</p>

                <button className="contact__infos__dl-button">
                    <a href="/portfolio/images/contact/resume.pdf" download="CV-albert-bru">
                        <img src='/portfolio/images/contact/download-icon.png' />
                        Télécharger mon CV au format PDF
                    </a>
                </button>

                <div className="contact__infos__cards">
                    <ContactCard
                        link="linkedin.com/in/albertbrudigital"
                        buttonContent="Sur LinkedIn"
                        name="linkedin"
                    />
                    <ContactCard
                        link="albertbru01@gmail.com"
                        buttonContent="Par email"
                        name="email"
                    />
                    <ContactCard
                        link="github.com/AlbertBRU"
                        buttonContent="Sur GitHub"
                        name="github"
                    />
                    <ContactCard
                        link="06 01 04 28 03"
                        buttonContent="Appelez-moi !"
                        name="phone"
                    />
                </div>
            </div>

            <h3>Ils parlent de moi...</h3>
            <h4>... et en bien (pour la plupart)</h4>

            <Carousel
                className="contact__carousel"
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={6600}
            >

                {testimonies.testimonies.map((testimony, index) => (
                    <TestimonyCard
                        key={index}
                        name={testimony.name}
                        position={testimony.position}
                        testimony={testimony.testimony}
                    />
                ))}

                {/* <TestimonyCard
                    name="Louise"
                    position="Ancienne collègue"
                    testimony="J'ai eu l'opportunité de travailler avec Albert lors de son alternance en tant que Concepteur Développeur d'Applications au sein de l'École O'clock.
                    C'était un vrai plaisir d'avoir une personne aussi impliquée et dynamique sur le projet, qui a toujours su être force de proposition quand je manquais d'idées et pédagogue lorsque je voulais mieux comprendre certains concepts techniques. Albert a fait preuve d'une excellente compréhension des enjeux et des exigences du projet et a su y répondre avec professionnalisme et créativité.
                    Je recommande chaleureusement ce profil et serais enchantée de collaborer à nouveau avec lui."
                />

                <TestimonyCard
                    name="Albert"
                    position="Moi-même"
                    testimony="Ce gars la, c'est un type bien. Il est sympa, il est drôle, il est beau, il est intelligent, il est modeste, il est humble, il est gentil, il est généreux, il est altruiste, il est serviable, il est courageux, il est chez lui, et il cherche du taff."
                /> */}
            </Carousel>
        </div>
    );
}