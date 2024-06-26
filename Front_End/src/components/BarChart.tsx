import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { User_Activity } from '../interface/user';
import legend from "../assets/legend.png";
import "../css/barchart.css";

interface BarChartComponentProps {
    data: User_Activity["sessions"];
}

const BarChartComponent = ({ data }: BarChartComponentProps) => {
    console.log(data, 'ds');

    return (

        <div style={{ width: "100%", height: "320px" }}>
            <div className='legendActivity'> <div>Activité quotidienne</div><img src={legend} alt="" /></div>
            <ResponsiveContainer>
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    {/* Warning: XAxis: Support for defaultProps will be removed from function components in a future major release. */}
                    <XAxis />
                    <YAxis orientation="right" />
                    <Tooltip />

                    <Bar dataKey="kilogram" fill="#282D30" radius={[10, 10, 0, 0]} barSize={10} />
                    <Bar dataKey="calories" fill="#E60000" radius={[10, 10, 0, 0]} barSize={10} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default BarChartComponent;
