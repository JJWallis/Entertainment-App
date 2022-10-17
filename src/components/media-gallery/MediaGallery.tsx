import Image from 'next/image';
import { FilmData } from '../../types/Film.interface';
import { MediaGalleryTitle } from '../styled/Title.styled';
import {
   GalleryContainer,
   MediaInfoContainer,
} from '../styled/Wrappers.styled';

interface Props {
   title: string;
   relevantMediaData: FilmData[];
}

const MediaGallery: React.FC<Props> = ({ title, relevantMediaData }) => (
   <>
      <MediaGalleryTitle>{title}</MediaGalleryTitle>
      <GalleryContainer>
         {relevantMediaData.map(
            (
               {
                  title,
                  rating,
                  thumbnail: {
                     regular: { small },
                  },
                  year,
                  category,
               },
               idx
            ) => (
               <div key={idx}>
                  <div>
                     <Image
                        src={`/${small}`}
                        alt=""
                        width="560px"
                        height="348px"
                     />
                  </div>
                  <MediaInfoContainer>
                     <p>{year}</p>
                     <p>{category}</p>
                     <p>{rating}</p>
                  </MediaInfoContainer>
                  <h2>{title}</h2>
               </div>
            )
         )}
      </GalleryContainer>
   </>
);

export default MediaGallery;
