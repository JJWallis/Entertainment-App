import React from 'react'

interface Props {
   isBookMarked: boolean
}

const Bookmark: React.FC<Props> = ({ isBookMarked }) => {
   return (
      <button
         aria-label={''}
         className="absolute z-20 top-[5%] right-[5%] grid place-items-center col-span-full row-span-full w-10 h-10 rounded-full bg-[#000] bg-opacity-70 hover:bg-white group transition-bg duration-200 ease-in-out"
      >
         <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
            <path
               className="group-hover:stroke-deepBlue transition-stroke duration-200 ease-in-out"
               d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
               stroke="#FFF"
               strokeWidth="1.2"
               fill="none"
            />
         </svg>
      </button>
   )
}

export default Bookmark
