import React, { createContext, useState } from 'react'
export const addResponseContext = createContext()
export const editJobResponseContext=createContext()
export const updateProfileContext = createContext()
function ContextShare({children}) {
    const [addResponse,setAddResponse] = useState("")
    const [editJobResponse,setEditJobResponse] = useState("")
    const [updateProfileResponse,setUpdateProfileResponse] = useState("")

  return (
    <>
    <addResponseContext.Provider value={{addResponse,setAddResponse}}>
       <editJobResponseContext.Provider value={{editJobResponse,setEditJobResponse}}>
        <updateProfileContext.Provider value={{updateProfileResponse,setUpdateProfileResponse}}>
          {children}
          </updateProfileContext.Provider>
      </editJobResponseContext.Provider>
        </addResponseContext.Provider>
    </>
  )
}

export default ContextShare