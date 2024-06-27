import BarChartComponent from "./BarChart";
import "../css/dashboard.css"
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { User, User_Activity, User_Average_Sessions } from "../interface/user";
import { getDataUser, getDataActivity, getDataUserAverageSessions } from "../services/serviceData";
import Cards from "./cards";
import LineChartComponent from "./LineChart";


const Dashboard = () => {
    const [userData, setUserData] = useState<User | null>(null);
    const [userActivity, setUserActivity] = useState<User_Activity | null>(null);
    const [userAverageSessions, setUserAverageSessions] = useState<User_Average_Sessions | null>(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchUserData = async () => {
            const userId = id ? parseInt(id) : undefined;
            if (userId !== undefined) {
                const userData: User = await getDataUser(userId);
                setUserData(userData);

                const activityData: User_Activity = await getDataActivity(userId);
                setUserActivity(activityData);

                const AverageSessionsData: User_Average_Sessions = await getDataUserAverageSessions(userId);
                setUserAverageSessions(AverageSessionsData);
            }
        }
        fetchUserData();
    }, [id]);

    return (
        <div className="mainContainerChart">
            <div className="titleUser">
                <h1>Bonjour {userData?.userInfos.firstName}</h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
            <div className="containerDashboard">

                <div className="leftContainer">
                    {userActivity && <BarChartComponent data={userActivity.sessions} />}
                    <div className="cardsGraphic">
                        {userAverageSessions && <LineChartComponent data={userAverageSessions.sessions} />}
                        {userAverageSessions && <LineChartComponent data={userAverageSessions.sessions} />}
                        {userAverageSessions && <LineChartComponent data={userAverageSessions.sessions} />}
                    </div>

                </div>
                {userData && <Cards data={userData.keyData} />} {/* verifie si userData est non null  */}
            </div>





        </div>
    );
}

export default Dashboard;
