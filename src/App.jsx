import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'
import About from './pages/About'
import Contact from './pages/Contact'
import AllJobs from './pages/AllJobs'
import Profile from './pages/Profile'
import { useContext } from 'react'
import { tokenAuthContext } from './Context/TokenAuthContextShare'

function App() {
const {isAuthorised,setIsAusthorised} = useContext(tokenAuthContext)
  return (
    <>
     <Routes>
    <Route  path='/' element={<Home/>} />
    <Route  path='/register' element={<Auth insideRegister/>} />
    <Route  path='/login' element={<Auth/>} />
    <Route  path='/about' element={<About/>} />
    <Route  path='/alljobs' element={isAuthorised?<AllJobs/>:<Home/>} />
    <Route  path='/contact' element={isAuthorised?<Contact/>:<Home/>} />
    <Route  path='/profile'  element={isAuthorised?<Profile/>:<Home/>}/>
    <Route  path='/*' element={<Navigate to={'/'}/>} />
     </Routes>
    </>
  )
}

export default App
