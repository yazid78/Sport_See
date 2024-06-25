import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface LineChartComponentProps {
    data: Array<{ day: string; kilogram: number; calories: number }> | undefined;
}

const LineChartComponent = ({ data }: LineChartComponentProps) => {
    console.log(data, 'on est la');
    return (

        <div style={{ width: 835, height: 320 }}>
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
                    <XAxis dataKey="day" />
                    <YAxis orientation="right" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="kilogram" fill="#282D30" radius={[10, 10, 0, 0]} barSize={10} />
                    <Bar dataKey="calories" fill="#E60000" radius={[10, 10, 0, 0]} barSize={10} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default LineChartComponent;
