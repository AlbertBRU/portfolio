import ContactCard from './ContactCards/ContactCard';
import './style.scss';

export default function Contact() {
    return (
        <div className="contact">
            <h2>Me contacter</h2>

            <div className="contact__picture">
                <img
                    src="/src/assets/images/photo-profil.png"
                    alt="Photo d'Albert"
                    className='contact__picture__image'
                />
                <p className='contact__picture__text'>It's a me !</p>
            </div>

            <div className="contact__infos">
                <p className='contact__infos__text'>Vous pouvez me contacter facilement en utilisant une des options ci-dessous :</p>


                <div className="contact__infos__cards">
                    <img src="/src/assets/images/contact/resume.png" alt="resume albert bru" className='contact__infos__resume' />
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
        </div>
    );
}