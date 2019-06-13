import Anchor from './../../../../atoms/Anchor';
import {ListingDetailPage} from './../../../../../config/routes';

export default ({media, id, title}) => (
    <div className="gallery-wrapper">
      <div className="gallery-container">
      <Anchor as={`${ListingDetailPage}/${id}`} href={{ pathname: ListingDetailPage, query: { id: id } }} title={title} itemProp="url">
          <ul>
            <li itemScope="" itemType="https://schema.org/Photograph"><img alt={title}  content={media.cover.V550} itemProp="thumbnailUrl" src={media.cover.V550.replace('.V550', '.C400X300')} /></li>
          </ul>
          </Anchor>
      </div>
    </div>
  );
