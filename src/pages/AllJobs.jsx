import React from 'react'
import Add from '../components/Add'
import { Form } from 'react-bootstrap'
import JobCards from '../components/JobCards'
import Header from '../components/Header'
import dummyProfile from '../assets/dummyProfile.jpeg'
import { Link } from 'react-router-dom'
function AllJobs() {
  return (
   <>
   <Header insideAllJobs/>
      <div style={{width:'100%',height:'100vh'}} className='d-flex pt-5  bg-light justify-content-center'>
        
         <div className='container '>
              <div className="row align-items-center">
                  <div className="col-lg-7">
                      <h1>Find Your <span className='text-success'>new job</span> today</h1>
                      <p>Thousands of jobs in the computer,engineering and technology fields are waiting for you.</p>
                  </div>
                  <div className="col-lg-1"></div>
                  <div className="col-lg-4 mb-4">
                      {/* component to post a new job */}
                     <div className='d-flex align-items-center justify-content-between'>
                        <Add/>
                        {/* component to update or add a profile*/}
                       <Link to={'/profile'}> <img style={{height:'60px'}} src={dummyProfile} alt="profile picture" /></Link>
                     </div>
                  </div>
                  <Form>
                     <div className='d-flex mb-3'> 
                     <Form.Control type="text" className='w-75 border border-black' placeholder="Search jobs titles"/>
                     <button type='button' className='btn btn-primary mx-3'>Search</button>
                     </div>
                      </Form>
  
                      <div className="row my-4">
                        <JobCards/>
                        <JobCards/>
                        <JobCards/>
                        <JobCards/>
                      </div>
              </div>
  
  
  
         </div>
      </div>
   </>
  
  )
}

export default AllJobs