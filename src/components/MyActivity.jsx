import React, { useContext, useEffect, useState } from 'react'
import JobCards from './JobCards'
import Edit from './Edit'
import { deleteJobAPI, getUSerJobsAPI } from '../services/allAPI'
import { addResponseContext, editJobResponseContext } from '../Context/ContextShare'

function MyActivity() {
   const {addResponse,setAddResponse} = useContext(addResponseContext)
   const {editJobResponse,setEditJobResponse} = useContext(editJobResponseContext)
   // get userAdded Jobs
  const [userJobs,setUserJobs] = useState([])
  const getUserAddedProjects = async()=>{
   try{
      const token = sessionStorage.getItem("token")
      if(token){
         const reqHeader = {
            "Content-Type":"multipart/form-data",
            "Authorization":`Bearer ${token}`
          }
          const result = await getUSerJobsAPI(reqHeader)
          if(result.status==200){
            setUserJobs(result.data)
          }
      }
   }catch(err){
      console.log(err);
   }
  }
  useEffect(()=>{
   getUserAddedProjects()
  },[addResponse,editJobResponse])

//   Delete Job API
const handleDeleteJob = async(jobId) =>{
   const token = sessionStorage.getItem("token")
   if(token){
      const reqHeader = {
         "Content-Type":"application/json",
         "Authorization":`Bearer ${token}`
      }
      try{
      const result  = await deleteJobAPI(jobId,reqHeader)
      if(result.status===200){
      getUserAddedProjects()
      }
      else{
         console.log(result.data);
      }
      }catch(err){
         console.log(err);
      }
   }
}
 
  console.log(userJobs);
  return (
    <div>
     {userJobs.length>0?userJobs.map((job,index)=>(
            <div key={index} className="row d-flex justify-content-evenly align-items-center  p-2 mb-3">
            <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10">
                <JobCards job={job}/>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2  col-xs-2">
               <div className='d-flex justify-content-evenly'>
                    <Edit job={job}/>
            <button onClick={()=>handleDeleteJob(job._id)} className="btn">
            <i class="fa-solid fa-trash-can fs-2 text-danger"></i>
            </button>
               </div>
            </div>
         </div>
     )):<h1>No jobs added yet</h1>
}
 </div>
  )
}

export default MyActivity