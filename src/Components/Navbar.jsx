import React, { useState } from 'react';
import logo from "../assets/logo.svg";
import downArrow from "../assets/icon-arrow-down.svg";
import moonLogo from "../assets/icon-moon.svg";

const Navbar = () => {
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };

    return (
        <div className='w-[55%] mx-auto'>
            <div className='navbar h-[20vh] flex justify-between items-center'>
                <div>
                    <img src={logo} alt="" />
                </div>

                <div className='flex items-center gap-4'>
                    <div className='flex gap-4 items-center pr-4 border-r border-[#f4f4f4] cursor-pointer'>
                        <p className='text-[16px] text-[#2d2d2d]'>
                            Serif
                        </p>
                        <img src={downArrow} alt="" />
                    </div>

                    <button 
                        className='themeSwitcher w-[40px] h-[20px] rounded-2xl bg-[#979797] flex items-center px-[0.15rem] cursor-pointer hover:bg-[#A445ed] transition-colors delay-50'
                        onClick={handleToggle}
                    >
                        <div 
                            className={`w-[14px] h-[14px] bg-[#f4f4f4] rounded-full transition-transform duration-300 ${isToggled ? 'translate-x-[1.2rem]' : 'translate-x-0'}`}
                        ></div>
                    </button>

                    <div>
                        <img src={moonLogo} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
