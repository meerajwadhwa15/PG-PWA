export default ({ id }) => (
  <div className="btns">
    <a href={`http://www.facebook.com/dialog/send?app_id=289605188686&amp;link=https%3A%2F%2Fwww.propertyguru.com.sg%2Flisting%2F${id}`} className="btn btn-facebook btn-facebook-share btn-facebook-messenger-js btn-square" title="Click here to share on Messenger"><i className="pgicon pgicon-messenger"></i></a>

    <a href={`https://api.whatsapp.com/send?text=https%3A%2F%2Fwww.propertyguru.com.sg%2Flisting%2F${id}`} className="btn btn-whatsapp btn-square" title="Click here to share on Whatsapp"><i className="pgicon pgicon-whatsapp"></i></a>
  </div>
);
