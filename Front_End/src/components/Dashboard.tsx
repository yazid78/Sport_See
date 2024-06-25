import LineChartComponent from "./LineChart";
import "../css/chart.css";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { User, User_Activity } from "../interface/user";
import { getDataUser, getDataActivity } from "../services/serviceData";

const Dashboard = () => {
    const [userData, setUserData] = useState<User | null>(null);
    const [userActivity, setUserActivity] = useState<User_Activity | null>(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchUserData = async () => {
            const userId = id ? parseInt(id) : undefined;
            if (userId !== undefined) {
                const userData: User = await getDataUser(userId);
                setUserData(userData);

                const activityData: User_Activity = await getDataActivity(userId);
                setUserActivity(activityData);
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
            <div>
                <LineChartComponent data={userActivity?.sessions} />
            </div>
        </div>
    );
}

export default Dashboard;
