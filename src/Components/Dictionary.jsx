import React, { useEffect, useState } from 'react';
import searchIcon from "../assets/icon-search.svg";
import playLogo from "../assets/icon-play.svg";

const Dictionary = () => {
    let [searchedWord, setSearchedWord] = useState([]);
    let [searchInput, setSearchInput] = useState('dictionary');

    useEffect(() => {
        if (searchInput) {
            fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchInput}`)
                .then(response => response.json())
                .then(json => setSearchedWord(json))
                .catch(error => console.error('Error fetching data:', error));
        }
    }, [searchInput]);

    let [finalWord] = searchedWord;

    const handleSearch = (event) => {
        if (event.key === 'Enter' && event.target.value.trim()) {
            setSearchInput(event.target.value.trim());
        }
    };

    return (
        <div className='w-[55%] mx-auto'>
            <div className='searchBar relative'>
                <input
                    className="w-full rounded-2xl py-5 bg-[#f4f4f4] px-6"
                    placeholder='Search for a word from the dictionary'
                    onKeyPress={handleSearch} // Trigger search on Enter key press
                />
                <img className='absolute right-5 top-6' src={searchIcon} alt="Search Icon" />
            </div>

            <div className='textSection'>
                <div className="upperText">
                    <div className='flex justify-between items-center pt-16 pb-8'>
                        <div>
                            <h1 className='text-[46px] text-[#2d2d2d] font-bold'>
                                {finalWord?.word}
                            </h1>

                            {
                                finalWord?.phonetic &&
                                <p className='text-[24px] text-[#a445ed] font-semibold'>
                                    {finalWord?.phonetic}
                                </p>
                            }
                        </div>

                        <div>
                            <img className='w-[56px] cursor-pointer hover:opacity-55' src={playLogo} alt="Play Icon" />
                        </div>
                    </div>
                </div>

                {
                    finalWord?.meanings?.map((word, index) => (
                        <div key={index} className="lowerText mt-8">
                            <div className='flex justify-between items-center gap-4 mt-2'>
                                <p className='text-[30px] font-semibold text-[#2d2d2d] w-[20%]'>
                                    {word?.partOfSpeech}
                                </p>

                                <div className='w-[80%] h-[1px] bg-[#2d2d2d]'></div>
                            </div>

                            <p className='text-[16px] text-[#757575] mt-8'>
                                Meaning
                            </p>
                            <ul className='pl-12 mt-4'>
                                {
                                    word?.definitions?.map((defs, idx) => (
                                        <li key={idx} className='list-disc text-[16px] text-[#2d2d2d] marker:text-[#a445ed] mt-2'>
                                            {defs?.definition}
                                        </li>
                                    ))
                                }
                            </ul>
                            {word?.synonyms && word.synonyms.length > 0 &&
                                <div className='flex gap-2 mt-8'>
                                    <p className='text-[16px] text-[#2d2d2d]'>
                                        Synonyms:
                                    </p>

                                    <div className='flex flex-wrap gap-2'>
                                        {
                                            word?.synonyms?.map((synms, idx) => (
                                                <p key={idx} className='text-[16px] text-[#a445ed] font-bold hover:underline cursor-pointer'>
                                                    {synms},
                                                </p>
                                            ))
                                        }
                                    </div>
                                </div>
                            }

                            {word?.antonyms && word.antonyms.length > 0 &&
                                <div className='flex gap-2 mt-4'>
                                    <p className='text-[16px] text-[#2d2d2d]'>
                                        Antonyms:
                                    </p>

                                    <div className='flex flex-wrap gap-2'>
                                        {
                                            word?.antonyms?.map((antms, idx) => (
                                                <p key={idx} className='text-[16px] text-[#a445ed] font-bold hover:underline cursor-pointer'>
                                                    {antms},
                                                </p>
                                            ))
                                        }
                                    </div>
                                </div>
                            }
                        </div>
                    ))
                }

                <p className='text-[16px] text-[#757575] mt-16 italic pb-12'>
                    <span className='mr-6 underline'>Source:</span> <a className='underline' href={`https://api.dictionaryapi.dev/api/v2/entries/en/${searchInput}`} target='_blank' rel="noreferrer">https://api.dictionaryapi.dev/api/v2/entries/en/{searchInput}</a>
                </p>
            </div>
        </div>
    );
};

export default Dictionary;
