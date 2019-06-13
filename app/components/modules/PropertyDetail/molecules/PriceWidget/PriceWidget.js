export default ({title, desctiption, price, sizes, location, date}) => (
    <div className="price-overview-widget clearfix">

      <div className="price-overview-row listing-detail-summary-bar-price" itemProp="offers" itemScope="" itemType="http://schema.org/Offer">
        <div>
          <span className="element-label price" itemProp="price" content={price.value}>
          {price.pretty}
          </span>
        </div>
        <div className="element-label mortgage-link hide"></div>
      </div>

      <div className="price-overview-row">
        <div className="property-info-element beds">
          <span className="element-label" itemProp="numberOfRooms">{sizes.bedrooms.value}</span>
          <i className="pgicon pgicon-bedroom"></i>
        </div>
        <div className="property-info-element baths">
          <span className="element-label">{sizes.bathrooms.value}</span>
          <i className="pgicon pgicon-bathroom"></i>
        </div>

        <div className="property-info-element area" itemProp="floorSize" itemScope="" itemType="https://schema.org/QuantitativeValue">
          <meta itemProp="value" content="5400" />
            <meta itemProp="unitText" content="sqft" />
              <span className="element-label">
                {sizes.floorArea && sizes.floorArea.length && sizes.floorArea[0].value && sizes.floorArea[0].value} <span className="symbol-unit">{sizes.floorArea && sizes.floorArea.length && sizes.floorArea[0].unit && sizes.floorArea[0].unit}</span>

                {sizes.landArea && sizes.landArea.length && sizes.landArea[0].value} <span className="symbol-unit">{sizes.landArea && sizes.landArea.length && sizes.landArea[0].unit}

                </span>
              </span>
              </div>

            <div className="property-info-element availability">
              <span className="element-label">
              {new Date(date.available.date).getTime() <= new Date().getTime() ? 'Ready to Move': null}
              </span>
            </div>
                      </div>

          <div className="price-overview-row">
            <div className="property-info-element location-info">
              <div className="listing-title">{title}</div>
              <div className="listing-address-areainsider">
                <div className="listing-address" itemProp="address" itemScope="" itemType="https://schema.org/PostalAddress">
                  <meta itemProp="addressCountry" content="sg" />
                    <span itemProp="streetAddress">{location.streetName1}</span>
                    <span itemProp="postalCode">{location.postalCode}</span>
                    <span itemProp="addressLocality">{location.districtText}</span>
                    ({location.districtCode})
                    </div>
                  <div className="listing-areainsider" data-area="Tanglin">
                    <a href="/areainsider/tanglin" target="_blank">Discover more about Tanglin</a>
                  </div>
                </div>
              </div>
              <a className="listing-map-link" href="#map">
                <div className="listing-map-icon">
                  <span className="icon-label">map</span>
                </div>
              </a>
            </div>

          </div>
          );
