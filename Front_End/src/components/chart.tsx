import LineChartComponent from "./LineChart";
import "../css/chart.css";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { User } from "../interface/user";
import { getDataUser } from "../services/serviceData";

const Chart = () => {
    const [userData, setUserData] = useState<User | null>(null);
    const { id } = useParams();

    // useEffet car asynchrone 

    useEffect(() => {
        const fetchData = async () => {

            const userId = id ? parseInt(id) : undefined;
            if (userId !== undefined) {
                const data: User = await getDataUser(userId);
                setUserData(data);
                console.log(data.userInfos, 'yazid');
            }

        }
        fetchData();


    }, [id]);
    return (

        <div className="mainContainerChart">

            <div className="titleUser">
                <h1>Bonjour {userData?.userInfos.firstName}</h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>

            <div>
                <LineChartComponent />
            </div>
        </div>

    );
}

export default Chart;
