import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import Title from './../../../../atoms/Title';
import Badge from './../../../../atoms/Badge';
import LeadsButton from './../../molecules/LeadsButton';
import Tabs from './../../molecules/Tabs';
import PhotoGallery from './../../molecules/PhotoGallery';
import PriceWidget from './../../molecules/PriceWidget';
import PropertyDetail from './../../molecules/PropertyDetail';
import PropertyDetailTags from './../../molecules/PropertyDetailTags';
import PropertyDetailFacilities from './../../molecules/PropertyDetailFacilities';
import PropertyDetailProjectInfo from './../../molecules/PropertyDetailProjectInfo';
import Contact from './../../../../organisams/Contact';

class PropertyDetailPage extends PureComponent {
  render() {
    return (<div className="contents contents-listing-detail">
      <div className="listing-detail-header-bar container clearfix">
        <Title>The Draycott</Title>
        <div className="additional-info">
          <Badge>APARTMENT</Badge>
          <LeadsButton />
        </div>
      </div>
      <PhotoGallery />
      <div className="in-page-nav hidden-xs hidden-sm">
        <Tabs />
      </div>

      <div id="overview" className="collapse-xs collapse-sm in">
        <div className="container">
          <div className="columned-content">
            <div className="columned-content-row">
              <section className="main-content listing-detail listing-detail-body">
                <PriceWidget />
                <PropertyDetail />
                <PropertyDetailTags />
                <PropertyDetailFacilities />
                <PropertyDetailFacilities />
                <PropertyDetailProjectInfo />
              </section>
              <aside role="right-content" className="right-content sticky-container-parent">
                <Contact />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>);
  }
}

const mapStateToProps = (state) => ({
  //listings: state.ListingReducers.listings
});

const mapDispatchToProps = (dispatch) => ({
  //listingSearchAction: () => { dispatch(getListings()) }
});

export default connect(mapStateToProps, mapDispatchToProps)(PropertyDetailPage);

