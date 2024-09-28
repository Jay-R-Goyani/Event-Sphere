import React from 'react'
import RightsideRegcollege from './college_register'
// import './loginstyle.scss'

function CollegeRegister() {
  return (
    <>
      <div className='main'>
        <div className="left-side">

          {/* <img src="back_login.jpg" alt="" /> */}
          <video src="back_video-vmake.mp4" autoPlay muted loop></video>

          <div className="description">
            <h2>Welcome to</h2>
            <h3>Event Sphere Community</h3>
            <h4>Home to Event Enthusiasts across the country.</h4>
          </div>
        </div>
        <div className="right-side">
          <RightsideRegcollege/>
        </div>
      </div>
    </>
  )
}

export default CollegeRegister