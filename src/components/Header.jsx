import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header({insideAllJobs}) {
  return (
  
    <div className='w-100 py-4'>
      <Navbar expand="lg" className="bg-body-white">
        <Container>
          <Link style={{ textDecoration: 'none' }} to={'/'}>
            <Navbar.Brand>
            <i class="fa-solid fa-people-carry-box mx-2 fs-3 text-success"/>
              <span className='w-50 text-success fw-bold' style={{ fontSize: '28px' }}>JobHunt</span>
            </Navbar.Brand> 
            </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto ">
              <Nav.Link href='/ ' className='mx-3 text-black fs-6 c' >Home</Nav.Link>
              <Nav.Link href='/about' className='text-black fs-6 c mx-3' >About Us</Nav.Link>
              <Nav.Link href='/alljobs' className='text-black fs-6 c mx-3' >Jobs</Nav.Link>
              <Nav.Link href="/contact" className='text-black fs-6 c mx-3'>Contact</Nav.Link>
             <Nav.Link href='/login' className='text-black fs-6 c mx-3'>Login</Nav.Link>
            <Link to={'/register'} className="btn btn-success fs-6 mx-3">Sign up</Link>
            
         
            </Nav>
          </Navbar.Collapse>
        </Container>

      </Navbar>
    </div>
  )
}

export default Header