import React from 'react';
import searchIcon from "../assets/icon-search.svg"


const Dictionary = () => {
    return (
        <div className='w-[55%] mx-auto'>
            <div className='searchBar relative'>
                <input className="w-full rounded-2xl py-5 bg-[#f4f4f4] px-6" placeholder='Search for a word from the dictionary'/>
                <img className='absolute right-5 top-6' src={searchIcon} alt="" />
            </div>
        </div>
    );
};

export default Dictionary;