import { FilmData } from '../../types/Film.interface';
import Film from '../film';
import { TrendingImageContainer } from '../styled/Wrappers.styled';

interface Props {
   relevantMediaData: FilmData[];
}

const TrendingGallery: React.FC<Props> = ({ relevantMediaData }) => {
   const trendingMedia = relevantMediaData.filter(
      ({ isTrending }) => isTrending
   );

   return (
      <TrendingImageContainer>
         {trendingMedia.map((media, idx) => (
            <Film key={idx} {...media} />
         ))}
      </TrendingImageContainer>
   );
};

export default TrendingGallery;
