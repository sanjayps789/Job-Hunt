import React from 'react'
import AuthImage from '../assets/AuthImage.svg'
import { FloatingLabel, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Auth({insideRegister}) {
  return (
    <div style={{width:'100%',height:'100vh'}} className='d-flex align-items-center justfy-content-center'>
      <div className="container w-75">
        <Link  to={'/'} > <i class="fa-solid fa-arrow-left-long fa-beat-fade fa-flip-vertical text-primary"></i> back to home</Link>
        <div className='card shadow p-5 bg-success' >
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img src={AuthImage} alt="" className="w-100 img-fluid" />
            </div>
            <div className="col-lg-6">
              <h1 className="fw-bolder text-light mt-2">
              <i class="fa-solid fa-people-carry-box mx-2 fs-2 text-light"></i>
              JobHunt
              </h1>
              <h5 className='text-light'>Sign {insideRegister?"Up":"In"} to your Account</h5>
              <Form>
              {insideRegister&&
              <FloatingLabel className='mb-2' controlId="floatingUname" label="Username">
        <Form.Control type="text" placeholder="User name" />
      </FloatingLabel>}

      <FloatingLabel className='mb-3'   controlId="floatingPassword" label="Email">
        <Form.Control type="email" placeholder="Enter email" />
      </FloatingLabel>

      <FloatingLabel className='mb-3' controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Enter password" />
      </FloatingLabel>
     { insideRegister?
     <div>
          <button className="btn btn-light mb-3">Register</button>
        <p >Already have an Account? Click here to <Link to={'/login'}>Login</Link></p>
      </div>:
      <div>
      <button className="btn btn-light mb-3">Login</button>
    <p className='text-light'>New User? Click here to <Link to={'/register'}>Register</Link></p>
  </div>
      }
              </Form>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Auth