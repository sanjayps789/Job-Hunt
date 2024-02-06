import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'
import About from './pages/About'
import Contact from './pages/Contact'
import AllJobs from './pages/AllJobs'
import Profile from './pages/Profile'

function App() {

  return (
    <>
     <Routes>
    <Route  path='/' element={<Home/>} />
    <Route  path='/register' element={<Auth insideRegister/>} />
    <Route  path='/login' element={<Auth/>} />
    <Route  path='/about' element={<About/>} />
    <Route  path='/alljobs' element={<AllJobs/>} />
    <Route  path='/contact' element={<Contact/>} />
    <Route  path='/profile'  element={<Profile/>}/>
    <Route  path='/*' element={<Navigate to={'/'}/>} />
     </Routes>
    </>
  )
}

export default App
