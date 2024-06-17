import "../css/header.css";
import logo from "../assets/logo.png";
const Header = () => {
    return (
        <nav className="navbar">
            <ul className="navlinks">
                <img className="logo" src={logo} alt="logo" />
                <li className="link">Accueil</li>
                <li className="link">Profil</li>
                <li className="link">Réglage</li>
                <li className="link">Communauté</li>

            </ul>
        </nav>
    );
}

export default Header;
