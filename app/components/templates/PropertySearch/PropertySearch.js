import CommonLayout from './../Common';
import PropertySearch from './../../organisams/PropertySearch';
import Listings from '../../modules/PropertySearch/organisams/Listings';

const SearchTemplate = ({ listingSearchAction }) => (
  <CommonLayout>
    <section>
      <PropertySearch />
      <div className="container">
        <div className="contents">
          <div className="columned-content">
            <Listings />
          </div>
        </div>
      </div>
    </section>
  </CommonLayout>
);


export default SearchTemplate;
