import { FilmData } from '../../types/Film.interface';

interface Props {
   title: string;
   relevantMediaData: FilmData[];
}

const MediaGallery: React.FC<Props> = ({ title, relevantMediaData }) => (
   <>
      <h1>{title}</h1>
      {relevantMediaData.map(({ title }, idx) => (
         <p key={idx}>{title}</p>
      ))}
   </>
);

export default MediaGallery;
