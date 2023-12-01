import './style.scss';

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__left">
                <div className="navbar__left__logo">
                    Albert BRU
                </div>
            </div>
            <div className="navbar__right">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </div>
        </div>
    );
}