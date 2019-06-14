import Router from 'next/router'
import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import Type from './../../molecules/Type';
import Typeahead from './../../molecules/Typeahead';
 import Price from './../../molecules/Price';
import Bedroom from './../../molecules/Bedroom';
import Button from './../../../../atoms/Button';
import { getSuggestion } from './Actions';
import styled from 'styled-components';
import Styles from './Filter.style';

class Filter extends PureComponent {

    componentWillMount() {
        this.setState({
            ...this.props.query
        });
    }

    doSearch() {
        Router.push({
            pathname: '/listings',
            query: this.state,
            shallow: true
          });
    }

    updateFilter(data) {
        this.setState({
            [data.key]: data.value
        });
    }

    render() {
        return (<form className={`searchbox hasExpanded property-search is-old-brand-search searchbox-singleline clearfix searchbox-sticky ${this.props.className}`} role="search" id="searchbox-n1">
            <fieldset className="container">
                <h1 className="title-big searchbox-explore">Singapore Property Search</h1>
                <div className="sticky-container">
                    <div className="inner-container">
                        <div className="form-group search-box-parameters search-box-query clearfix">
                            <div className="input-group" style={{display: 'flex', height: '48px'}}>
                                <Type {...this.props.query} updateFilter={this.updateFilter.bind(this)} />
                                <Typeahead {...this.props.query} suggestion={this.props.suggestion} updateFilter={this.updateFilter.bind(this)} fetchSuggestionAction={this.props.fetchSuggestionAction} />
                                <Price {...this.props.query} updateFilter={this.updateFilter.bind(this)} />
                                {/* <Bedroom updateFilter={this.updateFilter.bind(this)} /> */}
                                <div className="input-group-btn">
            <Button className="btn btn-primary btn-submit" onClick={this.doSearch.bind(this)} type="button" data-title="refined">
                Search
                              </Button>
        </div>
                            </div>
                        </div>
                    </div>
                </div>
            </fieldset>
        </form>);

    }
}


const mapStateToProps = (state) => ({
    suggestion: state.SuggestionsReducers.suggestion || []
  });

  const mapDispatchToProps = (dispatch) => ({
    fetchSuggestionAction: (params) => { dispatch(getSuggestion(params)) }
  });

  export default connect(mapStateToProps, mapDispatchToProps)(styled(Filter)(Styles));
