import React, { useEffect, useState } from 'react'
import dummyProfile from '../assets/dummyProfile.jpeg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Form } from 'react-bootstrap'
import MyActivity from '../components/MyActivity'
import SERVER_URL from '../services/serverUrl'
import { UpdateProfileAPI } from '../services/allAPI';
function Profile() {
const [userData,setUserData] = useState({
username:"",email:"",password:"",profileImage:"",github:"",linkedin:"",about:"",headline:"",education:""
})

// state to hold existingUserProfile
const [existingImage,setExistingImage] = useState("")
// state to hold uploading profile url
const [profileImageUrl,setProfileUrl] = useState("")
useEffect(()=>{
if(sessionStorage.getItem("userDetails")){
  const userDetails = JSON.parse(sessionStorage.getItem("userDetails"))
  setUserData({...userData,username:userDetails.username,email:userDetails.email,password:userDetails.password,github:userDetails.github,linkedin:userDetails.linkedin,about:userDetails.about,headline:userDetails.headline,education:userDetails.education})
  setExistingImage(userDetails.profile)
}
},[])

useEffect(()=>{
  if(userData.profileImage){
    setProfileUrl(URL.createObjectURL(userData.profileImage))
  }
  else{
    setProfileUrl("")
  }
},[userData.profileImage])

console.log(userData);

const handleProfileUpdate = async(e)=>{
  e.preventDefault()
  const {username,email,password,profileImage,github,linkedin,about,headline,education} = userData
  if(!github || !linkedin || !about || !headline || !education){
    toast.info("Please fill the form completely")
  }
  else{
    // proceed to api call
    const reqBody = new FormData()
    reqBody.append("username",username)
    reqBody.append("email",email)
    reqBody.append("password",password)
    profileImageUrl?reqBody.append("profileImage",profileImage):reqBody.append("profileImage",existingImage)
    reqBody.append("github",github)
    reqBody.append("linkedin",linkedin)
    reqBody.append("about",about)
    reqBody.append("headline",headline)
    reqBody.append("education",education)

    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
        "Content-Type":profileImageUrl?"multipart/form-data":"application/json",
        "Authorization":`Bearer ${token}`
      }
      // api call
      try{
        const result = await UpdateProfileAPI(reqBody,reqHeader)
        if(result.status ===200){
          sessionStorage.setItem("userDetails",JSON.stringify(result.data))
          // setUserData(result.data)
        }else{
          console.log(result.data);
        }
      }catch(err){
        console.log(err);
      }
    }
  }

}
  return (
    <div className='w-100 p-5' style={{height:'100vh'}}>
      <div className="container">
        <h1 className='text-success'>Profile</h1>
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-5 col-sm-5 border p-3 mb-3 ">
            <div className="d-flex flex-column align-items-center">
              <label>
                <input type="file" style={{display:'none'}} onChange={e=>setUserData({...userData,profileImage:e.target.files[0]})}/>
               {existingImage==""? 
               <img className='w-100 img-fluid rounded' style={{height:'100px'}}  src={profileImageUrl?profileImageUrl:dummyProfile} alt="" />
              :
              <img className='w-100 img-fluid ' style={{height:'100px'}}  src={profileImageUrl?profileImageUrl:`${SERVER_URL}/uploads/${existingImage}`} alt="" />}               
              </label>
    <h3>{userData.username}</h3>
    <p>{userData.headline}</p>
    <p style={{textAlign:'justify'}}>{userData.about}</p>
            </div>
          </div>
          <div className="col-lg-7 col-md-6 col-sm-6">
            <Form>
              <div className="row align-items-center p-3">
                  <div className="col-lg-6">
              <div className='mb-4'>
                <Form.Label   >Name</Form.Label>
                <Form.Control value={userData.username} type="text"  />
              </div>
              <div className='mb-3'>
                <Form.Label >About/Bio</Form.Label>
                <Form.Control value={userData.about} onChange={e=>setUserData({...userData,about:e.target.value})}   type="text"  />
              </div>

              <div className='mb-3'>
                <Form.Label >Headline</Form.Label>
                <Form.Control value={userData.headline} onChange={e=>setUserData({...userData,headline:e.target.value})}  type="text"  />
              </div>
                  </div>
                  <div className="col-lg-6">
                  <div className='mb-4'>
                <Form.Label>Email</Form.Label> 
                <Form.Control value={userData.email}  type="email" />
              </div>

              <div className='mb-3'>
                <Form.Label>LinkedIn Url </Form.Label>
                <Form.Control value={userData.linkedin} onChange={e=>setUserData({...userData,linkedin:e.target.value})} type="text"  />
              </div>
                 
              <div className='mb-3'>
                <Form.Label>GitHub </Form.Label>
                <Form.Control value={userData.github} onChange={e=>setUserData({...userData,github:e.target.value})}  type="text"  />
              </div>
                  </div>
                  <div className='mb-3'>
                <Form.Label>Education</Form.Label>
                <Form.Control value={userData.education} onChange={e=>setUserData({...userData,education:e.target.value})} type="text"  />
              </div>
              <div className="text-center">
                <button onClick={handleProfileUpdate} className="btn btn-primary mx-3">Edit Profile</button>  
              </div>
                </div>
            </Form>
            
          </div>

        </div>
      </div>

{/* My Activity Section */}
<div className="container my-5">
  <h1 className='text-success'>My Activity</h1>
 <div className="row">
  <MyActivity/>
  
 </div>
</div>

<ToastContainer  autoClose={3000} />

    </div>
  )
}

export default Profile