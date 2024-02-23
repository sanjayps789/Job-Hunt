import React, { useState } from 'react'
import AuthImage from '../assets/AuthImage.svg'
import { Button, Modal } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import SERVER_URL from '../services/serverUrl';

function JobCards({job}) {
  const navigate = useNavigate()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleNav = () =>{
    navigate("/contact")
  }
  return (
    <div>
        <div size="lg" className="card shadow border my-2 p-4" onClick={handleShow} >
            <div className='d-flex align-items-center justify-content-between'>
            <div className='d-flex'>
                <img  src={`${SERVER_URL}/uploads/${job?.jobImage}`} width={'50px'} height={'50px'} alt=""/>
                <div className='m-2'>
                    <h4>{job?.companyName}</h4>
                    <span>{job?.jobTitle}</span>
                </div>       
            </div>
            <p>{job?.paymentScale}</p>
            </div>
        </div>  

        {/* Modal */}
        <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Job Details</Modal.Title>
        </Modal.Header>
        <Modal.Body className='p-4'>
          <div className="d-flex">
            <img style={{height:'80px'}} src={`${SERVER_URL}/uploads/${job?.jobImage}`} alt="" />
           <div className='mx-4'>
              <h1 className='text-black fw-bold'>{job?.companyName}</h1>
              <p>{job?.jobTitle}</p>
           </div>
          </div>
          <p>Location: {job?.location}</p>
          <p>Skills Required: <span className='text-success'>{job?.skills}</span></p>
          <p>Salary Package: <span className='text-success'> {job?.paymentScale}</span></p>
          <p>Experience:<span className='text-success'> {job?.experience}</span></p>
          <p>{job?.jobTime}</p>

          <p>Job Description:</p>
          <p style={{textAlign:'justify'}}>{job?.jobDescription}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         <Link to={'/contact'}>
            <Button variant="primary" onClick={handleNav}>
             Apply
            </Button>
         </Link>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default JobCards