const TypeaheadFilter = () => (
    <span className="twitter-typeahead">
        <input type="text" className="form-control freetext-input tt-hint" value="" autocomplete="off" readonly="" spellcheck="false" tabindex="-1" dir="ltr" />
        <input name="freetext" type="text" className="form-control freetext-input tt-input" value="" placeholder="Type or Select Location" autocomplete="off" spellcheck="false" dir="auto" />
        <pre aria-hidden="true" ></pre>
        <div className="tt-menu" ><div className="tt-dataset tt-dataset-previousSearches"></div><div className="tt-dataset tt-dataset-autocompletedefaults"></div><div className="tt-dataset tt-dataset-autocomplete"></div></div></span>
);

export default TypeaheadFilter;