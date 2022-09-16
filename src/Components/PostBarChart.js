

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";


const PostBarChart = ({BarChartData}) => {
    return (
        <ResponsiveContainer width="95%" height={700}>
            <BarChart
                width={1200}
                height={700}
                data={BarChartData}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                <Tooltip />
                <Legend />
                <Bar yAxisId="right" dataKey="uv" fill="#82ca9d" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default PostBarChart;