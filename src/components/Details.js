import React, { useEffect, useState } from 'react'
import { appData } from '../AppsData'

function Details() {
    const [app, setapp] = useState([])
    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const thiscategory = urlParams.get('cat')
        const index = urlParams.get('index')
        var tempapps = []
        appData.map((obj) => {
            if (obj.category === thiscategory) {
                tempapps = [...tempapps, obj]
            }
        })
        setapp(tempapps[index])
        console.log(tempapps[index]);
    }, [])
    const iconpath = "/appicons/" + app.iconfile
    const filepath = "/files/" + app.appfile
    return (
        <div className="w-full p-5">
            <div className="w-full flex flex-col justify-center ">
                <img className="m-10 rounded-xl" src={iconpath} alt="" />
                <h1 className="w-full text-2xl text-center font-bold">{app.name}</h1>
                <h1 className="text-s jus line-clamp-1 text-center w-full">By {app.madeby}</h1>
                <a className="mt-4 px-16 py-2 bg-green-800 rounded-xl  hover:bg-green-700 text-white text-center font-bold" href={filepath} download >Download {app.sizeinmb}Mb</a>
                <h1 className="text-left mt-10 text-2xl font-bold mb-4">Details</h1>
                <p className=" whitespace-pre-line ">{app.description}</p>
                <div className="h-32"></div>
            </div>
        </div>
    )
}

export default Details