import styled from 'styled-components';
import Styles from './DetailLoader.style';

const DetailLoader =  ({className}) => (
  <div className={`wrapper ${className}`}>
   <div className="wrapper-cell">
        <div class="gallery">
          <div className="image"></div>
          <div className="image"></div>
          <div className="image"></div>
          <div className="image"></div>
        </div>
        <div className="container text">
          <div className="long-line text-line"> </div>
          <div className="text-line"></div>
          <div className="long-line text-line"></div>
          <div className="medium-line text-line"></div>
          <div className="text-line"></div>
          <div className="medium-line text-line"></div>
        </div>
      </div>
  </div>
);

export default styled(DetailLoader)(Styles);
