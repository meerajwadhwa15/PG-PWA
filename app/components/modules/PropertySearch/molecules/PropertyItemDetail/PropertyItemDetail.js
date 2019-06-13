import Anchor from './../../../../atoms/Anchor';
import { ListingDetailPage } from './../../../../../config/routes';

export default ({ title, id, location, price, bedrooms, bathrooms, floorArea, floorAreaPricePerSq }) => (
  <div className="col-xs-12 col-sm-7 listing-description">
    <div className="header-wrapper">
      <div className="header-container">
        <h3 className="ellipsis" itemProp="name">
          <Anchor as={`${ListingDetailPage}/${id}`} href={{ pathname: ListingDetailPage, query: { id: id } }} title={title} itemProp="url">{title}</Anchor>
        </h3>
        <p className="listing-location ellipsis" itemScope="" itemType="https://schema.org/PostalAddress"><span itemProp="streetAddress">{location.fullAddress}</span></p>
      </div>
    </div>

    <ul className="listing-features">
      <li className="list-price pull-left">
        <span className="currency">{price}</span>
      </li>

      <li className="listing-availability pull-left">
        <span className="list-type-icon"></span>Ready to move
                    </li>
    </ul>

    <ul className="listing-features pull-left">
      <li className="listing-rooms pull-left"><span className="bed" title="4 Beds">{bedrooms.value} <i className="pg-icon pgicon-bedroom"></i></span> <span className="bath" title="5 Baths">{bathrooms.value} <i className="pg-icon pgicon-bathroom"></i></span></li>

      <li className="listing-floorarea pull-left"><span className="list-type-icon"></span>{floorArea.text}</li><li className="listing-floorarea pull-left"><span className="list-type-icon"></span>{floorAreaPricePerSq.text}</li>
    </ul>

    <ul className="clear-both listing-property-type">
      <li className="pull-left"><span>Condominium</span></li>
      <li className="pull-left"><span>Partially Furnished</span></li>
      <li className="pull-left"><span>Built: 2016</span></li>
    </ul>

    <div className="listing-recency"><i className="pgicon pgicon-clock-o"></i>1w</div>
  </div>
);
