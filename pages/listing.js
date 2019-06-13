import React, {Component} from "react";
import PropertyDetailTemplate from '../app/components/templates/PropertyDetail';

class PropertyListingPage extends Component {
    static getInitialProps({query}) {
        return {query};
    }
    render() {
        console.log('Here in listing');
        return (
          <PropertyDetailTemplate {...this.props} />
        )
    }
}

export default PropertyListingPage;
