import React, { createContext, useState } from 'react'
export const addResponseContext = createContext()
export const editJobResponseContext=createContext()
function ContextShare({children}) {
    const [addResponse,setAddResponse] = useState("")
    const [editJobResponse,setEditJobResponse] = useState("")
  return (
    <>
    <addResponseContext.Provider value={{addResponse,setAddResponse}}>
       <editJobResponseContext.Provider value={{editJobResponse,setEditJobResponse}}>
         {children}
      </editJobResponseContext.Provider>
        </addResponseContext.Provider>
    </>
  )
}

export default ContextShare