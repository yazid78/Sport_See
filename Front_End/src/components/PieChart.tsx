import { RadialBar, RadialBarChart, ResponsiveContainer, Tooltip } from "recharts";
import "../css/pieChart.css";

interface PieChartComponentProps {
    data: number;
}

const PieChartComponent = ({ data }: PieChartComponentProps) => {
    const percentage = (data * 100);
    const pieData = [
        { name: 'Score', value: data * 100 }
    ];

    return (
        <div className="pieChartContainer">
            <div className="scoreLabel">Score</div>
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                    cx="50%"
                    cy="50%"
                    innerRadius="60%"
                    outerRadius="70%"
                    barSize={10}
                    data={pieData}
                    startAngle={90}
                    endAngle={((data * 360) + 90)}
                >
                    <RadialBar
                        dataKey="value"
                        cornerRadius={10}
                        fill="#FF0000"
                    />
                    <Tooltip />
                </RadialBarChart>
            </ResponsiveContainer>

            <div className="centerText">
                <div className="percentageText">
                    {percentage}%
                </div>
                <div className="objectiveText">
                    de votre objectif
                </div>
            </div>
        </div>
    );
}

export default PieChartComponent;
