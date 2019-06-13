import { GET_LISTINGS_SUCCESS, GET_LISTINGS_DETAIL_SUCCESS, GET_META_SUCCESS } from './Constants';
import Model from './Model';

export default (state = {}, action = {}) => {
  switch (action.type) {
    case GET_LISTINGS_SUCCESS:
      let data = [];
      for (let i = 0; i < action.data.length; i++) {
        data.push(Model(action.data[i]));
      }
      return {
        listings: data || [], ...state
      };
      break;
    case GET_LISTINGS_DETAIL_SUCCESS:
      return {
        listingsDetail: action.data, ...state
      };
      break;
    case GET_META_SUCCESS:
      return {
        listingsMetadata: action.data, ...state
      };
      break;
    default:
      return {...state};
  }
};
