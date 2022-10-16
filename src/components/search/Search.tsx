import React from 'react';
import SearchIcon from '../icon/SearchIcon';
import { SearchInput } from '../styled/Input.styled';

const Search: React.FC = () => {
   return (
      <div className="grid">
         <div dangerouslySetInnerHTML={{ __html: SearchIcon }}></div>
         <SearchInput
            placeholder="Search for movies or TV series"
            className="outline-none w-[100%] border-b-2 border-b-slateBlue border-opacity-0 pt-2 caret-red text-headingSM text-white bg-deepBlue hover:border-opacity-100 focus:border-opacity-100 transition-border duration-150 ease-in-out"
         />
         {/* error styles */}
      </div>
   );
};

export default Search;
