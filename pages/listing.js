import React, {Component} from "react";
import PropertyDetailTemplate from '../app/components/templates/PropertyDetail';

class PropertyListingPage extends Component {
    static getInitialProps({query}) {
        return {query};
    }
    render() {
        return (
          <PropertyDetailTemplate {...this.props} />
        )
    }
}

export default PropertyListingPage;
