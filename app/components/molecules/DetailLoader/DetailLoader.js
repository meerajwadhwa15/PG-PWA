import styled from 'styled-components';
import Styles from './DetailLoader.style';

const DetailLoader =  ({className}) => (
  <div className={`wrapper ${className}`}>
   <div className="wrapper-cell">
        <div className="image"></div>
        <div className="text">
          <div className="text-line"> </div>
          <div className="text-line"></div>
          <div className="text-line"></div>
          <div className="text-line"></div>
        </div>
      </div>
  </div>
);

export default styled(DetailLoader)(Styles);
