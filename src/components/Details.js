import { Fab, Snackbar } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { appData } from '../AppsData'
import ShareIcon from '@mui/icons-material/Share';
import { useClipboard } from "use-clipboard-hook";


function Details() {
    const [app, setapp] = useState([])
    const [copypopup, setcopypopup] = useState(false)
    const { ref, copy,  } = useClipboard({
        onSuccess: () => {
            console.log("copied");
        },
    });
    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const thiscategory = urlParams.get('cat')
        const index = urlParams.get('index')
        var tempapps = [] // eslint-disable-next-line
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
    if(app.name && app.madeby){
        window.top.document.title = app.name + " By " + app.madeby
    }
    return (
        <div>
            <div className="absolute top-36 md:top-20 right-5 md:right-10">
                <Fab color="primary" aria-label="add" onClick={() => {
                    copy()

                    setcopypopup(true)
                }}>
                    <ShareIcon />
                </Fab>
            </div>
            <Snackbar
                open={copypopup}
                autoHideDuration={6000}
                onClose={() => {
                    setcopypopup(false)
                }}
                message="Link Copied"
            />
            <div className="w-full md:hidden p-5">
                <p className="hidden" ref={ref}>{window.location.href}</p>
                <div className="w-full flex flex-col justify-center ">
                    <img className="m-10 rounded-xl" src={iconpath} alt="" />
                    <h1 className="w-full text-2xl text-center font-bold">{app.name}</h1>
                    <a className="mt-4 px-16 py-2 bg-green-800 rounded-xl  hover:bg-green-700 text-white text-center font-bold" href={filepath} download >Download {app.sizeinmb}Mb</a>
                    <h1 className="text-left mt-10 text-2xl font-bold mb-4">Details</h1>
                    <p className=" whitespace-pre-line ">{app.description}</p>
                    <div className="h-32"></div>
                </div>
            </div>
            <div className="w-full hidden md:flex p-5">
                <div className="w-1/2 flex justify-center flex-col">
                    <img className="h-96 w-96 self-center rounded-xl" src={iconpath} alt="" />
                </div>
                <div className="w-1/2 flex flex-col justify-center">
                    <h1 className="w-full text-5xl mt-52 font-bold">{app.name}</h1>
                    <h1 className=" w-full text-3xl">By {app.madeby}</h1>
                    <a className="mt-10 w-3/4 px-16 py-2 bg-green-800 rounded-xl  hover:bg-green-700 text-white text-center font-bold" href={filepath} download >Download {app.sizeinmb}Mb</a>

                    <h1 className="text-left mt-32 text-4xl font-bold mb-4">Details</h1>
                    <p className=" whitespace-pre-line text-2xl">{app.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Details