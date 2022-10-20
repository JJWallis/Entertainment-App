import { FilmData } from '../../types/Film.interface';
import Film from '../film';
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
         {relevantMediaData.map((media, idx) => (
            <Film key={idx} {...media} />
         ))}
      </GalleryContainer>
   </>
);

export default MediaGallery;
