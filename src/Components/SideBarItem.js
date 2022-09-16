import React from 'react';
import {useNavigate} from 'react-router-dom';
const SideBarItem = ({title, path}) => {
    const navigate = useNavigate();
    return (
        <div className="m-5 cursor-pointer" onClick={()=>navigate(`${path}`)} >
                <span>{title}</span>
        </div>
    );
};

export default SideBarItem;