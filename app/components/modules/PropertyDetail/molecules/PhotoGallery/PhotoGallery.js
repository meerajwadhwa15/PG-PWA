import React, { PureComponent } from 'react';

const ImageItem = ({ item }) => (
    <div key={`image-${item.id}`} className="item item-img img item-horiz">
        <span className="gallery-item image" data-id="101650661">
            <img src={item.V550} className="" alt="The Draycott #101650661" itemProp="image" />
        </span>
    </div>
);

const VideoItem = ({ item }) => (
    <div key={`video-${item.id}`} className="item item-img img item-horiz">
        <span className="gallery-item image" data-id="101650661">
            {item.convertedVideoUrls && item.convertedVideoUrls.length ?
            <video poster={item.thumb} controls>
                <source src={item.convertedVideoUrls[1]} type="video/mp4" />
                <source src={item.convertedVideoUrls[0]} type="video/webm" />
                Your browser does not support the video tag.
            </video>: null}
        </span>
    </div>
);

class PhotoGallery extends PureComponent {
    render() {
        const { media } = this.props;

        let mediaCount = 0;
        let floorPlanCount = 0;
        let virtualTourCount = 0;
        let videoCount = 0;
        if(media.listing) {
            mediaCount += media.listing.length;
        }

        if(media.property) {
            mediaCount += media.property.length;
        }

        if(media.listingFloorPlans) {
            floorPlanCount += media.listingFloorPlans.length;
        }

        if(media.listingVirtualTours) {
            virtualTourCount += media.listingVirtualTours.length;
        }

        if(media.listingVideos) {
            virtualTourCount += media.listingVideos.length;
        }

        return (<div id="photosvideos" className="photosvideos-gallery listing-detail-block infinite has-enquiry-form">
            <div id="photos" className="section-content">
                <div id="carousel-photos" className="carousel carousel-media media-gallery-widget not-in-fullscreen">
                    <div className="carousel-top-bar can-shortlist">
                        <div className="btn-group js-share-bs-dropdown">
                            <a data-target="#" href="#share" className="pgicon pgicon-share" data-toggle="dropdown" title="SHARE PROPERTY">
                            </a>
                            <div className="dropdown-menu"><div className="sharing-widget" data-clipboard="https://cdn1.pgimgs.com/1558598691/sf2-search/bundles/guruweblayout/vendor/clipboard.js/clipboard-2.0.0.min.js">
                                <h5>Share this property</h5>
                                <div className="row">
                                    <div className="col-xs-6">
                                        <a data-raw-url="https://www.propertyguru.com.sg/listing/21517387" href="http://www.facebook.com/dialog/send?app_id=289605188686&amp;link=https%3A%2F%2Fwww.propertyguru.com.sg%2Flisting%2F21517387" title="Click here to share on Messenger" className="btn btn-facebook btn-block pgicon pgicon-messenger listing btn-facebook-share btn-facebook-messenger-js">Messenger</a></div><div className="col-xs-6"><a data-toggle="modal" data-raw-url="https://www.propertyguru.com.sg/listing/21517387" href="#shareListingEmail" data-target="#shareListingEmail" title="Share with your friends over email" className="btn btn-gold btn-block pgicon pgicon-mail-o sharing-widget-js-email">Email</a></div><div className="col-xs-6"><a data-raw-url="https://www.propertyguru.com.sg/listing/21517387" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.propertyguru.com.sg%2Flisting%2F21517387" title="Click here to share on Facebook" className="btn btn-facebook btn-block pgicon pgicon-facebook listing btn-facebook-share">Facebook</a></div><div className="col-xs-6 visible-xs-block visible-sm-block"><a data-raw-url="https://www.propertyguru.com.sg/listing/21517387" href="https://api.whatsapp.com/send?text=https%3A%2F%2Fwww.propertyguru.com.sg%2Flisting%2F21517387" title="Click here to share on Whatsapp" className="btn btn-whatsapp btn-block pgicon pgicon-whatsapp listing">Whatsapp</a></div><div className="col-xs-6"><a data-raw-url="https://www.propertyguru.com.sg/listing/21517387" href="https://www.twitter.com/share?url=https%3A%2F%2Fwww.propertyguru.com.sg%2Flisting%2F21517387" title="Click here to share on Twitter" className="btn btn-twitter btn-block pgicon pgicon-twitter listing">Twitter</a></div><div className="col-xs-6"><a data-toggle="modal" data-raw-url="https://www.propertyguru.com.sg/listing/21517387" href="/sf2-search/form/share/listing/sms?itemId=21517387&amp;url=https%3A%2F%2Fwww.propertyguru.com.sg%2Flisting%2F21517387" data-target="#shareListingSMS" title="Share with your friends over SMS" className="btn btn-main btn-block pgicon pgicon-comment sharing-widget-js-sms" rel="nofollow">SMS</a></div><div className="col-xs-6 col-xs-12 col-md-6"><a data-raw-url="https://www.propertyguru.com.sg/listing/21517387" href="#copylink" title="Copy Link into memory" className="btn btn-main btn-block pgicon pgicon-link sharing-widget-js-link listing" rel="nofollow">Copy Link</a></div></div>
                            </div>
                            </div>
                        </div>
                        <a href="#shortlist" className="btn-shortlist" data-action-del="/shortlist/delete/21517387" data-action-add="/shortlist/add/21517387" data-listing-id="21517387" title="Shortlist Property">
                            <span className="add">
                                <i className="pgicon pgicon-heart-o"></i>
                            </span>
                            <span className="del">
                                <i className="pgicon pgicon-heart"></i>
                            </span>
                        </a>
                        <a className="carousel-fullscreen" href="#fullscreen" title=""><i className="pgicon pgicon-fullscreen"></i><em className="sr-only">Fullscreen</em></a>
                    </div>
                    <div className="carousel-major">
                        <div className="carousel-inner infinite" role="listbox">
                            {media.listing && media.listing.map((item) => (
                                <ImageItem key={item.id} item={item} />
                            ))}

                            {media.property && media.property.map((item) => (
                                <ImageItem key={item.id} item={item} />
                            ))}

                            {media.listingFloorPlans && media.listingFloorPlans.map((item) => (
                                <ImageItem key={item.id} item={item} />
                            ))}

                            {media.listingVideos && media.listingVideos.map((item) => (
                                <VideoItem key={item.id} item={item} />
                            ))}

                            {media.listingVirtualTours && media.listingVirtualTours.map((item) => (
                                <VideoItem key={item.id} item={item} />
                            ))}
                        </div>

                        <div className="carousel-media-count">
                            <span className="carousel-media-count-current">1</span>
                            <span>of</span>
                            <span className="carousel-media-count-total">{mediaCount}</span>
                            <span className="vertical-bar">|</span>
                            <span className="carousel-media-caption"></span>
                        </div>

                        <div className="carousel-bottom-toolbar">
                            <div className="container">
                                <div className="carousel-media-breakdown">
                                <a href="javascript: void(0)" className="carousel-link-img">{mediaCount} <i className="pgicon pgicon-photo"></i><em className="sr-only">Photos</em></a>

                                {floorPlanCount? <a href="javascript: void(0)" className="carousel-link-floor">{floorPlanCount} <i className="pgicon pgicon-floorplan"></i><em className="sr-only">FloorPlans</em></a>: null}

                                {virtualTourCount? <a href="javascript: void(0)" className="carousel-link-vt">{virtualTourCount} <i class="pgicon pgicon-street-view"></i><em className="sr-only">Virtual tours</em></a>: null}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }
}

export default PhotoGallery;
