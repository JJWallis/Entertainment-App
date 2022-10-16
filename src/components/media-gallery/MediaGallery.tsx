interface Props {
   title: string;
   relevantMediaData: any;
}

const MediaGallery: React.FC<Props> = ({ title, relevantMediaData }) => (
   <>
      <h1>{title}</h1>
      {relevantMediaData.map(({ title, id }) => (
         <p key={id}>{title}</p>
      ))}
   </>
);

export default MediaGallery;
