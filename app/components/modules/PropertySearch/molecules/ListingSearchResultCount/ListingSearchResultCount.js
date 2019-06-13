export default () => (
    <div className="columned-content-row">
      <section className="main-content">
        <form>
          <input type="hidden" value="/sf2-search/ajax/alert/create/alert?market=residential&amp;listing_type=sale" name="alert-ajax-action-url" id="alert-ajax-action-url" />
          <input type="hidden" value="Property for Sale in Singapore" name="search-criteria-text" id="searchCriteriaText" />
        </form>
        <h1 className="title search-title">
          81,076 Results of Property For Sale in Singapore.
  </h1>

        <div className="modal fade" id="alert-create-alert" tabindex="-1" role="dialog" aria-labelledby="alert-create-alert-title" aria-hidden="true">
          <form className="form-horizontal share-listing-email modal-form" role="form" method="POST" action="" name="alert-create-alert-form">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-hidden="true" title="Close">×</button>
                  <h4 className="modal-title" id="alert-create-alert-title">My Property Search &amp; Alerts</h4>
                </div>
                <div className="modal-body">
                  <div className="form-group">
                    <label className="col-md-4 control-label">Search Name</label>
                    <div className="col-md-8">
                      <input type="text" value="Property for Sale in Singapore" className="form-control" name="alert-name" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-md-4 control-label">Daily Email Alerts</label>
                    <div className="col-md-8">
                      <input type="checkbox" className="checkbox" name="checkbox-create-alert" checked="checked" />
                    </div>
                  </div>
                  <table className="table table-striped">
                    <tbody>
                      <tr>
                        <td>Transaction Types</td>
                        <td>Buy</td>
                      </tr>
                    </tbody>
                  </table>
                  <p>81076 Property for Sale in Singapore</p>
                  <div className="alert alert-success" role="alert"></div>
                  <div className="alert alert-danger" role="alert"></div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary" id="modal-alert-create-alert-button" data-loading-text="Loading...">Save</button>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="modal fade" id="alert-save-search" tabindex="-1" role="dialog" aria-labelledby="alert-save-search-title" aria-hidden="true">
          <form className="form-horizontal share-listing-email modal-form" role="form" method="POST" action="" name="alert-save-search-form">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-hidden="true" title="Close">×</button>
                  <h4 className="modal-title" id="alert-save-search-title">My Property Search &amp; Alerts</h4>
                </div>
                <div className="modal-body">
                  <div className="form-group">
                    <label className="col-md-4 control-label">Search Name</label>
                    <div className="col-md-8">
                      <input type="text" value="Property for Sale in Singapore" className="form-control" name="alert-name" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-md-4 control-label">Daily Email Alerts</label>
                    <div className="col-md-8">
                      <input type="checkbox" className="checkbox" name="checkbox-create-alert" />
                    </div>
                  </div>
                  <table className="table table-striped">
                    <tbody>
                      <tr>
                        <td>Transaction Types</td>
                        <td>Buy</td>
                      </tr>
                    </tbody>
                  </table>
                  <p>81076 Property for Sale in Singapore</p>
                  <div className="alert alert-success" role="alert"></div>
                  <div className="alert alert-danger" role="alert"></div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary" id="modal-alert-save-search-button" data-loading-text="Loading...">Save</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
