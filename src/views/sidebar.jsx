import React, { useState } from 'react'
import "../../src/App.css"
const Sidebar1 = () => {
  const [show, cshow] = useState(false);
  return (
    <>
      <div className={`${show ? "" : "hidden"} absolute bg-slate-300 opacity-60 w-[100%] h-[100%] blur-2xl bgblr`} onClick={() => cshow(false)}>

      </div>
      <div className={`${show ? "" : "hidden"} w-[260px] bg-white h-[100vh] ml-0px mt-0px absolute `}>
        <div className=''>

        </div>
      </div>
    </>
  )
}

export default Sidebar1