import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { sendEmailAPI } from '../services/allAPI'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function Contact() {
  const navigate = useNavigate()
  const [emailData,setEmailData] = useState({
    to:"",subject:"",text:""
  })

  const handleSubmit= async(e)=>{
    e.preventDefault()
const {to,subject,text} = emailData
    if(!to || !subject ||!text){
toast.info("please fill the form completely!!!")
    }
    else{
      // proceed to api call
      try{
        const result = await sendEmailAPI(emailData)
        if(result.status==200){
          toast.success(result.data.message)
          setEmailData({to:"",subject:"",text:""})
         setTimeout(()=>{
          navigate("/alljobs")

          
         },3000)
        }
        else{
          console.log(result.response.data);
        }

       }catch(err){
        console.log(err);
      }
    }
  }
  console.log(emailData);
  return (
      <>
        <div style={{width:'100%',height:'100vh'}} className='d-flex justify-content-center align-items-center'>
         <div className='container w-75'>
         <h1 className='my-3 text-success fw-bold'>Lets get in touch</h1>
            <div className="card shadow p-5">
              <div className="row align-items-center">
              <div className="col-lg-7">
                <Form>
          <Form.Group className='mb-3'  controlId="exampleForm.ControlInput2">
            <Form.Control type="email" value={emailData.to} onChange={e=>setEmailData({...emailData,to:e.target.value})} placeholder="To" />
          </Form.Group>
            <Form.Group className="mb-4" controlId="exampleForm.ControlInput3">
            <Form.Control  value={emailData.subject} onChange={e=>setEmailData({...emailData,subject:e.target.value})} type="text" placeholder="Subject" />
          </Form.Group>
    
          <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">       
            <Form.Control  value={emailData.text} onChange={e=>setEmailData({...emailData,text:e.target.value})} as="textarea" placeholder='Message' rows={4} />
          </Form.Group>
    
                  <button onClick={handleSubmit} className="btn btn-success mb-4 fw-bold">Send Email<i class="fa-solid fa-paper-plane mx-2 text-white"></i></button>
                </Form>
              </div>
              <div className="col-lg-5">
                <img className='w-100 img-fluid' src="https://i.postimg.cc/KvLW4ZVG/Call-center-cuate.png" alt="" />
              </div>
    
              </div>
              
            </div>
         </div>

        </div>
        <ToastContainer  autoClose={3000} />

      </>
  )
}

export default Contact