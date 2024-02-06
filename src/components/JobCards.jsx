import React from 'react'
import AuthImage from '../assets/AuthImage.svg'

function JobCards() {
  return (
    <div>
        
        <div size="lg" className="card shadow border my-2 p-4" >
            <div className='d-flex align-items-center justify-content-between'>
            <div className='d-flex'>
                <img src={AuthImage} width={'50px'} height={'50px'} alt="" />
                <div className='m-2'>
                    <h4>Google</h4>
                    <span>Front End Developer</span>
                </div>       
            </div>
            <p>6LPA</p>
            </div>

        </div>
   
    </div>
  )
}

export default JobCards