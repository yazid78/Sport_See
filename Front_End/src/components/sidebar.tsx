import "../css/sidebar.css";
import iconeSideBar from "../assets/iconeSideBar.png";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <img src={iconeSideBar} alt="icone sideBar" />
            <p className="paragraphe">Copiryght, SportSee 2020</p>
        </div>
    );
}

export default Sidebar;
