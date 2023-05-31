import React from 'react'
import "../style/login-register.css"
import Header from './header'
import Register from './register';
const Login = () => {

  return (
    <>
      <div className='bg-slate-300 absolute h-[100%] w-[100%] sm:hidden'>
        <Header />
        <Register />
      </div>
      <div className='shows mobilel bg-slate-300 h-[100%] absolute'>
        <div className=''>
          <div className='bg-slate-600 h-[50px] flex flex-row justify-between items-start'>
            <div className='white px-4 p-[auto] font-medium big'>
              4Snake and Ladder
            </div>
          </div>
        </div>
        <Register />

      </div>

      <div className='footer1 relative top-[95vh]'>
        <a href="https://www.github.com/prashant0664">
          @2021-2025 4Snake and Ladder Developed by
          Prashant
        </a>
      </div>
    </>
  )
}

export default Login