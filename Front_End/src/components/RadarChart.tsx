
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { User_Performance } from "../interface/user";
import "../css/radarChart.css"


interface RadarChartComponentProps {
    data: User_Performance["data"];
    kind: User_Performance["kind"];
}

const RadarChartComponent = ({ data, kind }: RadarChartComponentProps) => {
    const mergeData = data.map(item => ({ ...item, kindname: kind[item.kind] }));

    const capitalizeFirstLetter = (label: string) => {
        return label.charAt(0).toUpperCase() + label.slice(1);
    };

    return (
        <div className="containerRadar">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="60%" data={mergeData} >
                    <PolarGrid radialLines={false} />
                    <PolarAngleAxis dataKey="kindname" dy={5} tickSize={15} tickFormatter={capitalizeFirstLetter} tick={{ fill: '#ffffff', fontSize: 12 }} />

                    <Radar name="Mike" dataKey="value" fill="red" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default RadarChartComponent;
