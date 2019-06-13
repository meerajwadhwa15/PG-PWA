import React, { PureComponent, Fragment } from 'react';
import { connect } from "react-redux";
import Title from './../../../../atoms/Title';
import Badge from './../../../../atoms/Badge';
import LeadsButton from './../../molecules/LeadsButton';
import Tabs from './../../molecules/Tabs';
import PhotoGallery from './../../molecules/PhotoGallery';
import PriceWidget from './../../molecules/PriceWidget';
import PropertyDetail from './../../molecules/PropertyDetail';
import PropertyDetailFacilities from './../../molecules/PropertyDetailFacilities';
import PropertyDetailProjectInfo from './../../molecules/PropertyDetailProjectInfo';
import { getPropertyDetail } from './Actions';
import DetailLoader from './../../../../molecules/DetailLoader';
class PropertyDetailPage extends PureComponent {

  componentWillMount() {
    const {propertDetailFetchAction, query} = this.props;
    if(query && query.id) {
      propertDetailFetchAction({
        listingId: query.id,
      });
    }
  }

  render() {
    const { property } = this.props;

    console.log(property? property.id: 'null', 'property');

    return (<Fragment>{ !property ? <DetailLoader /> : <div className="contents contents-listing-detail">
      <div className="listing-detail-header-bar container clearfix">
        <Title>{property.localizedTitle}</Title>
        <div className="additional-info">
          <Badge>{property.property.typeText}</Badge>
          <LeadsButton id={property.id} />
        </div>
      </div>
      <PhotoGallery media={property.media} />
      <div className="in-page-nav hidden-xs hidden-sm">
        <Tabs />
      </div>

      <div id="overview" className="collapse-xs collapse-sm in">
        <div className="container">
          <div className="columned-content">
            <div className="columned-content-row">
              <section className="main-content listing-detail listing-detail-body">
                <PriceWidget price={property.price} location={property.location} title={property.localizedTitle}  sizes={property.sizes} date={property.dates} />
                <PropertyDetail typeCode={property.typeCode} property={property.property} pricePerArea={property.pricePerArea} description={property.localizedDescription} id={property.id} agent={property.agent} date={property.dates} propertyUnit={property.propertyUnit} />
                <PropertyDetailFacilities amenities={property.property.amenities} />
                <PropertyDetailProjectInfo title={property.localizedTitle} property={property.property} />
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>}</Fragment>);
  }
}

const mapStateToProps = (state) => ({
  property: state.PropertyDetailReducers.listing
});

const mapDispatchToProps = (dispatch) => ({
  propertDetailFetchAction: (params) => { dispatch(getPropertyDetail(params)) }
});

export default connect(mapStateToProps, mapDispatchToProps)(PropertyDetailPage);

