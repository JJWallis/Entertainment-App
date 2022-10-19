import React from 'react';
import Play from '../../assets/icon-play.svg';
import Image from 'next/image';
import Bookmark from './Bookmark';
import type { FilmData } from '../../types/Film.interface';

const Film: React.FC<FilmData> = ({ isBookmarked, title, category }) => {
   return (
      <div>
         <GalleryImageContainer>
            <Image src={`/${small}`} alt="" width="560px" height="348px" />
            <Bookmark isBookMarked={isBookmarked} category={category} />
         </GalleryImageContainer>
         <MediaInfoContainer>
            <p>{year}</p>
            <p>{category}</p>
            <p>{rating}</p>
         </MediaInfoContainer>
         <h2>{title}</h2>
      </div>
   );
};

export default Film;
