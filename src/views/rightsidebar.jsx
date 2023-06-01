import React, { useState } from 'react'
import { AiOutlineMenuFold } from "react-icons/ai"
import { ImBin } from "react-icons/im"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Rightsidebar = ({ cstart, ca, cb, cc, cd }) => {
    const [show, cshow] = useState(false);
    const [sgl, csgl] = useState(false);
    const [sna, csna] = useState("");
    const [sg, csg] = useState(["No Saved Game"]);
    const [ssname, cssname] = useState(false);
    const [arr, carr] = useState([]);
    const signout = () => {
        localStorage.removeItem("Verified")
        localStorage.removeItem("email")
        localStorage.clear();
        window.location.reload();
    }

    const startagain = () => {
        cstart(false);
        localStorage.setItem("start", false);
        localStorage.setItem("n1", 0);
        localStorage.setItem("n2", 0);
        localStorage.setItem("n3", 0);
        localStorage.setItem("n4", 0);
        localStorage.setItem("fwd1", true);
        localStorage.setItem("fwd2", true);
        localStorage.setItem("fwd3", true);
        localStorage.setItem("fwd4", true);
        window.location.reload();
    }
    const savegame = async (e) => {
        e.preventDefault();
        if (!sna) {
            toast("Please Provide name of game to be saved");
            return;
        }
        try {
            const data = await axios.post("https://foursnakeandladderapi.onrender.com/api/v1/savegame/", {
                n1: localStorage.getItem("n1"),
                n2: localStorage.getItem("n2"),
                n3: localStorage.getItem("n3"),
                n4: localStorage.getItem("n4"),
                slide1: localStorage.getItem("slide1"),
                fwd1: localStorage.getItem("fwd1"),
                fwd2: localStorage.getItem("fwd2"),
                fwd3: localStorage.getItem("fwd3"),
                fwd4: localStorage.getItem("fwd4"),
                name: sna,
                email: localStorage.getItem("email")
            })
            toast("Successfullt Saved");
        } catch (error) {
            toast("an error Occurred :/");
        }
    }
    const load = async () => {
        try {
            const data = await axios.post("https://foursnakeandladderapi.onrender.com/api/v1/savegame/loadgame/", {
                email: localStorage.getItem("email")
            }).then((res) => {
                var str = res.data.msg;
                var arr = JSON.parse(str);
                var arr2 = [];
                for (let i = 0; i < arr.length; i++) {
                    arr2.push(arr[i].name);
                }
                csg(arr2)
                carr(arr);
                return;
            }).catch((err) => {
                console.log(err)
                // toast("AN ERROR OCCURRED");
            })
        } catch (error) {
            console.log(error)
            // toast("AN ERROR OCCURRED");
        }
    }

    return (
        <>
            <AiOutlineMenuFold className={`${show ? "hidden" : ""} cursor-pointer float-right rsbmin right-0 top-0 mr-2 mt-2 h-[30px] w-[30px] `} onClick={() => cshow(!show)} />
            <div className={`${show ? "" : "hidden"} top-0 absolute bg-slate-600 opacity-60 w-[100%] h-[100%] blur-2xl bgblr z-[9999999]`} onClick={() => cshow(false)}>

            </div>
            <div className={`${show ? "" : "hidden"} border border-solid px-[10px] border-black border-x-[3px] right-0 top-0 rsbmc2 float-right w-[260px] bg-slate-400 h-[100%] mr-[0px] mt-0px absolute block z-[1000000000]`}>
                <div className='flex text-left'>
                    <ul className='text-white w-[100%] text-center cursor-pointer flex gap-2 flex-col ml-[10px]'>
                        <li className=' w-[100%] border border-red-400 rounded-lg bg-red-400 text-black px-2 py-1 right-0 float-right mt-[10px] cursor-pointer' onClick={signout}>
                            Sign Out
                        </li>
                        <li onClick={startagain} className='w-[100%] bg-blue-300 rounded-md py-1 text-black font-bold'>
                            New Game
                        </li>
                        <li className={`w-[100%] bg-blue-300 rounded-md py-1 text-black font-bold`} >
                            <div className='' onClick={() => cssname(!ssname)}>
                                Save Game
                            </div>
                            <ul className={`${ssname ? "" : "hidden"}`}>
                                <li>
                                    <form className='text-black bg-green'>
                                        <input type="text" value={sna} placeholder='Name' onChange={(e) => { csna(e.target.value) }} />
                                        <button className='bg-green-300 w-[100%]' onClick={(e) => savegame(e)}>Save</button>
                                    </form>
                                </li>
                            </ul>
                        </li>
                        <li onClick={() => { csgl(!sgl); load() }} className='w-[100%] bg-blue-300 rounded-md py-1 text-black font-bold'>
                            Load Game
                            <ul className={`${sgl ? "" : "hidden"} max-h-[300px] hellodd overflow-scroll flex flex-col `}>
                                {sg.map((i, j) => {
                                    return (
                                        <>
                                            <li className='bg-green-300 text-black' onClick={() => {
                                                localStorage.setItem("n4", eval(arr[j].n4));
                                                localStorage.setItem("n3", eval(arr[j].n3));
                                                localStorage.setItem("n2", eval(arr[j].n2));
                                                localStorage.setItem("n1", eval(arr[j].n1));
                                                localStorage.setItem("fwd1", eval(arr[j].fwd1));
                                                localStorage.setItem("fwd2", eval(arr[j].fwd2));
                                                localStorage.setItem("fwd3", eval(arr[j].fwd3));
                                                localStorage.setItem("fwd4", eval(arr[j].fwd4));
                                                localStorage.setItem("start", true);
                                                localStorage.setItem("slide1", arr[j].slide1);
                                                window.location.reload();
                                            }}>
                                                <span className='pl-[10px] flex text-center justify-between'>
                                                    {i}
                                                    <ImBin className='hover:text-red-500 float-right right-0 text-[20px] color-black hover:opacity-100' onClick={async () => {
                                                        try {
                                                            const data = await axios.post("https://foursnakeandladderapi.onrender.com/api/v1/savegame/deletegame", {
                                                                email: localStorage.getItem("email"),
                                                                index: j
                                                            }).then((res) => {
                                                                var str = res.data.msg;
                                                                var arr = JSON.parse(str);
                                                                var arr2 = [];
                                                                for (let i = 0; i < arr.length; i++) {
                                                                    arr2.push(arr[i].name);
                                                                }
                                                                csg(arr2)
                                                                carr(arr);
                                                                return;
                                                            }).catch((err) => {
                                                                console.log(err)
                                                            })
                                                        } catch (error) {
                                                            console.log(error)
                                                            // toast("AN ERROR OCCURRED");
                                                        }
                                                    }} />
                                                </span>
                                            </li>
                                        </>
                                    )
                                })}
                            </ul>
                        </li>
                        <li className='w-[100%] bg-blue-300 rounded-md py-1 text-black font-bold' onClick={startagain}>
                            End Game
                        </li>
                    </ul>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default Rightsidebar