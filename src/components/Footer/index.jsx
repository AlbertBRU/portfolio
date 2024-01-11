import './style.scss';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="footer">
            <div className="footer__signature">
                Albert BRU
                <span className="footer__signature__copyright">
                    ©{currentYear} - Albert BRU - Tous droits réservés
                </span>
            </div>
            <div className="footer__social">
                <a href="https://www.linkedin.com/in/albertbrudigital/" target="_blank" rel="noreferrer">
                    <img src="/portfolio/images/contact/logo-linkedin-gradient.svg" alt="linkedin" />
                </a>
                <a href="https://www.github.com/albertbru" target="_blank" rel="noreferrer">
                <img src="/portfolio/images/contact/logo-github-gradient.svg" alt="linkedin" />
                </a>
            </div>
        </div>
    );
}