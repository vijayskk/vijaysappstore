import React, { useContext, useEffect, useState } from 'react'
import { appData } from '../AppsData'
import AppTile from './AppTile'
import { ReloadContext } from '../contexts/RefreshContext'
function AllHome() {
    const [apps, setapps] = useState([])
    const [refresh,] = useContext(ReloadContext)
    useEffect(() => {
        setapps(appData)
    }, [refresh])
    return (
        <div className="w-full p-5 md:p-32">
            <div className="w-full gap-5 md:gap-32 grid grid-flow-row grid-cols-3 md:grid-cols-4 ">
                {
                    apps.map((obj,index)=>{
                        return (
                            <div>
                                <AppTile obj={obj} index={index} />
                            </div>
                        )
                    })
                }
            </div>           
        </div>
    )
}

export default AllHome
