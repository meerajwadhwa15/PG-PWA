import { Fragment } from 'react';

export default ({title, property}) => (
  <Fragment>
    <h4>Project Info</h4>
    <div id="condo-profile" className="collapse-xs collapse-sm in">
      <h5>{title}</h5>
      <div className="section-content">
        <div className="box condo-profile-box">
          <div className="list-group">
            <div className="condo-widget">
              <div className="container-fluid row">
                <a className="lazy-bg-parent col-xs-12 col-sm-6 image-container" href="/project/the-draycott-513" title="The Draycott">
                  <img className="lazy-bg" src="https://sg2-cdn.pgimgs.com/projectnet-project/5225/ZPPHO.96889049.V350.jpg" alt="The Draycott" />
                </a>
                <div className="condo-widget__project-info col-xs-12 col-sm-6">
                  <div className="listing-details-primary">
                    <div className="col-xs-12">
                      <div className="property-attr">
                        <div className="label-block">Type</div>
                        <div className="value-block">{property.typeText}</div>
                      </div>
                    </div>

                    <div className="col-xs-12">
                      <div className="property-attr">
                        <div className="label-block">TOP</div>
                        <div className="value-block">{property.topYear}</div>
                      </div>
                    </div>

                    <div className="col-xs-12">
                      <div className="property-attr">
                        <div className="label-block">Tenure</div>
                        <div className="value-block">{property.tenureText}</div>
                      </div>
                    </div>

                    <div className="col-xs-12">
                      <div className="property-attr">
                        <div className="label-block">Total Unit(s)</div>
                        <div className="value-block">{property.totalUnits}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </Fragment>
);
