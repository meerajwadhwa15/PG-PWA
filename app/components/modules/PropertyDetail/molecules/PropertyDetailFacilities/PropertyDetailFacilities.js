const PropertyDetailFacilities = ({ amenities }) => (

  <div id="facilities">
    <h4>Facilities &amp; Amenities</h4>

    <div className="tabs">
      <div className="tab active" data-tab-number="0">
        <h5>Key Features</h5>
      </div>
      <div className="tab " data-tab-number="1">
        <h5>Facilities</h5>
      </div>
    </div>

    <div className="expansible compacted card active">
      <div className="title">
        <h5>Key Features<i className="pgicon pgicon-arrow-down"></i></h5>
      </div>
      <ul>
        {amenities && amenities.map((amenity) => (
          <li itemProp="amenityFeature" itemScope="" itemType="http://schema.org/LocationFeatureSpecification"><i className="pgicon pgicon-star-o"></i>
          <span itemProp="name">{amenity.description}</span>
          <meta itemProp="value" content="True" />
        </li>
        ))}
      </ul>
    </div>
    <div className="expansible compacted card ">
      <div className="title">
        <h5>Facilities<i className="pgicon pgicon-arrow-down hidden-sm">
        </i>
        </h5>
      </div>
      <ul>
        <li itemProp="amenityFeature" itemScope="" itemType="http://schema.org/LocationFeatureSpecification"><i className="pgicon pgicon-am-bbq"></i>
          <span itemProp="name">Barbeque Area</span>
          <meta itemProp="value" content="True" />
        </li>

      </ul>
    </div>
  </div>
);

export default PropertyDetailFacilities;
