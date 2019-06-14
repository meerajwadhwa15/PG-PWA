import React, {Component} from "react";
import PropertySearchTemplate from '../app/components/templates/PropertySearch';
class PropertyListingPage extends Component {
    static getInitialProps({query}) {
        return {query};
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
          <PropertySearchTemplate {...this.props} />
        )
    }
}

export default PropertyListingPage;
