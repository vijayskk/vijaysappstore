import React, { useContext, useEffect, useState } from 'react'
import { appData } from '../AppsData'
import AppTile from './AppTile'
import { ReloadContext } from '../contexts/RefreshContext'
function Home() {
    const [apps, setapps] = useState([])
    const [refresh,] = useContext(ReloadContext)
    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const thiscategory = urlParams.get('cat')
        var tempapps = [] // eslint-disable-next-line
        appData.map((obj) => {
            if (obj.category === thiscategory) {
                tempapps = [...tempapps, obj]
            }
        })
        setapps(tempapps)
        console.log(tempapps);
    }, [refresh])
    return (
        <div className="w-full p-5">
            <div>
                {
                    (apps.length === 0) ?

                        <div>
                            <h1 className="text-center w-full text-3xl font-bold pt-14 animate-bounce">Nothing found😥</h1>
                        </div>
                        :
                        <div  className="w-full gap-5 grid grid-flow-row grid-cols-3 ">
                            {
                                apps.map((obj, index) => {
                                    return (
                                        <div>
                                            <AppTile obj={obj} index={index} />
                                        </div>
                                    )
                                })
                            }
                        </div>

                }
            </div>
        </div>
    )
}

export default Home
