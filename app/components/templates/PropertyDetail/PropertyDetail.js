import PropertyDetail from '../../modules/PropertyDetail/organisams/ListingDetail';
import CommonLayout from './../Common'

const PropertyDetailTemplate = (props) => (
  <CommonLayout {...props}>
    <section>
      <PropertyDetail {...props} />
    </section>
  </CommonLayout>
);


export default PropertyDetailTemplate;
