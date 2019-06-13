import React from 'react';
import Gallery from '../Gallery';
import GalleryInforamtion from '../GalleryInformation';
import PropertyItemDetail from '../PropertyItemDetail';
import PropertyItemActions from '../PropertyItemActions';
import AgentDetail from '../../molecules/AgentDetail';

const PropertyItem = ({item}) => (

  <div className="listing-card listing-id-20887289" itemScope="" itemType="https://schema.org/Place">
    <div className="row">
      <div className="col-xs-12 col-sm-5 col-md-5 image-container">
        <span className="special highlight-featured-agent">Featured Agent</span>
        <Gallery media={item.media} title={item.title} id={item.id} />
        <GalleryInforamtion media={item.media} />
      </div>
      <PropertyItemDetail {...item}/>

    </div>
    <div className="row">
      <div className="col-xs-12 action-items visuallyhidden-xs">
        <div className="row">
          <div className="featured-description col-xs-12 col-sm-7 hidden-xs no-agent-profile ">
            <AgentDetail agent={item.agent} media={item.media.agent} />
            {/* <PropertyItemActions /> */}
          </div>
        </div>
      </div>
    </div>
  </div >
);

export default PropertyItem;
