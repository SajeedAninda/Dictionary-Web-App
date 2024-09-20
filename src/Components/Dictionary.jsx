import React, { useEffect, useState } from 'react';
import searchIcon from "../assets/icon-search.svg"
import playLogo from "../assets/icon-play.svg"


const Dictionary = () => {
    let [searchedWord, setSearchedWord] = useState("");

    useEffect(() => {
        fetch('https://api.dictionaryapi.dev/api/v2/entries/en/hello')
            .then(response => response.json())
            .then(json => setSearchedWord(json))
    }, [])

    console.log(searchedWord);

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

                <div className="lowerText mt-8">
                    <p className='text-[16px] text-[#757575]'>
                        Meaning
                    </p>
                    <ul className='pl-12 mt-4'>
                        <li className='list-disc text-[16px] text-[#2d2d2d] marker:text-[#a445ed]'>
                            A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.
                        </li>
                    </ul>

                    <div className='flex gap-2 items-center mt-8'>
                        <p className='text-[16px] text-[#2d2d2d]'>
                            Synonyms:
                        </p>

                        <p className='text-[16px] text-[#a445ed] font-bold hover:underline cursor-pointer'>
                            Electronic Keyboard
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dictionary;