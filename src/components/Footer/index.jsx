import './style.scss';

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer__signature">
                Albert BRU
                <span className="footer__signature__copyright">
                    ©2023 - Albert BRU - Tous droits réservés
                </span>
            </div>
            <div className="footer__social">
                <a href="https://www.linkedin.com/in/albertbrudigital/" target="_blank" rel="noreferrer">
                    <img src="/src/assets/images/logo-linkedin.svg" alt="linkedin" />
                </a>
                <a href="https://www.github.com/albertbru" target="_blank" rel="noreferrer">
                <img src="/src/assets/images/logo-github.svg" alt="linkedin" />
                </a>
            </div>
        </div>
    );
}