import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import {
   NavBar,
   NavBarNavigation,
   NavigationListItem,
} from '../../components/styled/NavBar.styled';

import HomeIcon from '../icon/HomeIcon';
import IconAvatar from '../../assets/image-avatar.png';
import TvIcon from '../icon/TvIcon';
import BookmarkIcon from '../icon/BookmarkIcon';
import MoviesIcon from '../icon/MoviesIcon';
import styled from 'styled-components';
import LogoIcon from '../icon/LogoIcon';

interface Props {
   activeMediaType: string;
}

const UserProfileImage = styled(Image)`
   img {
      border: 2px solid white;
      border-radius: 50%;
      width: 50px;
      height: 50px;
   }
`;

const NavigationBar: React.FC<Props> = ({ activeMediaType }) => {
   return (
      <NavBar>
         <>
            <div dangerouslySetInnerHTML={{ __html: LogoIcon }}></div>
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
                           dangerouslySetInnerHTML={{ __html: icon }}
                        ></NavigationListItem>
                     </Link>
                  ))}
               </ul>
            </NavBarNavigation>
            <div>
               <UserProfileImage
                  src={IconAvatar}
                  alt="user profile"
                  width="30"
                  height="30"
               />
            </div>
         </>
      </NavBar>
   );
};

export default NavigationBar;
