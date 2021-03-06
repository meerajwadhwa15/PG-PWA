import Header from '../../organisams/Header';
import Footer from '../../organisams/Footer';

const CommonTemplate = ({ children }) => (
  <div id="wrapper-outer">
    <div id="wrapper">
      <div id="wrapper-inner">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  </div>
);

export default CommonTemplate;
