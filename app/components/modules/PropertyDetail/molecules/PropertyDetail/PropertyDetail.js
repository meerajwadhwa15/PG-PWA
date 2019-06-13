export default ({typeCode, property, pricePerArea, id, agent, date, propertyUnit}) => (
    <div id="details">
      <div className="section-content">
        <div className="listing-details-primary">
          <div className="title-block">Details</div>
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <div className="property-attr " itemProp="additionalProperty" itemScope="" itemType="http://schema.org/PropertyValue">
                <div className="label-block" itemProp="name">Type</div>
                <div className="value-block" itemProp="value">Apartment {typeCode === 'RENT'? 'For Rent': 'For Sale'}</div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="property-attr " itemProp="additionalProperty" itemScope="" itemType="http://schema.org/PropertyValue">
                <div className="label-block" itemProp="name">Tenure</div>
                <div className="value-block" itemProp="value">{property.tenureText}</div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="property-attr " itemProp="additionalProperty" itemScope="" itemType="http://schema.org/PropertyValue">
                <div className="label-block" itemProp="name">Floor size</div>
                <div className="value-block" itemProp="value">5400 sqft</div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="property-attr " itemProp="additionalProperty" itemScope="" itemType="http://schema.org/PropertyValue">
                <div className="label-block" itemProp="name">Developer</div>
                <div className="value-block" itemProp="value">{property.developer}</div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="property-attr text-light-muted" itemProp="additionalProperty" itemScope="" itemType="http://schema.org/PropertyValue">
                <div className="label-block" itemProp="name">Land size</div>
                <div className="value-block" itemProp="value">N/A</div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="property-attr " itemProp="additionalProperty" itemScope="" itemType="http://schema.org/PropertyValue">
                <div className="label-block" itemProp="name">PSF</div>
                <div className="value-block" itemProp="value">{pricePerArea.floorArea && pricePerArea.floorArea.length && pricePerArea.floorArea[0].text && pricePerArea.floorArea[0].text}
                {pricePerArea.landArea && pricePerArea.landArea.length && pricePerArea.landArea[0].text && pricePerArea.landArea[0].text}
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="property-attr " itemProp="additionalProperty" itemScope="" itemType="http://schema.org/PropertyValue">
                <div className="label-block" itemProp="name">Furnishing</div>
                <div className="value-block" itemProp="value">Partially Furnished</div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="property-attr " itemProp="additionalProperty" itemScope="" itemType="http://schema.org/PropertyValue">
                <div className="label-block" itemProp="name">TOP</div>
                <div className="value-block" itemProp="value">{property.topYear}</div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="property-attr " itemProp="additionalProperty" itemScope="" itemType="http://schema.org/PropertyValue">
                <div className="label-block" itemProp="name">Floor Level</div>
                <div className="value-block" itemProp="value">Penthouse</div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="property-attr " itemProp="additionalProperty" itemScope="" itemType="http://schema.org/PropertyValue">
                <div className="label-block" itemProp="name">Listing ID</div>
                <div className="value-block" itemProp="value">{id}</div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="property-attr " itemProp="additionalProperty" itemScope="" itemType="http://schema.org/PropertyValue">
                <div className="label-block" itemProp="name">Availability</div>
                <div className="value-block" itemProp="value">{new Date(date.available.date).getTime() <= new Date().getTime() ? 'Ready to Move': date.available.date}</div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="property-attr " itemProp="additionalProperty" itemScope="" itemType="http://schema.org/PropertyValue">
                <div className="label-block" itemProp="name">Listed on</div>
                <div className="value-block" itemProp="value">{date.lastPosted.date}</div>
              </div>
            </div>
          </div>
        </div>


        <div className="listing-details-text compacted" itemProp="description">
          <h4>Description</h4>
          <h5>{propertyUnit.description}</h5>

          Please call or what’s app {agent.name} at {agent.mobilePretty} for a private viewing today.

        </div>

      </div>
    </div>
  );