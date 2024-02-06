import React from 'react'
import dummyProfile from '../assets/dummyProfile.jpeg'
import { Form } from 'react-bootstrap'
function Profile() {
  return (
    <div className='w-100 p-5' style={{height:'100vh'}}>
      <div className="container">
        <h1 className='text-success'>Profile</h1>
        <div className="row align-items-start">
          <div className="col-lg-5 col-md-5 col-sm-5 border p-3 mb-3 ">
            <div className="d-flex flex-column align-items-center">
              <label>
                <input type="file" style={{display:'none'}}/>
                <img className='w-100 img-fluid ' style={{height:'100px'}}  src={dummyProfile} alt="" />                
              </label>
    <h3>Sanjay ps</h3>
    <p>MEARN STACK DEVELOPER</p>
    <p style={{textAlign:'justify'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, pariatur iste minima tempora aliquid ratione magnam ab repudiandae eveniet optio ducimus facilis ut asperiores ad, fugiat neque sunt, cumque ea.</p>
            </div>
          </div>
          <div className="col-lg-7 col-md-6 col-sm-6">
            <Form>
              <div className="row align-items-center p-3">
                  <div className="col-lg-6">
              <div className='mb-4'>
                <Form.Label>Name</Form.Label>
                <Form.Control  type="text" placeholder="Name" />
              </div>
              <div className='mb-3'>
                <Form.Label>About/Bio</Form.Label>
                <Form.Control type="text"  />
              </div>

              <div className='mb-3'>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text"  />
              </div>
                  </div>
                  <div className="col-lg-6">
                  <div className='mb-4'>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" />
              </div>

              <div className='mb-3'>
                <Form.Label>LinkedIn Url </Form.Label>
                <Form.Control type="text"  />
              </div>
                 
              <div className='mb-3'>
                <Form.Label>GitHub </Form.Label>
                <Form.Control type="text"  />
              </div>
                  </div>
                  <div className='mb-3'>
                <Form.Label>Education</Form.Label>
                <Form.Control type="text" placeholder="Name" />
              </div>
              <div className="text-center">
                <div className="btn btn-primary mx-3">Edit Profile</div>
                
              </div>
                </div>
            </Form>
            
          </div>

        </div>
      </div>

    </div>
  )
}

export default Profile