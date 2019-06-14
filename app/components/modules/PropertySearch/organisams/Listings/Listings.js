import React, { PureComponent, Fragment } from 'react'
import { connect } from "react-redux";
import PropertyItem from '../../molecules/PropertyItem';
import { getListings } from './Actions';
import ListLoader from './../../../../molecules/ListLoader';
import ListingSearchResultCount from './../../molecules/ListingSearchResultCount'
class Listings extends PureComponent {
  componentWillMount() {
    if (!this.props.listings) {
      this.props.listingSearchAction(this.props.query);
    }
  }

  componentDidMount() {
    var loadMoreEle = document.querySelector('.loadMore');
    if(loadMoreEle) {
      var options = {
        root: null,
        rootMargin: '0px',
        threshold: 1.0
      };
      var observer = new IntersectionObserver(this.handleIntersect.bind(this), options);
      observer.observe();
    }
  }

  handleIntersect(entries, observer) {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        // load more data
        if (this.props.query && this.props.query.page) {
          this.props.query.page += 1;
        } else {
          this.props.query.page = 2;
        }
        this.props.listingSearchAction(this.props.query);
      }
    });
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
              {listings && listings.length ? <div className="loadMore" style={{'text-align': 'center',
    'margin': '30px 0 0 0'}}>
                <svg width="120" height="30" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg" fill="red">
                  <circle cx="15" cy="15" r="15">
                    <animate attributeName="r" from="15" to="15"
                      begin="0s" dur="0.8s"
                      values="15;9;15" calcMode="linear"
                      repeatCount="indefinite" />
                    <animate attributeName="fill-opacity" from="1" to="1"
                      begin="0s" dur="0.8s"
                      values="1;.5;1" calcMode="linear"
                      repeatCount="indefinite" />
                  </circle>
                  <circle cx="60" cy="15" r="9" fillOpacity="0.3">
                    <animate attributeName="r" from="9" to="9"
                      begin="0s" dur="0.8s"
                      values="9;15;9" calcMode="linear"
                      repeatCount="indefinite" />
                    <animate attributeName="fill-opacity" from="0.5" to="0.5"
                      begin="0s" dur="0.8s"
                      values=".5;1;.5" calcMode="linear"
                      repeatCount="indefinite" />
                  </circle>
                  <circle cx="105" cy="15" r="15">
                    <animate attributeName="r" from="15" to="15"
                      begin="0s" dur="0.8s"
                      values="15;9;15" calcMode="linear"
                      repeatCount="indefinite" />
                    <animate attributeName="fill-opacity" from="1" to="1"
                      begin="0s" dur="0.8s"
                      values="1;.5;1" calcMode="linear"
                      repeatCount="indefinite" />
                  </circle>
                </svg>
              </div>: null}
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
  listingSearchAction: (params) => { dispatch(getListings(params)) }
});

export default connect(mapStateToProps, mapDispatchToProps)(Listings);
