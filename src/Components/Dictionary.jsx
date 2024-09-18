import React from 'react';
import searchIcon from "../assets/icon-search.svg"
import playLogo from "../assets/icon-play.svg"


const Dictionary = () => {
    return (
        <div className='w-[55%] mx-auto'>
            <div className='searchBar relative'>
                <input className="w-full rounded-2xl py-5 bg-[#f4f4f4] px-6" placeholder='Search for a word from the dictionary' />
                <img className='absolute right-5 top-6' src={searchIcon} alt="" />
            </div>

            <div className='textSection'>
                <div className="upperText">
                    <div className='flex justify-between items-center pt-16 pb-8'>
                        <div>
                            <h1 className='text-[46px] text-[#2d2d2d] font-bold'>
                                Keyboard
                            </h1>

                            <p className='text-[24px] text-[#a445ed] font-semibold'>
                                /ˈkiːbɔːd/
                            </p>
                        </div>

                        <div>
                            <img className='w-[56px] cursor-pointer hover:opacity-55' src={playLogo} alt="" />
                        </div>
                    </div>

                    <div className='flex justify-between items-center gap-4'>
                        <p className='text-[24px] font-semibold text-[#2d2d2d] w-[10%]'>
                            noun
                        </p>

                        <div className='w-[90%] h-[1px] bg-[#2d2d2d]'>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dictionary;