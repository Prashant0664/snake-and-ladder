import React from 'react'
import { AiOutlineGithub, AiFillLinkedin, AiTwotonePlusSquare, AiFillGitlab, AiTwotoneDownCircle, AiFillHeart, } from "react-icons/ai"
import Play from './Play';
import Sidebar1 from './sidebar';
import Rightsidebar from './rightsidebar';
const Leftbar = () => {
    const [slide1, cslide1] = React.useState(localStorage.getItem("slide1"));
    const [start, cstart] = React.useState("true"===eval(localStorage.getItem("start")));
    const [a, ca] = React.useState(0);
    const [b, cb] = React.useState(0);
    const [c, cc] = React.useState(0);
    const [d, cd] = React.useState(0);

    return (
        <>
            <Rightsidebar cstart={cstart} ca={ca} cb={cb} cc={cc} cd={cd} />
            <div className={`${start ? "hidden" : ""} bg-slate-300 text-black absolute top-0 w-[300px] lfb11 h-[100%] `}>
                <div className='lsbmc'>
                    <form className='py-[5%] px-[8%] lsbfrm'>
                        <label className={`${!start ? "" : "hidden"} hid-small lfb11`}>Enter Number of Players</label>
                        <br />

                        <span className={` ${!start ? "" : "hidden"} hid-small lsbform flex w-[100%] flex-row gap-[9%]`}>
                            <input type="range" onChange={(e) => { localStorage.setItem("slide1", slide1); cslide1(e.target.value); localStorage.setItem("slide1", slide1) }} min="1" max="4" value={slide1} className="lsbform1" id="myRange" />
                            <input type='number' min="1" max="4" onChange={(e) => { cslide1(e.target.value); localStorage.setItem("slide1", slide1) }} value={slide1} className='w-[45px] h-[25px] lsbform12 text-black bg-slate-300 border-solid border px-2 py-[1px]' />
                        </span>
                        <div className='small-side'>
                            <label className={`${!start ? "" : "hidden"} text-lsb `}>Enter Number of Players</label>
                            <br />

                            <span className={` ${!start ? "" : "hidden"} lsbform flex w-[100%] flex-row gap-[9%]`}>
                                <input type="range" onChange={(e) => { localStorage.setItem("slide1", slide1); cslide1(e.target.value); localStorage.setItem("slide1", slide1) }} min="1" max="4" value={slide1} className="lsbform1" id="myRange" />
                                <input type='number' min="1" max="4" onChange={(e) => { cslide1(e.target.value); localStorage.setItem("slide1", slide1) }} value={slide1} className='w-[45px] h-[25px] lsbform12 text-black bg-slate-300 border-solid border px-2 py-[1px]' />
                            </span>
                            <br/>
                            <div className='flex lfnb gap-[10%] hid-small top-0 justify-center'>
                            <span className={`  ${slide1 >= 1 ? "" : "hidden"}${!start ? "" : "hidden"}`}>

                                <AiTwotonePlusSquare className={` ${!start ? "" : "hidden"} ${slide1 >= 1 ? "" : "hidden"}text-red-500 text-xl border-solid border-black border-spacing-0 border bg-red-600`} />
                                <span className={`${slide1 >= 1 ? "" : "hidden"}`}>P1</span>
                            </span>
                            <br />

                            <span className={`  ${slide1 >= 2 ? "" : "hidden"} ${!start ? "" : "hidden"}`}>

                                <AiTwotoneDownCircle className={`${slide1 >= 2 ? "" : "hidden"}text-xl text-blue-500 border-solid border-black border-spacing-0 border rounded-full`} />
                                <span className={`${slide1 >= 2 ? "" : "hidden"}`}>P2</span>
                            </span>
                            <br />

                            <span className={`  ${slide1 >= 3 ? "" : "hidden"} ${!start ? "" : "hidden"}`}>

                                <AiFillHeart className={`${eval(slide1) >= 3 ? "" : "hidden"}text-pink-600 text-xl`} />
                                <span className={`${slide1 >= 3 ? "" : "hidden"}`}>P3</span>
                            </span>
                            <br />

                            <span className={`  ${slide1 >= 4 ? "" : "hidden"} ${!start ? "" : "hidden"}`}>

                                <AiFillGitlab className={`${eval(slide1) >= 4 ? "hidden" : "hidden"}text-purple-700 text-xl`} />
                                <span className={`${slide1 >= 4 ? "" : "hidden"}`}>P4</span>
                            </span>
                        </div>
                        
                        </div>
                        <br />
                        <div className='flex lfnb gap-[10%] hid-small top-0 justify-center'>
                            <span className={` hid-small ${slide1 >= 1 ? "" : "hidden"}${!start ? "" : "hidden"}`}>

                                <AiTwotonePlusSquare className={` ${!start ? "" : "hidden"} ${slide1 >= 1 ? "" : "hidden"}text-red-500 text-xl border-solid border-black border-spacing-0 border bg-red-600`} />
                                <span className={`${slide1 >= 1 ? "" : "hidden"}`}>P1</span>
                            </span>
                            <br />

                            <span className={` hid-small ${slide1 >= 2 ? "" : "hidden"} ${!start ? "" : "hidden"}`}>

                                <AiTwotoneDownCircle className={`${slide1 >= 2 ? "" : "hidden"}text-xl text-blue-500 border-solid border-black border-spacing-0 border rounded-full`} />
                                <span className={`${slide1 >= 2 ? "" : "hidden"}`}>P2</span>
                            </span>
                            <br />

                            <span className={` hid-small ${slide1 >= 3 ? "" : "hidden"} ${!start ? "" : "hidden"}`}>

                                <AiFillHeart className={`${eval(slide1) >= 3 ? "" : "hidden"}text-pink-600 text-xl`} />
                                <span className={`${slide1 >= 3 ? "" : "hidden"}`}>P3</span>
                            </span>
                            <br />

                            <span className={` hid-small ${slide1 >= 4 ? "" : "hidden"} ${!start ? "" : "hidden"}`}>

                                <AiFillGitlab className={`${eval(slide1) >= 4 ? "hidden" : "hidden"}text-purple-700 text-xl`} />
                                <span className={`${slide1 >= 4 ? "" : "hidden"}`}>P4</span>
                            </span>
                        </div>
                        <button type="button" onClick={() => {
                            cstart(!start);
                            localStorage.setItem("n1", 0);
                            localStorage.setItem("n2", 0);
                            localStorage.setItem("n3", 0);
                            localStorage.setItem("n4", 0);
                            localStorage.setItem("start", !start);
                            localStorage.setItem("slide1", slide1);
                        }} className={`${!start ? "" : "hidden"} text-center kjbji lsbstg flex justify-center w-[100%] bg-green-500 text-slate-200 mt-4 h-[45px] items-center text-2xl hover:scale-110 hover:shadow-lg `}>Start</button>
                        <button type="button" onClick={() => {
                            cstart(!start);
                            localStorage.setItem("n1", 0);
                            localStorage.setItem("n2", 0);
                            localStorage.setItem("n3", 0);
                            localStorage.setItem("n4", 0);
                            localStorage.setItem("start", !start);
                            localStorage.setItem("slide1", slide1);
                        }} className={`${!start ? "" : "hidden"} md:hidden text-center lsbstg flex justify-center w-[100%] bg-green-500 text-slate-200 mt-4 h-[45px] items-center text-2xl hover:scale-110 hover:shadow-lg `}>Start The Game</button>
                    </form>

                </div>
            </div>
            <div className={` absolute float-left md:w-[130px] w-[280px] lg:w-[160px] xl:w-[200px] mx-auto px-auto flex justify-evenly bottom-0  mt-[100%] mb-[10px] mlogo `}>
                <a href='https://github.com/Prashant0664/snake-and-ladder' target='_blank'><AiOutlineGithub className={`text-[26px] hover:scale-110 kknkl`} /></a>
                <a href='https://www.linkedin.com/in/prashant-693591228' target='_blank'><AiFillLinkedin className={`text-[26px] hover:scale-110 kknkl`} /></a>
            </div>
            <div className='bg-pink-400 text-red-400'>
                <Sidebar1 />
            </div>
            <Play start={start} slide1={slide1} a={a} b={b} c={c} d={d} />
        </>
    )
}

export default Leftbar