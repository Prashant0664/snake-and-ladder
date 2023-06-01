
import React from 'react'
import { AiTwotonePlusSquare, AiFillGitlab, AiTwotoneDownCircle, AiFillHeart } from "react-icons/ai"
import Board from "../Assets/board.png"

const Home = ({ p1, p2, p3, p4 }) => {
    var arr = [];
    var a1 = Array.from(Array(101).keys())
    var a2 = Array.from(Array(101).keys())
    var a3 = Array.from({ length: 101 }, (v, i) => i);
    arr[0] = 0;
    var gg = 100;
    for (var vv = 1; vv <= 100; vv++) {
        arr[vv] = 100 - vv + 1;
        arr[vv] = (gg + 1 - vv);
    }
    arr = arr.slice(1, 101);
    var to = 0;
    for (to = 10; to < 20; to += 1) {
        arr[to] = 70 + to + 1;
    }
    for (to = 30; to < 40; to += 1) {
        arr[to] = 30 + to + 1;
        arr[to + 20] = 10 + to + 1;
        arr[to + 40] = -10 + to + 1;
        arr[to + 60] = 0 + to - 29;
    }

    for (var ff = 0; ff < 100; ff += 1) {
        if (arr[ff + 1] % 2 == 0) {
            a1[ff] = 10;
            a2[ff] = 220;
            a3[ff] = 230;
        }
        else {
            a1[ff] = 180;
            a2[ff] = 220;
            a3[ff] = 125;
        }
    }
    for (var hh = 1; hh <= 5; hh += 2) {
        a1[(hh) * 10 - 1] = 0;
        a2[(hh) * 10 - 1] = 220;
        a3[(hh) * 10 - 1] = 230;
        a1[(hh + 1) * 10 - 1] = 180;
        a2[(hh + 1) * 10 - 1] = 220;
        a3[(hh + 1) * 10 - 1] = 125;
    }
    a1[79] = 180;
    a2[79] = 220;
    a3[79] = 125;

    a1[(hh) * 10 - 1] = 0;
    a2[(hh) * 10 - 1] = 220;
    a3[(hh) * 10 - 1] = 230;
    a1[89] = 0;
    a2[89] = 220;
    a3[89] = 230;

    return ( 
        <div className="homebox">
            <div className='xxl:ml-[20%] home11 lg:ml-[23%] xl:ml-[23%] mt-[20px]'>
                <div className="main-grid">
                    <img src={Board} className='absolute h-[650px] imghb  ml-[-4px]' />
                    {arr.map((i, j) => {
                        return (
                            <>
                                <div className='box-text ' style={{ "--i": a1[j], "--j": a2[j], "--k": a3[j] }}>
                                    <AiTwotonePlusSquare className={`${(arr[j] === p1) ? "transitionp hover:z-[1000] md:text-[13px] hover:opacity-100 z-[2001]" : "hidden"} ml-[5px] relative top-0 mt-0 pt-0 text-red-500 text-xl border-solid border-black border-spacing-0 border bg-red-600`} />
                                    <p className='text-box' >
                                        {arr[j]}
                                    </p>
                                    <AiTwotoneDownCircle className={`${(arr[j] === (p2)) ? "transitionp " : "hidden"} md:text-[13px]  relative md:mt-[-28px] mt-[-28px] float-right top-0 ${(p1 === p2 || p2 === p4) ? "mt-[-28px]" : "mt-[-25px]"} ${p1 === p2 ? "" : "mt-[-49px]"} relative text-xl text-blue-500 border-solid border-black border-spacing-0 border rounded-full`} />
                                    <AiFillHeart className={`${(arr[j] === ((p3))) ? "transitionp z-80" : "hidden"}  md:text-[13px] relative float-left mt-[-33px]   text-pink-600 text-xl`} />
                                    <AiFillGitlab className={`${(arr[j] === ((p4))) ? " transitionp z-80" : " hidden "} md:text-[13px] relative ${p4===p2?( p4===p1?"md:mt-[-30px]": "md:mt-[-25px]"):""} ${p4===p1?"mt-[-20px]":""} float-right mt-[-23px] text-purple-700 text-xl`} />
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Home;