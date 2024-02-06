import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function About() {
  return (
    <div style={{height:'80vh'}}>
      <Header/>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6">
            <img style={{objectFit:'contain'}} className='img-fluid' src="https://i.postimg.cc/JhRz9tTk/Team-spirit-pana.png" alt="" />
          </div>
          <div className="col-lg-6 col-md-6">
            <h1>About Us</h1>
            <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est laboriosam, harum dolorum quaerat atque a odio voluptates unde, veritatis nisi fuga necessitatibus aliquid et libero, vel quibusdam qui nostrum laudantium?Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora doloribus, omnis eum delectus nemo voluptas ipsa laborum commodi quidem, illum voluptatum magni odit nesciunt, dolor vitae. Repellendus pariatur molestias nisi.</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default About