import React, { useContext, useState } from 'react'
import Spinner from 'react-bootstrap/Spinner';
import AuthImage from '../assets/AuthImage.svg'
import { FloatingLabel, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginAPI, registerAPI } from '../services/allAPI';
import { tokenAuthContext } from '../Context/TokenAuthContextShare';

function Auth({ insideRegister }) {
  const {isAuthorise,setIsAuthorised} = useContext(tokenAuthContext)
  const navigate = useNavigate()
  const [userInputData, setUserInputData] = useState({
    username: "", email: "", password: ""
  })
  const [loginStatusIcon,setLoginStatusIcon] = useState(false)
  // function to handle register
  const handleRegister = async (e) => {
    e.preventDefault()
    const { username, email, password } = userInputData
    if (!username || !email || !password) {
      toast.info("Please fill the form completely")
    } else {
      // toast.success("proceed to api call")
      try {
        const result = await registerAPI(userInputData)
        console.log(result);
        if (result.status == 200) {
          // console.log(result);
          toast.success(`Welcome ${result.data.username}... Please login to explore our site!!!`)
          setUserInputData({ username: "", email: "", password: "" })
          // navigate to login
          setTimeout(() => {
            navigate("/login")
          }, 2000)
        } else {
          toast.error(result.response.data)
          setTimeout(() => {
            navigate("/login")
          }, 2000) 
        }
      } catch (err) {
        console.log(err);
      }
    }
  }

  // function to handle login
  const handleLogin = async(e) =>{
    e.preventDefault()
  const {email,password} = userInputData
  if(!email || !password){
    toast.info("Please fill the form completely!!!")
  }else{
    // proceed to api call
    try{
      const result = await loginAPI({email,password})
      // console.log(result);
      if(result.status==200){
        setUserInputData({email:"",password:""})
        sessionStorage.setItem("userDetails",JSON.stringify(result.data.existingUser))
        sessionStorage.setItem("token",result.data.token)
        // navigate to landing page
        setLoginStatusIcon(true)
        setIsAuthorised(true)
       setTimeout(()=>{
        navigate("/")
       },2000)
      }else{
        toast.error(result.response.data)
      }

    }catch(err){
      console.log(err);
    }
  }
  }
  console.log(userInputData);

  return (
    <div style={{ width: '100%', height: '100vh' }} className='d-flex align-items-center justfy-content-center'>
      <div className="container w-75">
        <Link to={'/'} > <i class="fa-solid fa-arrow-left-long fa-beat-fade fa-flip-vertical text-primary"></i> back to home</Link>
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
              <h5 className='text-light'>Sign {insideRegister ? "Up" : "In"} to your Account</h5>
              <Form>
                {insideRegister &&
                  <FloatingLabel className='mb-2' controlId="floatingUname" label="Username">
                    <Form.Control type="text" placeholder="Username"
                      value={userInputData.username} onChange={e => setUserInputData({ ...userInputData, username: e.target.value })} />
                  </FloatingLabel>}

                <FloatingLabel className='mb-3' controlId="floatingEmail" label="Email">
                  <Form.Control type="email" placeholder="Enter email"
                    value={userInputData.email} onChange={e => setUserInputData({ ...userInputData, email: e.target.value })} />
                </FloatingLabel>

                <FloatingLabel className='mb-3' controlId="floatingPassword" label="Password">
                  <Form.Control type="password" placeholder="Enter password"
                    value={userInputData.password} onChange={e => setUserInputData({ ...userInputData, password: e.target.value })} />
                </FloatingLabel>
                {insideRegister ?
                  <div>
                    <button onClick={handleRegister} className="btn btn-light mb-3">Register</button>
                    <p>Already have an Account? Click here to <Link to={'/login'}>Login</Link></p>
                  </div> :
                  <div>
                    <button onClick={handleLogin} className="btn btn-light mb-3">Login 
                     {loginStatusIcon&&<Spinner animation="border" variant="primary" />}</button>
                    <p className='text-light'>New User? Click here to <Link to={'/register'}>Register</Link></p>
                  </div>
             
                }
              </Form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer  autoClose={3000} />
    </div>
  )
}

export default Auth