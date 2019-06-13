export default () => (
    <div className="price-overview-widget clearfix">

      <div className="price-overview-row listing-detail-summary-bar-price" itemProp="offers" itemScope="" itemType="http://schema.org/Offer">
        <div>
          <span className="element-label symbol-unit" itemProp="priceCurrency" content="SGD">S$</span>
          <span className="element-label price" itemProp="price" content="15800">
            15,800 /mo
          </span>
        </div>
        <div className="element-label mortgage-link hide"></div>
      </div>


      <div className="price-overview-row">
        <div className="property-info-element beds">
          <span className="element-label" itemProp="numberOfRooms">6</span>
          <i className="pgicon pgicon-bedroom"></i>
        </div>
        <div className="property-info-element baths">
          <span className="element-label">6</span>
          <i className="pgicon pgicon-bathroom"></i>
        </div>

        <div className="property-info-element area" itemProp="floorSize" itemScope="" itemType="https://schema.org/QuantitativeValue">
          <meta itemProp="value" content="5400" />
            <meta itemProp="unitText" content="sqft" />
              <span className="element-label">
                5400 <span className="symbol-unit">sqft</span>
              </span>
              </div>

            <div className="property-info-element availability">
              <span className="element-label">
                Ready to move
                          <span className="symbol-unit">Availability</span>
              </span>
            </div>
                      </div>

          <div className="price-overview-row">
            <div className="property-info-element location-info">
              <div className="listing-title">The Draycott</div>
              <div className="listing-address-areainsider">
                <div className="listing-address" itemProp="address" itemScope="" itemType="https://schema.org/PostalAddress">
                  <meta itemProp="addressCountry" content="sg" />
                    <span itemProp="streetAddress">50 Draycott Park</span>
                    <span itemProp="postalCode">259388</span>
                    <span itemProp="addressLocality">Tanglin / Holland / Bukit Timah</span>
                    (D10)
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
