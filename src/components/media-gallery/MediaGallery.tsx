import Image from 'next/image';
import { FilmData } from '../../types/Film.interface';
import { MediaGalleryTitle } from '../styled/Title.styled';
import { GalleryContainer } from '../styled/Wrappers.styled';

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
                        width="100px"
                        height="100px"
                     />
                  </div>
                  <div>
                     <p>{year}</p>
                     <p>{category}</p>
                     <p>{rating}</p>
                  </div>
                  <h2>{title}</h2>
               </div>
            )
         )}
      </GalleryContainer>
   </>
);

export default MediaGallery;
