import React from 'react'
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
  var [rpassword, changerp] = React.useState("");
  var [rname, changern] = React.useState("");
  var [rpassword2, changerp2] = React.useState("");
  var [rm, changerm] = React.useState("");
  var [rpassword3, changerp23] = React.useState("");
  var [rm3, changerm3] = React.useState("");
  var [showdd, showd] = React.useState(true);
  const signin = async () => {
    if (!rpassword3 || !rm3) {
      toast("All fields are necessary")
      return;
    }
    const reply = await axios.post("https://foursnakeandladderapi.onrender.com/api/v1/login", {
      email: rm3,
      password: rpassword3
    }).then((res) => {
      const msg = res.data.msg;
      if (msg === "OK") {
        localStorage.setItem("email", rm3);
        localStorage.setItem("Verified", true)
        localStorage.setItem("start", false)
        localStorage.setItem("slide1", 1)
        
        localStorage.setItem("fwd1", true);
        localStorage.setItem("fwd2", true);
        localStorage.setItem("fwd3", true);
        localStorage.setItem("fwd4", true);
        localStorage.setItem("n1", 0);
                            localStorage.setItem("n2", 0);
                            localStorage.setItem("n3", 0);
                            localStorage.setItem("n4", 0);
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
    window.location.reload();
  }

  const notify = async () => {
    if (!rpassword || !rpassword2 || !rm || !rname) {
      toast("All fields are necessary")
      return;
    }
    if (rpassword != rpassword2) {
      toast("Password do not match");
      return;
    }
    await axios.post("https://foursnakeandladderapi.onrender.com/api/v1/verify/report", {
      email: rm,
      name: rname,
      password: rpassword
    })
      .then((res) => {
        if (res.data.msg && res.data.msg === "Already Registered") {
          toast("ALREADY REGISTERED")
          return;
        }
        else {
          toast(`Verify Your Mail....${res.data.datas}`)
        }
      })
      .catch((err) => {
        if (err.response.data.msg === true) {
          toast("ALREADY REGISTERED")
          return;
        }
        toast(`An Error Occurred, Please Try Again Later`)
      })
  };

  return (
    <>
      <div className='bg-slate-300 my-[15%] md:my-[20%] lg:my-[10%] gap-5 mx-auto grid grid-cols-2 justify-around md:grid-rows-2 md:grid-cols-1 '>
        <div className='align-centre col-start-1  md:row-start-2 px-5 w-[] md:w-[100%] '>
          <h1 className='font-bold head align-left'>
            General Instructions
          </h1>
          <div className=''>
            <ul style={{ listStyleType: "disc" }} className='ml-[10px]'>
              <li>
                A player can only initiate the game when "1" come on die
              </li>
              <li>
                If you get "6" on the die then you willl get one more chance
              </li>
              <li>
                To Finish the game, player have to reach 100 and then again come back to 0(home)
              </li>
              <li>
                Player to reach the home again will win the game
              </li>
              <li>
                Tip: Player can climb the ladder and snake can eat the player
              </li>
            </ul>
          </div>
        </div>
        <div className='col-start-2 md:col-start-1 md:row-start-1  flex flex-col'>
          <form className={`${showdd ? "" : "hidden"} flex flex-col  relative mr-10 md:px-[20%] mb-10 mt-[-20px]`}>
            <label>Enter Your Username</label>
            <input
              required
              className='rform'
              type="text"
              placeholder='Username'
              onChange={e => { changern(rname = e.target.value) }}
            />
            <label>Enter Your Email</label>
            <input
              required
              placeholder='Email'
              className='rform'
              type="email"
              onChange={e => { changerm(rm = e.target.value) }}
            />
            <label>Enter Your Password</label>
            <input
              required
              placeholder='Password'
              className='rform'
              type="password"
              onChange={e => { changerp(rpassword = e.target.value) }}
            />
            <label>Confirm Your Password</label>
            <input
              required
              placeholder='Password'
              className='rform'
              onChange={e => { changerp2(rpassword2 = e.target.value) }}
              type="password"
            />
            <button type="button" onClick={notify} className='bg-green-300 font-semibold text-lg max-w-fit px-4 rounded-sm mx-auto mt-4 border-red-300 btnr'>Register</button>
          </form>
          <form className={`${showdd ? "hidden" : ""} shows flex flex-col w-[90%] mx-auto`}>
            <label className='mb-0'>
              Enter your Email
            </label>
            <input
              required
              className='mt-0 mb-3'
              type='email'
              placeholder='Email'
              onChange={(e) => changerm3(e.target.value)}
              value={rm3}
            />
            <label className='mt-0 mb-0'>
              Enter your Password
            </label>
            <input
              className='mt-0'
              type="password"
              placeholder='Password'
              onChange={(e) => { changerp23(e.target.value) }}
              value={rpassword3}
            />
            <button type="button" onClick={signin} className='text-slate-200 mt-4 bg-blue-500 px-4 rounded-sm h-[30px] gap-3 ' >Sign In</button>
          </form>
          <div className='shows centre cursor-pointer text-green-700 ml-[-29px]' >
            <p className={`${showdd ? "" : "hidden"}  px-auto text-center ml-[-30px]  `} onClick={() => showd(showdd = false)}>
              Already Registered? Login Here
            </p>
            <p className={`${showdd ? "hidden" : ""} ml-10`} onClick={() => showd(showdd = true)}>
              Not registered yet? Register Here!
            </p>
          </div>
        </div>

      </div>

      <ToastContainer />
    </>
  )
}

export default Register