import React from 'react';
import { BookmarkEmpty } from '../icon/BookmarkIconGallery';

interface Props {
   isBookMarked: boolean;
}

const Bookmark: React.FC<Props> = ({ isBookMarked }) => {
   return <button dangerouslySetInnerHTML={{ __html: BookmarkEmpty }}></button>;
};

export default Bookmark;
