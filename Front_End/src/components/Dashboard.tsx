import BarChartComponent from "./BarChart";
import "../css/dashboard.css";
import { useParams, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { User, User_Activity, User_Average_Sessions, User_Performance } from "../interface/user";
import { getDataUser, getDataActivity, getDataUserAverageSessions, getDataUserPerformance, }
    from "../services/serviceData";
import Cards from "./cards";
import LineChartComponent from "./LineChart";
import RadarChartComponent from "./RadarChart";
import PieChartComponent from "./PieChart";

const Dashboard = () => {
    const [userData, setUserData] = useState<User | null>(null);
    const [userActivity, setUserActivity] = useState<User_Activity | null>(null);
    const [userAverageSessions, setUserAverageSessions] = useState<User_Average_Sessions | null>(null);
    const [UserPerformance, setUserPerformance] = useState<User_Performance | null>(null);
    const { id } = useParams();
    const [searchParams] = useSearchParams();

    // localhost:4200/monapplication/id=123&mockedData=true

    useEffect(() => {
        const fetchUserData = async () => {
            const userId = id ? parseInt(id) : undefined;
            const useMockedData = searchParams.get('mockedData') === "true" ? !!searchParams.get('mockedData') : false;
            if (userId !== undefined) {
                const userData: User = await getDataUser(userId, useMockedData);
                setUserData(userData);

                const activityData: User_Activity = await getDataActivity(userId, useMockedData);
                setUserActivity(activityData);

                const AverageSessionsData: User_Average_Sessions = await getDataUserAverageSessions(userId, useMockedData);
                setUserAverageSessions(AverageSessionsData);

                const UserPerformance: User_Performance = await getDataUserPerformance(userId, useMockedData);
                setUserPerformance(UserPerformance);
            }
        };
        fetchUserData();
    }, [id, searchParams]);

    return (
        <div className="mainContainerChart">
            <div className="titleUser">
                <h1>
                    Bonjour <span>{userData?.userInfos.firstName}</span>
                </h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
            <div className="containerDashboard">
                <div className="leftContainer">
                    {userActivity && <BarChartComponent data={userActivity.sessions} />}
                    <div className="cardsGraphic">
                        {userAverageSessions && <LineChartComponent data={userAverageSessions.sessions} />}
                        {UserPerformance && <RadarChartComponent kind={UserPerformance.kind} data={UserPerformance.data} />}
                        {userData && <PieChartComponent data={userData.todayScore || userData.score || 0} />}
                    </div>
                </div>
                {userData && <Cards data={userData.keyData} />} {/* verifie si userData est non null  */}
            </div>
        </div>
    );
};

export default Dashboard;
