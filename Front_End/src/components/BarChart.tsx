import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, TooltipProps } from 'recharts';
import { User_Activity } from '../interface/user';
import legend from "../assets/legend.png";
import "../css/barchart.css";
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';

interface BarChartComponentProps {
    data: User_Activity["sessions"];
}

type CustomTooltipProps = TooltipProps<ValueType, NameType>;
const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
    if (active && payload) {
        return (
            <div className="custom-tooltip" style={{ backgroundColor: '#E60000', width: "100%", padding: '10px', borderRadius: '5px', color: '#FFF' }}>

                <p>Kg: {payload[0].value}</p>
                <p>Kcal: {payload[1].value}</p>
            </div>
        );
    }

    return null;
};

const BarChartComponent: React.FC<BarChartComponentProps> = ({ data }) => {
    return (
        <div className='containerBarChart' style={{ width: "100%", height: "320px" }}>
            <div className='legendActivity'> <div>Activité quotidienne</div><img src={legend} alt="legend graphic" /></div>
            <ResponsiveContainer>
                <BarChart
                    data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis />
                    <YAxis orientation="right" />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="kilogram" fill="#282D30" radius={[10, 10, 0, 0]} barSize={10} />
                    <Bar dataKey="calories" fill="#E60000" radius={[10, 10, 0, 0]} barSize={10} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BarChartComponent;
