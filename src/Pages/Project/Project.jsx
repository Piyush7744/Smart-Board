import React from 'react'
import "./Project.css"

const Project = () => {
  return (
    <>
      <h1 className='heading'>Perform following steps to use Smart Board</h1>

      <div className="main">
        <div className="circle">
          <h1 className='text1'>Step 1</h1>
          <div className="rectangle">
              <h1 className='text'>Login</h1>
          </div>
        </div>
      </div>

      <div className='img1'>
        <img src="public/login.png" alt="login photo" />
      </div>

    </>
  )
}

export default Project
