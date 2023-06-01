import React from 'react'

import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Header = () => {

  var [lusername, changelu] = React.useState("");
  var [lpassword, changelp] = React.useState("");
  const signin = async (e) => {
    e.preventDefault()
    if (!lpassword || !lusername) {
      toast("All fields are necessary")
      return;
    }
    const reply = await axios.post("https://foursnakeandladderapi.onrender.com/api/v1/login", {
      email: lusername,
      password: lpassword
    }).then((res) => {
      const msg = res.data.msg;
      if (msg === "OK") {
        localStorage.setItem("email", lusername);
        localStorage.setItem("Verified", true)
        localStorage.setItem("start", false)
        localStorage.setItem("slide1", 1)
        localStorage.setItem("fwd1", true)
        localStorage.setItem("fwd2", true)
        localStorage.setItem("fwd3", true)
        localStorage.setItem("fwd4", true)
        window.location.reload();
      }
      else if (msg === "PLEASE VERIFY YOUR EMAIL FIRST") {
        toast(msg);
      }
      else {
        toast("Credentials do not match");
      }
    }).catch((err) => {
      toast("AN ERROR OCCURRED");
    })
  }
  return (
    <>
      <div className='bg-slate-600 h-[50px] flex flex-row justify-between items-start'>
        <div className='white px-4 p-[auto] font-medium big'>
          4Snake and Ladder
        </div>
        <div className=' px-[auto] my-auto pr-3 flex flex-row justify-between gap-2'>
          <form className='from-input-login flex flex-row justify-between gap-2'>
            <input
              className='from-input-login-main white'
              type="email"
              placeholder='Email'
              onChange={e => changelu(lusername = e.target.value)}
              value={lusername}
            />
            <input
              className='white from-input-login-main'
              type="password"
              placeholder='Password'
              onChange={e => changelp(lpassword = e.target.value)}
              value={lpassword}
            />
            <button type="submit" className='text-slate-200 bg-blue-500 px-4 rounded-sm h-[30px] gap-3 ' onClick={(e)=>signin(e)}>Sign In</button>

          </form>

        </div>
      </div>

      <ToastContainer />
    </>
  )
}

export default Header