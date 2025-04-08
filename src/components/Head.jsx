import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import YoutubeLogo from "../assets/youtubeLogo";
import SearchLogo from "../assets/Searchlogo";
import { Mic, UserIcon } from "../assets/Logos";
import YoutubeSearchBar from "./SearchBar";
export const Head = () => {
  return (
    <div className='flex justify-between items-center bg-white sticky top-0 z-10 shadow-md px-4 py-2'>
      <div className='flex gap-2 items-center'>
        <GiHamburgerMenu />
        <YoutubeLogo />
      </div>
      <div className=' flex gap-2 items-center'>
        <YoutubeSearchBar />
        <button className=' border rounded-full hover:bg-gray-100 transition duration-200 p-1 flex items-center justify-center'>
          <Mic />
        </button>
      </div>
      <div>
        <button className='bg-blue-500 text-white text-xs rounded-full px-2 py-1 hover:bg-blue-600 transition duration-200 h-7 flex items-center gap-1'>
          <UserIcon />
          Sign In
        </button>
      </div>
    </div>
  );
};
