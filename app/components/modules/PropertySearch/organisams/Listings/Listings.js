import React, { PureComponent, Fragment } from 'react'
import { connect } from "react-redux";
import PropertyItem from '../../molecules/PropertyItem';
import { getListings } from './Actions';
import ListLoader from './../../../../molecules/ListLoader';
import ListingSearchResultCount from './../../molecules/ListingSearchResultCount'
class Listings extends PureComponent {
  componentWillMount() {
    if (!this.props.listings) {
      this.props.listingSearchAction();
    }
  }

  render() {
    const { listings, listingsCount } = this.props;
    return (
      <Fragment>
        <ListingSearchResultCount listingsCount={listingsCount} />
        <div className="columned-content-row">
          <section className="main-content">
          <div className="listing-widget-new">
            {!listings ? <ListLoader /> : listings.map((listing) => (
              <PropertyItem key={listing.id} item={listing} />
            ))}
          </div>
          </section>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  listings: state.ListingReducers.listings,
  listingsCount: state.ListingReducers.listingsDetail
});

const mapDispatchToProps = (dispatch) => ({
  listingSearchAction: () => { dispatch(getListings()) }
});

export default connect(mapStateToProps, mapDispatchToProps)(Listings);
