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

                <button className='contact__infos__button'>
                    <img src="/src/assets/images/download-icon.png" alt="Télécharger mon CV" className='contact__infos__button__image' />
                    télécharger mon CV format PDF
                </button>

                <div className="contact__infos__links">

                    <div className="contact__infos__links__container contact__infos__links__linkedin">
                        <img 
                            src="/src/assets/images/contact/logo-linkedin-white.svg" 
                            alt="LinkedIn" 
                            className='contact__infos__links__image' 
                            />
                        <p>linkedin.com/in/albertbrudigital</p>
                        <p className='contact__infos__links__container__button-text'>Sur LinkedIn</p>
                    </div>

                    <div className="contact__infos__links__container contact__infos__links__email">
                        <img 
                            src="/src/assets/images/contact/email.svg" 
                            alt="Email" 
                            className='contact__infos__links__image' 
                            />
                        <p>albertbru01@gmail.com</p>
                        <p className='contact__infos__links__container__button-text'>Par email</p>
                    </div>

                    <div className="contact__infos__links__container contact__infos__links__github">
                        <img 
                            src="/src/assets/images/contact/logo-github-white.svg" 
                            alt="GitHub" 
                            className='contact__infos__links__image' 
                            />
                        <p>github.com/AlbertBRU</p>
                        <p className='contact__infos__links__container__button-text'>Sur GitHub</p>
                    </div>

                </div>
            </div>
        </div>
    );
}