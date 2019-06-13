const ListingSearchResultCount = ({listingsCount}) => (
    <div className="columned-content-row">
      <section className="main-content">
        <form>
          <input type="hidden" value="/sf2-search/ajax/alert/create/alert?market=residential&amp;listing_type=sale" name="alert-ajax-action-url" id="alert-ajax-action-url" />
          <input type="hidden" value="Property for Sale in Singapore" name="search-criteria-text" id="searchCriteriaText" />
        </form>
        <h1 className="title search-title">
          {listingsCount ? listingsCount.total: null} Results of Property For Sale in Singapore.
      </h1>
      </section>
    </div>
  );

  export default ListingSearchResultCount;