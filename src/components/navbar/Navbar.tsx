import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import {
   NavBar,
   NavBarNavigation,
   NavigationListItem,
} from '../../components/styled/NavBar.styled';
import HomeIcon from '../../components/icon/HomeIcon';
import IconAvatar from '../../assets/image-avatar.png';
import TvIcon from '../../components/icon/TvIcon';
import BookmarkIcon from '../../components/icon/BookmarkIcon';
import MoviesIcon from '../../components/icon/MoviesIcon';
import { ResponseStatus } from '../../pages/dashboard/[media]';

interface Props {
   status: ResponseStatus;
   activeMediaType: string;
}

const NavigationBar: React.FC<Props> = ({ status, activeMediaType }) => {
   return (
      <NavBar>
         {status === 'fail' ? (
            <p>error fetching user data!</p>
         ) : (
            <>
               <div>Logo</div>
               <NavBarNavigation>
                  <ul>
                     {[
                        [HomeIcon, '/dashboard/recommended'],
                        [MoviesIcon, '/dashboard/movies'],
                        [TvIcon, '/dashboard/tv'],
                        [BookmarkIcon, '/dashboard/bookmarks'],
                     ].map(([icon, path], idx) => (
                        <Link href={path} key={idx}>
                           <NavigationListItem
                              isActive={path.includes(activeMediaType)}
                              key={idx}
                              dangerouslySetInnerHTML={{ __html: icon }}
                           ></NavigationListItem>
                        </Link>
                     ))}
                  </ul>
               </NavBarNavigation>
               <div>
                  <Image
                     src={IconAvatar}
                     alt="user profile"
                     width="30"
                     height="30"
                  />
               </div>
            </>
         )}
      </NavBar>
   );
};

export default NavigationBar;
