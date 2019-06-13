import CommonLayout from './../Common';
import PropertySearch from './../../organisams/PropertySearch';

const HomePageTemplate = ({ listingSearchAction }) => (
  <CommonLayout>
    <section>
      <div className="container">
        <div className="contents">
          <div className="columned-content">
            <div className="columned-content-row">
              <section className="main-content">
              <PropertySearch />
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  </CommonLayout>
);


export default HomePageTemplate;
