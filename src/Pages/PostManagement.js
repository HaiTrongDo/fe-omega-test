import React from 'react';
import PostBarChart from "../Components/PostBarChart";
import {BarChartData} from '../Data/BarChartData'

const PostManagement = () => {
    return (
        <div className="p-4">
            <h1 className="text-lg font-bold mb-10 ">PostManagement</h1>
            <PostBarChart BarChartData={BarChartData}/>
        </div>
    );
};

export default PostManagement;