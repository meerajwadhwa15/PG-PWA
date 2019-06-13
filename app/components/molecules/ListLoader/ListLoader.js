import styled from 'styled-components';
import Styles from './ListLoader.style';

const ListLoader =  ({className}) => (
  <div className={`wrapper ${className}`}>
    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
      <div className="wrapper-cell">
        <div className="image"></div>
        <div className="text">
          <div className="text-line"> </div>
          <div className="text-line"></div>
          <div className="text-line"></div>
          <div className="text-line"></div>
        </div>
      </div>
    ))}
  </div>
);

export default styled(ListLoader)(Styles);
