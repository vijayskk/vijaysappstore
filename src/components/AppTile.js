import React from 'react'
import { useHistory } from 'react-router-dom'

function AppTile({obj,index}) {
    const history = useHistory()
    const iconpath = "/appicons/" + obj.iconfile
    return (
        <div>
            <div className="rounded-xl bg-gray-200 flex flex-col p-2" onClick={()=>{
                history.push(`/details?cat=${obj.category}&index=${index}`)
            }}>
                <img className="m-2 rounded-xl" src={iconpath} alt="" />
                <h1 className="w-full text-justify font-bold">{obj.name}</h1>
                <h1 className="text-xs jus line-clamp-1 w-full">By {obj.madeby}</h1>
            </div>
        </div>
    )
}

export default AppTile
