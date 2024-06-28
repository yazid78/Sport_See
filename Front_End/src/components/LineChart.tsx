import { CartesianGrid, Line, LineChart, Tooltip, ResponsiveContainer } from "recharts";
import { User_Average_Sessions } from "../interface/user";
import "../css/LineChart.css"

interface LineChartComponentProps {
    data: User_Average_Sessions["sessions"];
}

const LineChartComponent = ({ data }: LineChartComponentProps) => {
    return (
        <div className="ContainerLineChart">
            <ResponsiveContainer>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={false} />
                    <Tooltip />
                    <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF" dot={false} />
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
