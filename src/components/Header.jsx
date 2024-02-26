import React, { useContext, useEffect, useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { tokenAuthContext } from '../Context/TokenAuthContextShare'
 
function Header() {
  const {isAuthorised,setIsAuthorised} = useContext(tokenAuthContext)
  const navigate = useNavigate()
const [loginSuccesss,setLoginSuccess] = useState(false)
useEffect(()=>{
  if(sessionStorage.getItem("token")){
    setLoginSuccess(true)
  }else{
setLoginSuccess(false)
  }
},[])

const handleLogout = () =>{
  sessionStorage.clear()
  setIsAuthorised(false)
  setLoginSuccess(false)
navigate("/")
}
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
            {loginSuccesss?
              <Nav className="ms-auto ">
              <Nav.Link ><Link to={'/'} className='mx-3 text-black fs-6 c' style={{textDecoration:'none'}}>Home</Link></Nav.Link>
              <Nav.Link ><Link to={'/about'} className='text-black fs-6 c mx-3'style={{textDecoration:'none'}} >About Us</Link></Nav.Link>
              <Nav.Link ><Link to={'/alljobs'} className='text-black fs-6 c mx-3' style={{textDecoration:'none'}}>Jobs</Link></Nav.Link>
              <Nav.Link ><Link to={'/contact'} className='text-black fs-6 c mx-3' style={{textDecoration:'none'}}>Contact</Link></Nav.Link>
             {/* <Nav.Link href='/login' className='text-black fs-6 c mx-3'>Login</Nav.Link>
            <Link to={'/register'} className="btn btn-success fs-6 mx-3">Sign up</Link> */}
            <button onClick={handleLogout} className="btn btn-success fs-6 mx-3">Logout</button>
            </Nav>:
            <Nav className="ms-auto ">
            <Nav.Link ><Link to={'/'} className='mx-3 text-black fs-6 c' style={{textDecoration:'none'}}>Home</Link></Nav.Link>
            <Nav.Link ><Link to={'/about'} className='text-black fs-6 c mx-3'style={{textDecoration:'none'}} >About Us</Link></Nav.Link>
            <Nav.Link ><Link to={'/login'} className='text-black fs-6 c mx-3'style={{textDecoration:'none'}} >Login</Link></Nav.Link>
           {/* <Nav.Link href='/login' className='text-black fs-6 c mx-3'>Login</Nav.Link> */}
          <Link to={'/register'} className="btn btn-success fs-6 mx-3">Sign up</Link>
          </Nav>
            }
          </Navbar.Collapse>
        </Container>

      </Navbar>
    </div>
  )
}

export default Header