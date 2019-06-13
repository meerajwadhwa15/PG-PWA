import { GET_LISTING_DETAIL_SUCCESS, GET_LISTING_DETAIL_ERROR, GET_LISTING_DETAIL } from './Constants';
import Model from './Model';

export default (state = {}, action = {}) => {
  switch (action.type) {
    case GET_LISTING_DETAIL_SUCCESS:
      return {
        ...state,
        listing: Model(action.data),
      };
      break;
      case GET_LISTING_DETAIL_ERROR:
      case GET_LISTING_DETAIL:
      return {
        ...state,
        listing: null,
      };
      break;
    default:
      return {...state};
  }
};
