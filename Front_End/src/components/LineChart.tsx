import { LineChart, Line, Tooltip, ResponsiveContainer } from 'recharts';
import { User_Average_Sessions } from "../interface/user";
import "../css/LineChart.css";

interface LineChartComponentProps {
    data: User_Average_Sessions["sessions"];
}

const LineChartComponent = ({ data }: LineChartComponentProps) => {
    return (
        <div className="containerLineChart">
            <div className="title">
                Durée moyenne des sessions
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ bottom: 10 }}>
                    <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF" strokeWidth={2.5} dot={false} />
                    <Tooltip cursor={false} wrapperStyle={{ outline: "none", fontWeight: 600 }} />
                </LineChart>
            </ResponsiveContainer>
            <div className="legend">
                <p>L</p>
                <p>M</p>
                <p>M</p>
                <p>J</p>
                <p>V</p>
                <p>S</p>
                <p>D</p>
            </div>
        </div>
    );
}

export default LineChartComponent;
