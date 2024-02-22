import { commonAPI } from "./commonAPI"
import SERVER_URL from "./serverUrl"


// register API
export const registerAPI = async(user) =>{
  return await commonAPI("POST",`${SERVER_URL}/register`,user,"")
}

// login API
export const loginAPI = async(user) =>{
    return await commonAPI("POST",`${SERVER_URL}/login`,user,"")
}

// add-job APi
export const addJobAPI = async(reqBody,reqHeader) =>{
  return await commonAPI("POST",`${SERVER_URL}/add-job`,reqBody,reqHeader)
}

// get-all-jobs API
export const getAllJobsAPI = async(searchKey,reqHeader) =>{
  return await commonAPI("GET",`${SERVER_URL}/get-all-jobs?search=${searchKey}`,"",reqHeader)
}

// get-user-jobs API
export const getUSerJobsAPI = async(reqHeader) =>{
  return await commonAPI("GET",`${SERVER_URL}/get-user-jobs`,"",reqHeader)
}

// edit job API
export const updateJobAPI = async(jobId,reqBody,reqHeader)=>{
  return await commonAPI("PUT",`${SERVER_URL}/job/edit/${jobId}`,reqBody,reqHeader)
}

// remove-job api
export const deleteJobAPI = async(jobId,reqHeader)=>{
  return await commonAPI("DELETE",`${SERVER_URL}/remove-job/${jobId}`,{},reqHeader)
}

// update Profile API (/edit-profile)

export const UpdateProfileAPI = async(reqBody,reqHeader)=>{
  return await commonAPI("PUT",`${SERVER_URL}/edit-profile`,reqBody,reqHeader)
}
