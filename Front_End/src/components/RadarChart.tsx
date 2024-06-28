
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { User_Performance } from "../interface/user";
import "../css/radar.css"



const RadarChartComponent = ({ data, kind }: User_Performance) => {
    console.log(data, kind, "hello world");

    return (
        <div className="containerRadar">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data} >
                    <PolarGrid />
                    <PolarAngleAxis dataKey="data" />

                    <Radar name="Mike" dataKey="kind" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default RadarChartComponent;
