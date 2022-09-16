
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";



function DashboardLineChart({dashboardData}) {
    return (
        <ResponsiveContainer width="95%" height={700}>
            <LineChart
                width={1200}
                height={700}
                data={dashboardData}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="low"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="high" stroke="#82ca9d" />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default DashboardLineChart;
