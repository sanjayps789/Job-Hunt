import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
          <Header/>
          <div className="container w-100">
            <div className="row align-items-center">
              <div className="col-lg-7 col-md-6 col-sm-6">
                <h1 style={{fontSize:'3rem'}} className='text-dark'>
                  Find the perfect Job <br />
                  that you deserve
                  </h1>
                  <Link to={'/alljobs'} className="btn btn-success text-white fw-bold my-3 px-5">Get Started</Link>
              </div>
              <div className="col-lg-5 col-md-6 col-sm-6">
                <img className='img-fluid' src="https://i.postimg.cc/Gh1T9M7F/Job-Hunting-Illustration.jpg" alt="" />
              </div>
            </div>

          </div>
          <Footer/>
    </div>
  )
}

export default Home