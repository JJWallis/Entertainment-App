import { FilmData } from '../../types/Film.interface';
import { GalleryContainer } from '../styled/Wrappers.styled';

interface Props {
   title: string;
   relevantMediaData: FilmData[];
}

const MediaGallery: React.FC<Props> = ({ title, relevantMediaData }) => (
   <>
      <h1>{title}</h1>
      <GalleryContainer>
         {relevantMediaData.map(({ title }, idx) => (
            <div key={idx}>{title}</div>
         ))}
      </GalleryContainer>
   </>
);

export default MediaGallery;
