import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';

function Add() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
     <button onClick={handleShow} className="btn btn-success">Post a Job </button>

     {/* modal to add a project */}
     <Modal
     size='lg'
      show={show} 
      onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">

              <div className="mb-3 text-black">
              <input type="text" className=" border rounded p-2 w-100" placeholder='Job Title'/>
            </div>

            <div className="mb-3 text-black">
              <input type="text" className=" border rounded p-2 w-100" placeholder='Company Name'/>
            </div>

            <div className="mb-3 text-black">
              <input type="text" className=" border rounded p-2 w-100" placeholder='Pay Scale'/>
            </div>

              </div>
              <div className="col-lg-6">

              <div className="mb-3 text-black">
              <input type="text" className=" border rounded p-2 w-100" placeholder='Location'/>
            </div>

            <div className="mb-3 text-black">
              <input type="text" className=" border rounded p-2 w-100" placeholder='Company Url'/>
            </div>

            <div className="mb-3 text-black">
              <input type="text" className=" border rounded p-2 w-100" placeholder='Job Title'/>
            </div>

              </div>
              <div className="mb-3 text-black">
                <textarea placeholder='Job Description' className='w-100 border rounded p-2'  cols="30" rows="6"></textarea>
            </div>
              
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>


  )
}

export default Add