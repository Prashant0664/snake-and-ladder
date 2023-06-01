import React from 'react'
import { AiOutlineGithub, AiFillLinkedin, AiTwotonePlusSquare, AiFillGitlab, AiTwotoneDownCircle, AiFillHeart } from "react-icons/ai"
import Home from './home';
import Winner from './Winner';

const Play = ({ start, slide1, a, b, c, d }) => {
    var ashow = [1, 2, 3, 4];
    var [n1, cn1] = React.useState(eval(localStorage.getItem("n1")));
    var [n2, cn2] = React.useState(eval(localStorage.getItem("n2")));
    var [n3, cn3] = React.useState(eval(localStorage.getItem("n3")));
    var [n4, cn4] = React.useState(eval(localStorage.getItem("n4")));
    var [nj, cnj] = React.useState(0);
    var [ben, cben] = React.useState(true);
    var [cnm, ccnm] = React.useState(Math.floor(Math.random() * (6 - 1 + 1)) + 1);
    var [dcss, cdcss] = React.useState(true);
    var [fwd1, cfwd1] = React.useState("true" === localStorage.getItem("fwd1"));
    var [fwd2, cfwd2] = React.useState("true" === localStorage.getItem("fwd2"));
    var [fwd3, cfwd3] = React.useState("true" === localStorage.getItem("fwd3"));
    var [fwd4, cfwd4] = React.useState("true" === localStorage.getItem("fwd4"));
    var [result, cresult] = React.useState(false);
    var [victor, cvictor] = React.useState(0);
    var [pointer, cpointer] = React.useState(0);
    var arrchoice = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];
    // var arrchoice = [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6];
    // var arrchoice = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    var snakeh = [80, 29, 88, 99];
    var snakee = [45, 6, 36, 34];
    var ladderh = [96, 62, 47];
    var laddere = [31, 39, 24];
    React.useEffect(() => {
        if (start === false) {
            var h1 = localStorage.getItem("n1");
            var h2 = localStorage.getItem("n2");
            var h3 = localStorage.getItem("n3");
            var h4 = localStorage.getItem("n4");
            cn1(eval(h1));
            cn2(eval(h2));
            cn3(eval(h3));
            cn4(eval(h4));
            return;
        }
    }, [start])
    const btnc = () => {
        setTimeout(() => {
            cdcss(false)
            setTimeout(() => {

                cdcss(true)
                cpointer((pointer + 1) % localStorage.getItem("slide1"));
                var cnum = arrchoice[Math.floor(Math.random() * (17 - 0 + 1)) + 0];
                if (pointer === 0) {
                    if (!fwd1) {
                        if (n1 - cnum < 0) {

                        }
                        else if (n1 - cnum === 0) {
                            cvictor(1);
                            cresult(true);
                        }
                        else {
                            cn1(n1 - cnum);
                        }
                    }

                    else if (n1 === 0) {
                        if (cnum === 1) {
                            cn1(n1 + cnum);
                        }

                    }
                    else if (n1 + cnum > 100) {

                    }
                    else if (n1 + cnum === 100 || n1 === 100) {
                        cfwd1(false);
                        localStorage.setItem("fwd1", false);
                        cn1(n1 + cnum);


                    }
                    else {
                        if (cnum === 6) {
                            pointer = (pointer - 1)
                            if (pointer < 0) {
                                pointer = 3;
                            }
                        }
                        cn1(n1 + cnum);

                    }
                    if (n1 + cnum === laddere[0]) {
                        cn1(ladderh[0]);
                    } if (n1 + cnum === laddere[1]) {
                        cn1(ladderh[1]);
                    } if (n1 + cnum === laddere[2]) {
                        cn1(ladderh[2]);
                    } if (n1 + cnum === laddere[3]) {
                        cn1(ladderh[3]);
                    }
                    if (n1 + cnum === snakeh[0]) {
                        cn1(snakee[0]);
                    } if (n1 + cnum === snakeh[1]) {
                        cn1(snakee[1]);
                    } if (n1 + cnum === snakeh[2]) {
                        cn1(snakee[2]);
                    } if (n1 + cnum === snakeh[3]) {
                        cn1(snakee[3]);
                    }

                }

                else if (pointer === 1) {
                    if (fwd2 === false) {
                        if (n2 - cnum < 0) {

                        }
                        else if (n2 - cnum === 0) {
                            cvictor(2);
                            cresult(true);
                        }
                        else {
                            cn2(n2 - cnum);
                        }
                    }
                    else if (n2 === 0) {
                        if (cnum === 1) {
                            cn2(n2 + cnum);
                        }
                    }
                    else if (n2 + cnum > 100) {

                    }
                    else if (n2 + cnum === 100 || n2 === 100) {
                        localStorage.setItem("fwd2", false);
                        cfwd2(false);
                        cn2(n2 + cnum);

                    }
                    else {
                        if (cnum === 6) {
                            pointer = (pointer - 1)
                            if (pointer < 0) {
                                pointer = 3;
                            }
                        }
                        cn2(n2 + cnum);
                    }

                    if (n2 + cnum === laddere[0]) {
                        cn2(ladderh[0]);
                    } if (n2 + cnum === laddere[1]) {
                        cn2(ladderh[1]);
                    } if (n2 + cnum === laddere[2]) {
                        cn2(ladderh[2]);
                    } if (n2 + cnum === laddere[3]) {
                        cn2(ladderh[3]);
                    }
                    if (n2 + cnum === snakeh[0]) {
                        cn2(snakee[0]);
                    } if (n2 + cnum === snakeh[1]) {
                        cn2(snakee[1]);
                    } if (n2 + cnum === snakeh[2]) {
                        cn2(snakee[2]);
                    } if (n2 + cnum === snakeh[3]) {
                        cn2(snakee[3]);
                    }
                }
                else if (pointer === 2) {
                    if (fwd3 === false) {
                        if (n3 - cnum < 0) {

                        }
                        else if (n3 - cnum === 0) {
                            cvictor(3);
                            cresult(true);
                        }
                        else {
                            cn3(n3 - cnum);
                        }
                    }
                    else if (n3 === 0) {
                        if (cnum === 1) {
                            cn3(n3 + cnum);
                        }
                    }
                    else if (n3 + cnum > 100) {

                    }
                    else if (n3 + cnum === 100 || n3 === 100) {
                        cfwd3(false);
                        localStorage.setItem("fwd3", false);
                        cn3(n3 + cnum);

                    }
                    else {
                        if (cnum === 6) {
                            pointer = (pointer - 1)
                            if (pointer < 0) {
                                pointer = 3;
                            }
                        }
                        cn3(n3 + cnum);
                    }

                    if (n3 + cnum === laddere[0]) {
                        cn3(ladderh[0]);
                    } if (n3 + cnum === laddere[1]) {
                        cn3(ladderh[1]);
                    } if (n3 + cnum === laddere[2]) {
                        cn3(ladderh[2]);
                    } if (n3 + cnum === laddere[3]) {
                        cn3(ladderh[3]);
                    }
                    if (n3 + cnum === snakeh[0]) {
                        cn3(snakee[0]);
                    } if (n3 + cnum === snakeh[1]) {
                        cn3(snakee[1]);
                    } if (n3 + cnum === snakeh[2]) {
                        cn3(snakee[2]);
                    } if (n3 + cnum === snakeh[3]) {
                        cn3(snakee[3]);
                    }
                }
                else if (pointer === 3) {
                    if (fwd4 === false) {
                        if (n4 - cnum < 0) {

                        }
                        else if (n4 - cnum === 0) {
                            cvictor(4);
                            cresult(true);
                        }
                        else {
                            cn4(n4 - cnum);
                        }
                    }
                    else if (n4 === 0) {
                        if (cnum === 1) {
                            cn4(n4 + cnum);
                        }
                    }
                    else if (n4 + cnum > 100) {

                    }

                    else if (n4 + cnum === 100 || n4 === 100) {
                        localStorage.setItem("fwd4", false);
                        cn4(n4 + cnum);
                        cfwd4(false);
                    }
                    else {
                        if (cnum === 6) {
                            pointer = (pointer - 1)
                            if (pointer < 0) {
                                pointer = 3;
                            }
                        }
                        cn4(n4 + cnum);
                    }

                    if (n4 + cnum === laddere[0]) {
                        cn4(ladderh[0]);
                    } if (n4 + cnum === laddere[1]) {
                        cn4(ladderh[1]);
                    } if (n4 + cnum === laddere[2]) {
                        cn4(ladderh[2]);
                    } if (n4 + cnum === laddere[3]) {
                        cn4(ladderh[3]);
                    }
                    if (n4 + cnum === snakeh[0]) {
                        cn4(snakee[0]);
                    } if (n4 + cnum === snakeh[1]) {
                        cn4(snakee[1]);
                    } if (n4 + cnum === snakeh[2]) {
                        cn4(snakee[2]);
                    } if (n4 + cnum === snakeh[3]) {
                        cn4(snakee[3]);
                    }
                }
                cben(true);
                ccnm(cnum);

                localStorage.setItem("n" + `${pointer + 1}`, eval("n" + `${pointer + 1}`) + cnum);
            }, 2000);

            cben(false);
        }, 300);
    }
    return (
        <>
            <div style={{ display: start ? '' : 'none' }} className={` ${start ? "" : "hidden"} ${start ? "" : "hidden"} ghughggv castbox lfb11 bg-slate-300 text-black top-0 w-[300px] flex ffsmall  flex-col justify-center items-center h-[100%] `}>
                <AiTwotonePlusSquare className={` ${start ? "" : "hidden"} ${dcss ? "dicecss" : "dicecss2"} small-side2 mt-[0px] text-[200px] hellodice dicecss text-red-400 flex justify-center items-center text-center `} />
                <div className={` ${start ? "" : "hidden"} mt-[-60%] mb-[10%] text-white z-10 small-side2 bigd text-[100px]`}>{cnm}</div>
                <div className={`${start ? "" : "hidden"}  small-side2 mt-[60px] playeec `}>
                    <div className={` ${start ? "" : "hidden"} small-side2 text-xl font-bold `}><h1>
                        Player {ashow[pointer]} Turn
                    </h1>
                    </div>
                </div>
                <div className={` small-side2 flex gap-[10%] playeec2  top-0 mt-4 justify-center ${start ? "" : "hidden"}`}>
                    <span className={`${slide1 >= 1 ? "" : "hidden"}${start ? "" : "hidden"} small-side2 `}>
                        <AiTwotonePlusSquare className={`${start ? "" : "hidden"} ${slide1 >= 1 ? "" : "hidden"}text-red-500 text-xl border-solid border-black border-spacing-0 border bg-red-600 z-[2002] opacity-100`} />
                        <span className={`${slide1 >= 1 ? "" : "hidden"}`}>P1</span>
                    </span>
                    <br />
                    <span className={`${slide1 >= 2 ? "" : "hidden"} ${start ? "" : "hidden"}`}>

                        <AiTwotoneDownCircle className={`${slide1 >= 2 ? "" : "hidden"}text-xl text-blue-500 border-solid border-black border-spacing-0 border rounded-full`} />
                        <span className={`${slide1 >= 2 ? "" : "hidden"}`}>P2</span>
                    </span>
                    <br />
                    <span className={`${slide1 >= 3 ? "" : "hidden"} ${start ? "" : "hidden"}`}>

                        <AiFillHeart className={`${eval(slide1) >= 3 ? "" : "hidden"}text-pink-600 text-xl`} />
                        <span className={`${slide1 >= 3 ? "" : "hidden"}`}>P3</span>
                    </span>
                    <br />
                    <span className={`${slide1 >= 4 ? "" : "hidden"} ${start ? "" : "hidden"}`}>

                        <AiFillGitlab className={`${eval(slide1) >= 4 ? "hidden" : "hidden"}text-purple-700 text-xl`} />
                        <span className={`${slide1 >= 4 ? "" : "hidden"}`}>P4</span>
                    </span>
                </div>
                <div className={` small-side2 ${start ? "" : "hidden"}`}>
                    <div onClick={() => { btnc() }} className={`${!ben ? "hidden" : ""} btncsm btndie mt-[100%] py-[15px] rounded-lg hover:shadow-lg active:scale-105 text-xl hover:scale-110 cursor-pointer text-slate-100 text-bold px-[20px] bg-green-700 `}>
                        Cast the Die
                    </div>
                    <div className={`${!ben ? "" : "hidden"} btncsm btndie mt-[100%] py-[15px] rounded-lg hover:shadow-lg active:scale-105 text-xl hover:scale-110 cursor-pointer text-slate-100 text-bold px-[20px] bg-red-400 `}>
                        Cast the Die
                    </div>
                </div>
            </div>



            <div style={{ display: start ? '' : 'none' }} className={` ${start ? "" : "hidden"} ${start ? "" : "hidden"} flex flex-row justify-evenly jkkjb castbox lfb11 bg-slate-300 text-black top-0 w-[100%] items-center h-[100%]`}>
                <div className="">
                    <AiTwotonePlusSquare className={` ${start ? "" : "hidden"} ${dcss ? "dicecss" : "dicecss2"} h-[100px] w-[100px] `} />
                    <div className={` ${start ? "" : "hidden"} mt-[-80px] text-[40px] `}>{cnm}</div>
                </div>

                <div className={`${start ? "" : "hidden"} flex flex-col playeec `}>
                    <div className={` ${start ? "" : "hidden"} text-xl font-bold `}><h1>
                        Player {ashow[pointer]} Turn
                    </h1>

                    </div>
                    <div className={`flex gap-[10%] playeec2  top-0 mt-4 justify-center ${start ? "" : "hidden"}`}>
                        <span className={`${slide1 >= 1 ? "" : "hidden"}${start ? "" : "hidden"}`}>
                            <AiTwotonePlusSquare className={`${start ? "" : "hidden"} ${slide1 >= 1 ? "" : "hidden"}text-red-500 text-xl border-solid border-black border-spacing-0 border bg-red-600 z-[2002] opacity-100`} />
                            <span className={`${slide1 >= 1 ? "" : "hidden"}`}>P1</span>
                        </span>
                        <span className={`${slide1 >= 2 ? "" : "hidden"} ${start ? "" : "hidden"}`}>

                            <AiTwotoneDownCircle className={`${slide1 >= 2 ? "" : "hidden"}text-xl text-blue-500 border-solid border-black border-spacing-0 border rounded-full`} />
                            <span className={`${slide1 >= 2 ? "" : "hidden"}`}>P2</span>
                        </span>
                        <span className={`${slide1 >= 3 ? "" : "hidden"} ${start ? "" : "hidden"}`}>

                            <AiFillHeart className={`${eval(slide1) >= 3 ? "" : "hidden"}text-pink-600 text-xl`} />
                            <span className={`${slide1 >= 3 ? "" : "hidden"}`}>P3</span>
                        </span>
                        <span className={`${slide1 >= 4 ? "" : "hidden"} ${start ? "" : "hidden"}`}>

                            <AiFillGitlab className={`${eval(slide1) >= 4 ? "hidden" : "hidden"}text-purple-700 text-xl`} />
                            <span className={`${slide1 >= 4 ? "" : "hidden"}`}>P4</span>
                        </span>
                    </div>
                </div>

                <div className={`${start ? "" : "hidden"}`}>
                    <div onClick={() => { btnc() }} className={`${!ben ? "hidden" : ""} kdfnsv py-[15px] rounded-lg hover:shadow-lg active:scale-105 text-xl hover:scale-110 cursor-pointer text-slate-100 text-bold px-[20px] bg-green-700 `}>
                        Cast the Die
                    </div>
                    <div className={`${!ben ? "" : "hidden"} kdfnsv rounded-lg hover:shadow-lg active:scale-105 text-xl hover:scale-110 cursor-pointer text-slate-100 text-bold px-[20px] bg-red-400 `}>
                        Cast the Die
                    </div>
                </div>
            </div>
            <div className={`${start ? "" : "hidden"} absolute float-left md:w-[130px] w-[280px] lg:w-[160px] xl:w-[200px] mx-auto px-auto flex justify-evenly bottom-0  mt-[100%] mb-[10px] mlogo `}>
                <a href='https://github.com/Prashant0664/snake-and-ladder' target='_blank'><AiOutlineGithub className={`text-[26px] hover:scale-110 kknkl`} /></a>
                <a href='https://www.linkedin.com/in/prashant-693591228' target='_blank'><AiFillLinkedin className={`text-[26px] hover:scale-110 kknkl`} /></a>
            </div>
            <Home p1={n1} p2={n2} p3={n3} p4={n4} />
            <Winner opene={result} winn={victor} cresult={cresult} />
        </>
    )
}

export default Play