import React, { useContext, useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import dummyCompanyLogo from '../assets/dummyCompanyLogo.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addJobAPI } from '../services/allAPI';
import { addResponseContext } from '../Context/ContextShare';
function Add() {
 const {addResponse,setAddResponse}= useContext(addResponseContext)
  const [jobData,setJobdata] = useState({
    jobTitle:"",companyName:"",paymentScale:"",location:"",experience:"",jobTime:"",
    skills:"",jobDescription:"",jobImage:""
  })
  const [jobImageFileStatus,setJobImageFileStatus] = useState(false)
const [jobImageUrl,setJobImageUrl] = useState("")
  console.log(jobData);
  const [show, setShow] = useState(false);
  const handleClose = () =>{
    setShow(false)
    setJobdata({jobTitle:"",companyName:"",paymentScale:"",location:"",experience:"",jobTime:"",
    skills:"",jobDescription:"",jobImage:""})
    setJobImageUrl(dummyCompanyLogo)
  }
  const handleShow = () => setShow(true);
  // checking jobImage type,create url for img,
  useEffect(()=>{
    if(jobData.jobImage?.type==="image/jpg" || jobData.jobImage?.type==="image/jpeg" ||jobData.jobImage?.type==="image/png"){
      setJobImageFileStatus(true)
      setJobImageUrl(URL.createObjectURL(jobData.jobImage))
      // console.log(URL.createObjectURL(jobData.jobImage));
    }
    else{
      setJobImageUrl(dummyCompanyLogo)
      setJobdata({...jobData,jobImage:""})
      setJobImageFileStatus(false)
    }
  },[jobData.jobImage])

  const handlePostJob = async() =>{
    const {jobTitle,companyName,paymentScale,location,experience,jobTime,skills,jobDescription,jobImage} = jobData
    if(!jobTitle || !companyName || !paymentScale || !location || !experience || !jobTime || !skills || !jobDescription || !jobImage){
      toast.info("Please fill the form completely")
    }
    else{
      const reqBody = new FormData()
      reqBody.append("jobTitle",jobTitle)
      reqBody.append("companyName",companyName)
      reqBody.append("paymentScale",paymentScale)
      reqBody.append("location",location)
      reqBody.append("experience",experience)
      reqBody.append("jobTime",jobTime)
      reqBody.append("skills",skills)
      reqBody.append("jobDescription",jobDescription)
      reqBody.append("jobImage",jobImage)

      const token = sessionStorage.getItem("token")
      if(token){
        const reqHeader = {
          "Content-Type":"multipart/form-data",
          "Authorization":`Bearer ${token}`
        }
        console.log("proceed to api call");
        try{
        const result = await addJobAPI(reqBody,reqHeader)
        console.log(result);
        if(result.status===200){
          // toast.success("Job added SuccessFully...!!!!")
          setAddResponse(result.data)
          // console.log(result.data);
          handleClose()
        }
        else{
          console.log(result.response.data);
        }
      }catch(err){
        console.log(err);
      }
      }
    }
  }
  return (
    <div>
     <button onClick={handleShow} className="btn btn-success">Post a Job </button>
     {/* modal to add a project */}
     <Modal
     size='lg'
      show={show} 
      onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Job Details </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
         <div className='text-center mb-2'>
            <label>
                  <input type="file" onChange={e=>setJobdata({...jobData,jobImage:e.target.files[0]})} style={{display:'none'}}/>
                  <img className='w-100 img-fluid  border border-black' style={{height:'100px'}}  
                  src={jobImageUrl?jobImageUrl:dummyCompanyLogo} alt="" />                
                </label>
                {!jobImageFileStatus &&<p className='text-danger text-center' style={{textAlign:'justify'}}>*Upload only the following file types (jpg,jpeg,png)*</p>}
         </div>
            <div className="row">
              <div className="col-lg-6">
              <div className="mb-3 text-black">
              <input type="text" className=" border rounded p-2 w-100" placeholder='Job Title'
            value={jobData.jobTitle}  onChange={e=>setJobdata({...jobData,jobTitle:e.target.value})}/>
            </div>

            <div className="mb-3 text-black">
              <input type="text" className=" border rounded p-2 w-100" placeholder='Company Name'
               value={jobData.companyName}  onChange={e=>setJobdata({...jobData,companyName:e.target.value})} />
            </div>

            <div className="mb-3 text-black">
              <input type="text" className=" border rounded p-2 w-100" placeholder='Pay Scale'
               value={jobData.paymentScale}  onChange={e=>setJobdata({...jobData,paymentScale:e.target.value})} />
            </div>

              </div>
              <div className="col-lg-6">

              <div className="mb-3 text-black">
              <input type="text" className=" border  rounded p-2 w-100" placeholder='Location'
               value={jobData.location}  onChange={e=>setJobdata({...jobData,location:e.target.value})} />
            </div>

            <div className="mb-3 text-black">
              <input type="text" className=" border rounded p-2 w-100" placeholder='Experience'
               value={jobData.experience}  onChange={e=>setJobdata({...jobData,experience:e.target.value})} />
            </div>

            <div className='mb-3'>                  
                          <select  className='w-100 rounded border' style={{height:'40px',border:'none'}} aria-label="Default select example" onChange={e=>setJobdata({...jobData,jobTime:e.target.value})}>
                            <option>select</option>
                            <option value="Full time" className='text-black' >Full time</option>
                            <option value="Part time" className='text-black' >Part time</option>
                          </select> 
                      </div>
              </div>

              <div className="mb-3 text-black">
              <input type="text" className=" border rounded p-2 w-100" placeholder='Skills'
               value={jobData.skills}  onChange={e=>setJobdata({...jobData,skills:e.target.value})} />
            </div>

              <div className="mb-3 text-black">
                <textarea value={jobData.jobDescription} onChange={e=>setJobdata({...jobData,jobDescription:e.target.value})} placeholder='Job Description' className='w-100 border rounded p-2'  cols="30" rows="3"></textarea>
            </div>
              
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className='border-black' variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handlePostJob}>
            Post Job
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer  autoClose={3000} />
    </div>
  )
}

export default Add