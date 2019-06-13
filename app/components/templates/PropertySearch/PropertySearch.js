import Listings from '../../organisams/Listings';
import PropertySearch from '../../molecules/PropertySearch';
import ExploreAreas from '../../molecules/ExploreAreas';
import ListingSearchResultCount from '../../molecules/ListingSearchResultCount';
import CommonLayout from './../Common'

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
