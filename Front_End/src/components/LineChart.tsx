import { CartesianGrid, Line, LineChart, Tooltip, ResponsiveContainer } from "recharts";
import { User_Average_Sessions } from "../interface/user";
import "../css/LineChart.css"

interface LineChartComponentProps {
    data: User_Average_Sessions["sessions"];
}

const LineChartComponent = ({ data }: LineChartComponentProps) => {
    return (
        <div className="ContainerLineChart">
            <ResponsiveContainer min-width="258px" height={263}>
                <LineChart data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Line type="monotone" dataKey="sessionLength" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
            <div className="legend" style={{ display: "flex", gap: 20, justifyContent: "center" }}>
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
