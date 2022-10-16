import React from 'react';
import SearchIcon from '../icon/SearchIcon';
import { SearchInput } from '../styled/Input.styled';
import { SearchInputContainer } from '../styled/Wrappers.styled';

const Search: React.FC = () => {
   return (
      <SearchInputContainer>
         <div dangerouslySetInnerHTML={{ __html: SearchIcon }}></div>
         <div>
            <SearchInput placeholder="Search for movies or TV series" />
         </div>
         {/* error styles */}
      </SearchInputContainer>
   );
};

export default Search;
