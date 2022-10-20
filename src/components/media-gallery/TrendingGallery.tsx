import { FilmData } from '../../types/Film.interface';
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
         {/* {trendingMedia.map(() => )} */}
      </TrendingImageContainer>
   );
};

export default TrendingGallery;
