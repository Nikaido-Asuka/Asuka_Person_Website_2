import Image from 'next/image'

// images
import Sun from '@/static/asstes/icons/sun.png'
import Moon from '@/static/asstes/icons/moon.png'
import { useState } from 'react';
const Mode = ({ mode, setMode }) => {

    function handleChangeIcon() {
        setMode(mode === 'light' ? 'dark' : 'light');
        localStorage.setItem('theme', mode === 'light' ? 'dark' : 'light');
    }

    return(
        <>
          <div className=" z-[1000] relative">
            <div className=" fixed bottom-10 right-10">
                <div onClick={handleChangeIcon} className=" bg-black dark:bg-white rounded-full p-2 flex items-center justify-center">
                    <Image className=" w-[30px] h-[30px]" src={mode === 'light' ? Sun : Moon } alt=""/>
                </div>
            </div>
          </div>
        </>
    )
}

export default Mode;