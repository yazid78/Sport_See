
import { NavLink } from "react-router-dom";
import "../css/home.css"


const Home = () => {



    return (
        <div className="userName">
            Choix du profil :
            <NavLink to="user/12">👦 Karl </NavLink>
            <NavLink to="user/18">👩 Cecilia </NavLink>
        </div>
    );
}

export default Home;
