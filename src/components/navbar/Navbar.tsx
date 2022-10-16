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
import { ResponseStatus } from '../../pages/dashboard';

interface Props {
   status: ResponseStatus;
}

const NavigationBar: React.FC<Props> = ({ status }) => {
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
                        [HomeIcon, '/'],
                        [MoviesIcon, '/movies'],
                        [TvIcon, '/tv'],
                        [BookmarkIcon, '/bookmarks'],
                     ].map(([icon, path], idx) => (
                        <Link href={path} key={idx}>
                           <NavigationListItem
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
