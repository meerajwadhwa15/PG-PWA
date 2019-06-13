import React, { PureComponent } from 'react'
import { connect } from "react-redux";
import PropertyItem from '../../molecules/PropertyItem';
import { getListings } from './Actions';
import Loader from './../../molecules/Loader';

class Listings extends PureComponent {
  componentWillMount() {
    // Fetch Listings
    if (!this.props.listings) {
      this.props.listingSearchAction();
    }
  }

  render() {
    const { listings } = this.props;
    return (<div className="listing-widget-new">
      {!listings ? <Loader /> : listings.map((listing) => (
        <PropertyItem key={listing.id} item={listing} />
      ))}
    </div>);
  }
}

const mapStateToProps = (state) => ({
  listings: state.ListingReducers.listings
});

const mapDispatchToProps = (dispatch) => ({
  listingSearchAction: () => { dispatch(getListings()) }
});

export default connect(mapStateToProps, mapDispatchToProps)(Listings);
