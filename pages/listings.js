import React, {Component} from "react";
import PropertySearchTemplate from '../app/components/templates/PropertySearch';

class PropertyListingPage extends Component {
    static getInitialProps({query}) {
        return {query};
    }
    render() {
        return (
          <PropertySearchTemplate {...this.props} />
        )
    }
}

export default PropertyListingPage;
