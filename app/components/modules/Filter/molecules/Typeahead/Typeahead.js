import { PureComponent } from 'react';
import Autosuggest from 'react-autosuggest';
import styled from 'styled-components';
import Styles from './Typeahead.style';

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
    <div className="tt-suggestion tt-selectable"><i className="pgicon pgicon-bank"></i><p className="tt-sug-text">{suggestion.displayText} <u><strong className="tt-highlight">{suggestion.displayType}</strong></u></p><p className="tt-sug-desc"><span className="tt-sug-type"><u><strong className="tt-highlight">{suggestion.displayType}</strong></u></span>{suggestion.displayDescription}</p></div>
);

class TypeaheadFilter extends PureComponent {
    constructor() {
        super();
        this.state = {
            value: '',
        };
    }

    onChange = (event, { newValue }) => {
        this.setState({
            value: newValue
        });
    };

    onSuggestionsFetchRequested = ({ value }) => {
        this.props.fetchSuggestionAction({ query: value });
    };

    getSuggestionValue(suggestion) {
        if (this.props.updateFilter) {
            this.props.updateFilter({
                key: 'center_lat',
                value: suggestion.properties.latitude
            });
            this.props.updateFilter({
                key: 'center_long',
                value: suggestion.properties.longitude,
            });
            this.props.updateFilter({
                key: 'distance',
                value: 1,
            });
            this.props.updateFilter({
                key: 'latitude',
                value: suggestion.properties.latitude,
            });
            this.props.updateFilter({
                key: 'longitude',
                value: suggestion.properties.longitude,
            });
        }

        return suggestion.displayText;
    }

    render() {
        const { value } = this.state;
        // Autosuggest will pass through all these props to the input.
        const inputProps = {
            placeholder: 'Search for School, MRT etc.',
            value,
            onChange: this.onChange
        };
        return (<div className={`typeahead-wrapper ${this.props.className}`}>
            <Autosuggest
                suggestions={this.props.suggestion}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={this.getSuggestionValue.bind(this)}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
            />
        </div>)
    }
}

export default styled(TypeaheadFilter)(Styles);