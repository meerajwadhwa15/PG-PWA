import CommonLayout from './../Common';
import PropertySearch from './../../organisams/PropertySearch';
import Listings from '../../modules/PropertySearch/organisams/Listings';
import ListingSearchResultCount from './../../modules/PropertySearch/molecules/ListingSearchResultCount'

const SearchTemplate = ({ listingSearchAction }) => (
  <CommonLayout>
    <section>
      <PropertySearch />
      <div className="container">
        <div className="contents">
          <div className="columned-content">
            <ListingSearchResultCount />
            <div className="columned-content-row">
              <section className="main-content">
                <Listings />
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  </CommonLayout>
);


export default SearchTemplate;
