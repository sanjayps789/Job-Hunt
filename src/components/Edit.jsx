import React, { useContext, useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Modal } from 'react-bootstrap';
import SERVER_URL from '../services/serverUrl';
import { updateJobAPI } from '../services/allAPI';
import { editJobResponseContext } from '../Context/ContextShare';

function Edit({job}) {
  const {editJobResponse,setEditJobResponse} = useContext(editJobResponseContext)
  const [jobData,setJobdata] = useState({
    id:job._id,jobTitle:job.jobTitle,companyName:job.companyName,paymentScale:job.paymentScale,location:job.location,
    experience:job.experience,jobTime:job.jobTime,skills:job.skills,jobDescription:job.jobDescription,jobImage:""
  })
  // state to hold uploded image url
  const [jobImageUrl,setJobImageUrl] = useState("")
    const [show, setShow] = useState(false);
    const handleClose = () =>{
      setShow(false)
      setJobdata({
        id:job._id,jobTitle:job.jobTitle,companyName:job.companyName,paymentScale:job.paymentScale,location:job.location,experience:job.experience,jobTime:job.jobTime,skills:job.skills,jobDescription:job.jobDescription,jobImage:""
      })
      setJobImageUrl("")
    }
    const handleShow = () => setShow(true);

   const handleUpdateJob = async() =>{
    const {id,jobTitle,companyName,paymentScale,location,experience,jobTime,skills,jobDescription,jobImage} = jobData
    if(!jobTitle || !companyName || !paymentScale || !location || !experience || !jobTime || !skills || !jobDescription){
      toast.info("Please fill the form completely!!!")
    }else{
      const reqBody = new FormData()
      reqBody.append("jobTitle",jobTitle)
      reqBody.append("companyName",companyName)
      reqBody.append("paymentScale",paymentScale)
      reqBody.append("location",location)
      reqBody.append("experience",experience)
      reqBody.append("jobTime",jobTime)
      reqBody.append("skills",skills)
      reqBody.append("jobDescription",jobDescription)
      jobImageUrl?reqBody.append("jobImage",jobImage):reqBody.append("jobImage",job.jobImage)

      const token = sessionStorage.getItem("token")
      if(token){
        const reqHeader = {
          "Content-Type":jobImageUrl?"multipart/form-data":"application/json",
          "Authorization":`Bearer ${token}`
        }
        console.log("proceed to api call");
        try{
          const result = await updateJobAPI(id,reqBody,reqHeader)
          if(result.status===200){
            handleClose()
            setJobdata(jobData)
           // share response to MyActivity
           setEditJobResponse(result.data)
          }
          else{
            console.log(result.data);
          }
        }catch(err){
          console.log(err);
        }
      }
    }
   }
    useEffect(()=>{
      if(jobData.jobImage){
       setJobImageUrl( URL.createObjectURL(jobData.jobImage))
      }
      else{
        setJobImageUrl("")
      }
    },[jobData.jobImage])
  return (
    <div>
        <div className="btn border" onClick={handleShow}>
        <i class="fa-regular fa-pen-to-square fs-2 text-success"></i>
        </div>
        {/* modal */}
    <Modal
     size='lg'
      show={show} 
      onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Job Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
         <div className='text-center mb-2'>
            <label>
                  <input type="file"  style={{display:'none'}} onChange={e=>setJobdata({...jobData,jobImage:e.target.files[0]})}/>
                  <img className='w-100 img-fluid  border border-black' style={{height:'100px'}}  
                   alt="" src={jobImageUrl?jobImageUrl:`${SERVER_URL}/uploads/${job?.jobImage}`} />                
                </label>
               
         </div>
            <div className="row">
              <div className="col-lg-6">
              <div className="mb-3 text-black">
              <input value={jobData.jobTitle} onChange={e=>setJobdata({...jobData,jobTitle:e.target.value})} type="text" className=" border rounded p-2 w-100" placeholder='Job Title'
           />
            </div>

            <div className="mb-3 text-black">
              <input value={jobData.companyName} onChange={e=>setJobdata({...jobData,companyName:e.target.value})} type="text" className=" border rounded p-2 w-100" placeholder='Company Name'/>
            </div>

            <div className="mb-3 text-black">
              <input value={jobData.paymentScale} onChange={e=>setJobdata({...jobData,paymentScale:e.target.value})} type="text" className=" border rounded p-2 w-100" placeholder='Pay Scale'/>
            </div>

              </div>
              <div className="col-lg-6">

              <div className="mb-3 text-black">
              <input value={jobData.location} onChange={e=>setJobdata({...jobData,location:e.target.value})} type="text" className=" border  rounded p-2 w-100" placeholder='Location'/>
            </div>

            <div className="mb-3 text-black">
              <input value={jobData.experience} onChange={e=>setJobdata({...jobData,experience:e.target.value})} type="text" className=" border rounded p-2 w-100" placeholder='Experience' />
            </div>

            <div className='mb-3'>                  
                          <select value={jobData.jobTime} onChange={e=>setJobdata({...jobData,jobTime:e.target.value})}  className='w-100 rounded border' style={{height:'40px',border:'none'}} aria-label="Default select example">
                            <option>select</option>
                            <option value="Full time" className='text-black' >Full time</option>
                            <option value="Part time" className='text-black' >Part time</option>
                          </select> 
                      </div>
              </div>

              <div className="mb-3 text-black">
              <input value={jobData.skills} onChange={e=>setJobdata({...jobData,skills:e.target.value})} type="text" className=" border rounded p-2 w-100" placeholder='Skills'/>
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
          <Button variant="primary" onClick={handleUpdateJob}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer  autoClose={3000} />
    </div>
  )
}

export default Edit