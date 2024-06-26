// Cards.tsx
import { User } from "../interface/user";
import "../css/cards.css";
import energy from "../assets/energy.png";
import chicken from "../assets/chicken.png";
import apple from "../assets/apple.png";
import cheeseburger from "../assets/cheeseburger.png";

interface CardsProps {
    data: User["keyData"];
}

const Cards = ({ data }: CardsProps) => {
    console.log(data);

    return (
        <div className="containerCards">
            <div className="cards">
                <img className="energy" src={energy} alt="image energy" />
                <div>
                    <h3>{data.calorieCount}</h3>
                    <p>Calories</p>
                </div>
            </div>
            <div className="cards">
                <img className="energy" src={chicken} alt="image energy" />
                <div>
                    <h3>{data.proteinCount}</h3>
                    <p>Protéines</p>
                </div>
            </div>
            <div className="cards">
                <img className="energy" src={apple} alt="image energy" />
                <div>
                    <h3>{data.carbohydrateCount}</h3>
                    <p>Glucides</p>
                </div>
            </div>
            <div className="cards">
                <img className="energy" src={cheeseburger} alt="image energy" />
                <div>
                    <h3>{data.lipidCount}</h3>
                    <p>Lipides</p>
                </div>
            </div>
        </div>
    );
}

export default Cards;
