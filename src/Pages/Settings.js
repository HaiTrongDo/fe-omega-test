import React, {useEffect, useState} from 'react';
import './Settings.css'

const Settings = () => {
    const [formValue, setFormValue] = useState({
        title:'',
        email:'',
        color:'',
        date:new Date().toLocaleDateString(),
    })
    const [currentColor, setCurrentColor] = useState('')

    const handleChange = (e)=>{
        setFormValue({...formValue, [e.target.name]: e.target.value})
        if (e.target.name ==="color") setCurrentColor(formValue.color)
    }


    const handleChangeDate = (e)=>{
        let [name , value] = [e.target.name , e.target.value]
        if (name === "date" && !value) {
            value = new Date().toLocaleDateString() ;
        }
        setFormValue({...formValue, [name]: value})
    }

    const handleOnSubmit = (e)=>{
        e.preventDefault()
        console.log(formValue);
    }

    return (
        <div className="p-4">
            <h1 className="text-lg font-bold mb-10 ">Setting</h1>

            <div className="w-full max-w-xs">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleOnSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Title
                        </label>
                        <input
                            onChange={handleChange}
                            name="title"
                             style = {{color: currentColor ? currentColor : ""}}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                            id="username" type="text" placeholder="Title" pattern="\w+" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            onChange={handleChange}
                            name="email"
                            style = {{color: currentColor ? currentColor : ""}}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email" type="email" placeholder="Email" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="background">
                            Color
                        </label>
                        <input
                            onChange={handleChange}
                            name="color"
                            style = {{color: currentColor ? currentColor : ""}}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="background" type="color" placeholder="Choose Color"/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="activeDate">
                            Active Date
                        </label>
                        <input
                            onChange={handleChangeDate}
                            name="date"
                            style = {{color: currentColor ? currentColor : ""}}
                            value={new Date(formValue.date).toISOString().split("T")[0] ||""}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="activeDate" type="date" placeholder="Choose Date"
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit">
                            Save
                        </button>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default Settings;