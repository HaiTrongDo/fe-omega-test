import React from 'react';
import DashboardLineChart from "../Components/DashboardLineChart";
import {dashboardData} from "../Data/DashboardData"


const DashBoard = () => {
    return (
        <div className="p-4">
            <h1 className="text-lg font-bold mb-10 ">DashBoard</h1>
            <DashboardLineChart dashboardData={dashboardData}/>
        </div>
    );
};

export default DashBoard;