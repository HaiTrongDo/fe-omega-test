import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import DashBoard from "./Pages/DashBoard";
import PostManagement from "./Pages/PostManagement";
import UsersManagement from "./Pages/UsersManagement";
import {SidebarItems} from "./Data/SideBarItems"
import SideBarItem from "./Components/SideBarItem";
import Settings from "./Pages/Settings";

function App() {
    return (
        <div className="w-full h-full flex justify-center p-5 gap-4">
            <BrowserRouter>
                <div className=" flex-row justify-between w-1/6 h-[100hv] bg-gray-100  rounded shadow-md p-3">
                    {SidebarItems.map((sidebarItem, index) => (
                        <div className="" key={index}>
                            <SideBarItem title={sidebarItem.title} path={sidebarItem.path}/>
                        </div>
                    ))}
                </div>
                <div className="w-5/6 h-100hv rounded shadow-md">

                    <Routes>
                        <Route path="/" element={(<DashBoard/>)}/>
                        <Route path="/post" element={(<PostManagement/>)}/>
                        <Route path="/users" element={(<UsersManagement/>)}/>
                        <Route path="/settings" element={(<Settings/>)}/>
                    </Routes>
                </div>
            </BrowserRouter>

        </div>
    );
}

export default App;
