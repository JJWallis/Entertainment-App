import React from 'react'
import Image from 'next/image'
import SearchIcon from '../../assets/icon-search.svg'

const Search: React.FC = () => {
   return (
      <div className="grid grid-cols-search">
         <button
            aria-label="Search desired movie or tv show"
            className="grid place-items-center"
         >
            <Image src={SearchIcon} alt="" />
         </button>
         <input
            placeholder="Search for movies or TV series"
            className="outline-none w-[100%] border-b-2 border-b-slateBlue border-opacity-0 pt-2 caret-red text-headingSM text-white bg-deepBlue hover:border-opacity-100 focus:border-opacity-100 transition-border duration-150 ease-in-out"
         />
         {/* error styles */}
      </div>
   )
}

export default Search
