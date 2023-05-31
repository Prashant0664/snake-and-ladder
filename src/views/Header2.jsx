import React from 'react'
import { FaSignOutAlt } from 'react-icons/fa';
import { BsSearch, BsFillChatDotsFill } from 'react-icons/bs';
import { HiOutlinePencilSquare } from 'react-icons/hi2';
import { CgProfile } from 'react-icons/cg';

const Header = () => {
    return (
        <div className='bg-slate-600 h-[50px] flex flex-row justify-between items-start'>
            <div className='white px-4 p-[auto] font-medium big'>
                YourAPP
            </div>
            <div className='cursor-pointer text-lg items-center gap-5 md:gap-2 px-[auto] my-auto pr-3 flex flex-row justify-between'>
                <div>
                    <BsSearch className='white text-[20px] hover:text-[27px]' title='Search'/>
                </div>
                <div>
                    <HiOutlinePencilSquare className="white text-[20px] hover:text-[27px]" title='Create a Post'/>
                </div>
                <div >
                    <BsFillChatDotsFill className='white text-[20px] hover:text-[27px]'title='Chat' />
                </div>
                <div>
                    <CgProfile className="text-blue-300 text-[28px]" title='Profile'/>
                </div>
                <div>
                    <FaSignOutAlt className='text-red-400 text-[28px]'title='Log Out!' />
                </div>
            </div>
        </div>

    )
}

export default Header