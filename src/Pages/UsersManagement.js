import React, {useEffect, useState} from 'react';
import axios from 'axios';



const Settings = () => {
    const [tableData, setTableData] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response.data);
                setTableData(response.data)
            });
    },[])

    return (
        <div className="p-4">
            <h1 className="text-lg font-bold mb-10 md:table-fixed">Settings</h1>
            <table className="min-w-full">
                <thead className="border-b">
                <tr>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        ID
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        UserID
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Title
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Action
                    </th>
                </tr>
                </thead>
                <tbody>
                {tableData.map((personObj)=>(
                    <tr className="border-b" key={personObj?.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {personObj?.id}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {personObj?.userId}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {personObj?.title}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {/*{personObj?.Action}*/}
                        </td>
                    </tr>))}
                </tbody>
            </table>
        </div>
    );
};

export default Settings;