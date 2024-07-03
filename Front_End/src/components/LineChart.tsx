import { LineChart, Line, Tooltip, ResponsiveContainer, TooltipProps } from 'recharts';
import { User_Average_Sessions } from "../interface/user";
import "../css/LineChart.css";
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';

interface LineChartComponentProps {
    data: User_Average_Sessions["sessions"];
}


type CustomTooltipProps = TooltipProps<ValueType, NameType>;

const LineChartComponent = ({ data }: LineChartComponentProps) => {
    const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip">
                    <p>{`${payload[0].value} min`}</p>
                </div>
            );
        }
        return null;
    };


    return (
        <div className="containerLineChart">
            <div className="title">
                Durée moyenne des sessions
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ bottom: 10 }}>
                    <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF" strokeWidth={2.5} dot={false} />
                    <Tooltip content={<CustomTooltip />} cursor={false} />
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
