import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {MoreInfoButton} from "../Components/iCons";
import ModalDetailUser from "../Components/ModalDetailUser";


const UsersManagement = () => {
    const [tableData, setTableData] = useState([])
    const [filterSort, setFilterSort] = useState({sortById:false, sortByUserId: false, sortByTitle: false})
    const [showModal, setShowModal] = useState(false);
    const [currentUserObj, setCurrentUserObj] = useState({});
    const OpenSeeingDetail = (id) => {
        setShowModal(true)
        let currentUser = tableData.filter(userObj => userObj.id === id)[0]
        setCurrentUserObj({...currentUser})
    }
    const sortById = () => {
        const sortedData = filterSort.sortById ? tableData.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0)) : tableData.sort((a,b) => (a.id > b.id) ? -1 : ((b.id > a.id) ? 1 : 0))
        setTableData([...sortedData])
        setFilterSort({...filterSort, sortById:!filterSort.sortById})
    }
    const sortByUserID = () => {
        const sortedData = filterSort.sortByUserId ? tableData.sort((a,b) => (a.userId > b.userId) ? 1 : ((b.userId > a.userId) ? -1 : 0)) : tableData.sort((a,b) => (a.userId > b.userId) ? -1 : ((b.userId > a.userId) ? 1 : 0))
        setTableData([...sortedData])
        setFilterSort({...filterSort, sortByUserId:!filterSort.sortByUserId})
    }
    const sortByTitle = () => {
        const sortedData = filterSort.sortByTitle ? tableData.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0)) : tableData.sort((a,b) => (a.title > b.title) ? -1 : ((b.title > a.title) ? 1 : 0))
        setTableData([...sortedData])
        setFilterSort({...filterSort, sortByTitle:!filterSort.sortByTitle})
    }
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                setTableData(response.data);
            });
    }, [])

    // useEffect(()=>{
    //     console.log(tableData);
    // },[tableData])

    return (
        <div className="p-4">
            <h1 className="text-lg font-bold mb-10 md:table-fixed">Users Management</h1>
            {showModal && <ModalDetailUser setShowModal={setShowModal} currentUserObj={currentUserObj}/>}
            <table className="min-w-full">
                <thead className="border-b">
                <tr>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left cursor-pointer"
                        onClick={sortById}
                    >
                        ID
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left cursor-pointer"
                        onClick={sortByUserID}
                    >
                        UserID
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left cursor-pointer"
                        onClick={sortByTitle}
                    >
                        Title
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Action
                    </th>
                </tr>
                </thead>
                <tbody>
                {tableData.map((personObj) => (
                    <tr className="border-b" key={personObj?.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {personObj?.id}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {personObj?.userId}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap capitalize">
                            {personObj?.title}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            <div className="cursor-pointer"
                                 onClick={()=>OpenSeeingDetail(personObj?.id)}
                            >
                                <MoreInfoButton/>
                            </div>
                        </td>
                    </tr>))}
                </tbody>
            </table>
        </div>
    );
};

export default UsersManagement;