
import { NavLink } from "react-router-dom";
import "../css/home.css"
import getData from "../services/serviceData.ts"

const Home = () => {

    const data = getData(18)
    console.log(data);

    return (
        <div className="userName">
            Choix du profil :
            <NavLink to="user/12">👦 Karl </NavLink>
            <NavLink to="user/18">👩 Cecilia </NavLink>
        </div>
    );
}

export default Home;
