import { useState } from "react";
import { Search } from "lucide-react";

const YoutubeSearchBar = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      className={`flex items-center border border-gray-300 transition-all duration-300 ease-in-out 
        bg-white overflow-hidden h-10
        ${isFocused ? "w-96" : "w-64"} 
        rounded-full`}
    >
      <input
        type='text'
        placeholder='Search'
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className='flex-grow px-4 text-sm focus:outline-none'
      />
      <button className='bg-gray-100 h-full px-4 rounded-r-full hover:bg-gray-200 transition'>
        <Search className='h-4 w-4 text-gray-600' />
      </button>
    </div>
  );
};

export default YoutubeSearchBar;
