import CommonLayout from './../Common';
import PropertySearch from './../../organisams/PropertySearch';
import Listings from '../../modules/PropertySearch/organisams/Listings';

const SearchTemplate = (props) => (
  <CommonLayout {...props}>
    <section>
      <PropertySearch {...props} />
      <div className="container">
        <div className="contents">
          <div className="columned-content">
            <Listings {...props} />
          </div>
        </div>
      </div>
    </section>
  </CommonLayout>
);


export default SearchTemplate;
