import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import { ReloadContext } from '../contexts/RefreshContext';
 
function Categories() {
    const history = useHistory()    
    const [refresh,setrefresh] = useContext(ReloadContext)
    return (
        <div>
            <div className="w-full select-none">
                <div className="h-10 cat flex gap-5 px-2 flex-row items-center w-full">
                    <div className="py-1 px-6 rounded bg-gray-200 " onClick={()=>{
                        history.push('/')
                        setrefresh(refresh+1)
                    }}> 
                        All
                    </div>
                    {/* <div className="py-1 px-6 rounded bg-gray-200 " onClick={()=>{
                        history.push('/home?cat=health')
                        setrefresh(refresh+1)
                    }}> 
                        Health
                    </div>
                    <div className="py-1 px-6 rounded bg-gray-200 " onClick={()=>{
                        history.push('/home?cat=education')
                        setrefresh(refresh+1)
                    }}> 
                        Education
                    </div>
                    <div className="py-1 px-6 rounded bg-gray-200 " onClick={()=>{
                        history.push('/home?cat=fun')
                        setrefresh(refresh+1)
                    }}> 
                        Fun
                    </div>
                    <div className="py-1 px-6 rounded bg-gray-200 " onClick={()=>{
                        history.push('/home?cat=programming')
                        setrefresh(refresh+1)
                    }}> 
                        Programming
                    </div>  */}

                </div>
            </div>
        </div>
    )
}

export default Categories
