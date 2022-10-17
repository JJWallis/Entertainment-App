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
         {relevantMediaData.map(({ title }, idx) => (
            <div key={idx}>{title}</div>
         ))}
      </GalleryContainer>
   </>
);

export default MediaGallery;
