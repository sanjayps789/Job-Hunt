import React from 'react'
import { Form } from 'react-bootstrap'

function Contact() {
  return (
   
      <>
        <div style={{width:'100%',height:'100vh'}} className='d-flex justify-content-center align-items-center'>
         <div className='container w-75'>
         <h1 className='my-3 text-success fw-bold'>Lets get in touch</h1>
            <div className="card shadow p-5">
              <div className="row align-items-center">
              <div className="col-lg-7">
                <Form>
                  <div className="d-flex justify-content-between mb-3">
                  <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Control  type="text" placeholder="First Name" />
          </Form.Group>
          <Form.Group  controlId="exampleForm.ControlInput2">
            <Form.Control type="text" placeholder="Last Name" />
          </Form.Group>
                  </div>
            <Form.Group className="mb-4" controlId="exampleForm.ControlInput3">
            <Form.Control type="email" placeholder="Email address" />
          </Form.Group>
    
          <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">       
            <Form.Control as="textarea" placeholder='Message' rows={4} />
          </Form.Group>
    
                  <div className="btn btn-success mb-4 fw-bold">Send<i class="fa-solid fa-paper-plane mx-2 text-white"></i></div>
                </Form>
              </div>
              <div className="col-lg-5">
                <img className='w-100 img-fluid' src="https://i.postimg.cc/KvLW4ZVG/Call-center-cuate.png" alt="" />
              </div>
    
              </div>
              
            </div>
         </div>
        </div>
       

      </>
  )
}

export default Contact