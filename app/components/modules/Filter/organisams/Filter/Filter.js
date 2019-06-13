import React, { PureComponent } from 'react'
import Type from './../../molecules/Type'
import Typeahead from './../../molecules/Typeahead'
import Price from './../../molecules/Price'
import Bedroom from './../../molecules/Bedroom'

class Filter extends PureComponent {
    render() {
        return (<form className="searchbox hasExpanded property-search is-old-brand-search searchbox-singleline clearfix searchbox-sticky" role="search" id="searchbox-n1">
            <fieldset className="container">
                <h1 className="title-big searchbox-explore">Singapore Property Search</h1>
                <div className="sticky-container">
                    <div className="inner-container">
                        <div className="form-group search-box-parameters search-box-query searchbox-hidden-xs clearfix">
                            <div className="input-group">
                                <Type />
                                <Typeahead />
                                <Price />
                                <Bedroom />

                                <span className="input-group-btn">
            <button className="btn btn-primary btn-submit" type="submit" data-title="refined">
                Search
                              </button>
        </span>
                            </div>
                        </div>
                    </div>
                </div>
            </fieldset>
        </form>);

    }
}

export default Filter;