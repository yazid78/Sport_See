
import { LineChart, Line } from 'recharts';
const data = [
    { name: 'Page A', uv: 0, pv: 200, amt: 2500 },
    { name: 'Page A', uv: 4000, pv: 2400, amt: 400 },
    { name: 'Page A', uv: 40, pv: 2400, amt: 2400 },]
    ;
const LineChartComponent = () => {
    return (
        <div>
            <LineChart width={400} height={400} data={data}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            </LineChart>
        </div>
    );
}

export default LineChartComponent;
