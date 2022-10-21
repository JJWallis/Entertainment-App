import React, { SetStateAction, useEffect } from 'react';
import { FilmData } from '../../types/Film.interface';
import SearchIcon from '../icon/SearchIcon';
import { SearchInput } from '../styled/Input.styled';
import { SearchInputContainer } from '../styled/Wrappers.styled';

interface Props {
   relevantMediaData: FilmData[];
   setUserResults: React.Dispatch<SetStateAction<FilmData[]>>;
   userSearch: string;
   setUserSearch: React.Dispatch<React.SetStateAction<string>>;
   userResults: FilmData[];
}

const Search: React.FC<Props> = ({
   relevantMediaData,
   userResults,
   setUserResults,
   userSearch,
   setUserSearch,
}) => {
   useEffect(() => {
      const matchingMedia = relevantMediaData.filter(({ title }) =>
         title.toLowerCase().includes(userSearch)
      );

      if (JSON.stringify(matchingMedia) !== JSON.stringify(userResults)) {
         setUserResults(matchingMedia);
      }
   }, [userSearch, relevantMediaData, setUserResults, userResults]);

   return (
      <SearchInputContainer>
         <div dangerouslySetInnerHTML={{ __html: SearchIcon }}></div>
         <div>
            <SearchInput
               value={userSearch}
               onChange={(evt) => setUserSearch(evt.target.value)}
               placeholder="Search for movies or TV series"
            />
         </div>
      </SearchInputContainer>
   );
};

export default Search;
