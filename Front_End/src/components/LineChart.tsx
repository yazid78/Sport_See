import { CartesianGrid, Line, LineChart, Tooltip, } from "recharts";
import { User_Average_Sessions } from "../interface/user";


interface LineChartComponentProps {
    data: User_Average_Sessions["sessions"];
}

const LineChartComponent = ({ data }: LineChartComponentProps) => {
    return (
        <div>

            <LineChart width={258} height={263} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />

                <Tooltip />

                <Line type="monotone" dataKey="sessionLength" stroke="#82ca9d" />
            </LineChart>
            <div className="legend" style={{ display: "flex", gap: 20, width: 258, justifyContent: "center" }}>
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
