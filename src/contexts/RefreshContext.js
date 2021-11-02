import React, { createContext, useState } from "react";
export const ReloadContext = createContext()

export const ReloadContextProvider = (props)=>{
    const [refresh, setrefresh] = useState(1)
    return (
        <ReloadContext.Provider value={[refresh, setrefresh]}>
            {props.children}
        </ReloadContext.Provider>
    )
} 