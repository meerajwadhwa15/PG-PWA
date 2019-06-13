import { GET_LISTING_DETAIL_SUCCESS } from './Constants';
import Model from './Model';

export default (state = {}, action = {}) => {
  switch (action.type) {
    case GET_LISTING_DETAIL_SUCCESS:
      return {
        listing: Model(action.data) || {}, ...state
      };
      break;
    default:
      return {...state};
  }
};
