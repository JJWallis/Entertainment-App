import React from 'react';
import { BookmarkEmpty } from '../icon/BookmarkIconGallery';
import { BookmarkButton } from '../styled/Button.styled';

interface Props {
   isBookMarked: boolean;
   category: string;
}

const Bookmark: React.FC<Props> = ({ isBookMarked, category }) => {
   return (
      <BookmarkButton
         aria-label={`${
            isBookMarked ? 'Bookmark' : 'Un-bookmark'
         } this ${category}`}
      >
         <div dangerouslySetInnerHTML={{ __html: BookmarkEmpty }}></div>
      </BookmarkButton>
   );
};

export default Bookmark;
