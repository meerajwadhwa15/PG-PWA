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
        ...state,
        listings: data || [],
      };
      break;
    case GET_LISTINGS_DETAIL_SUCCESS:
      return {
        ...state,
        listingsDetail: action.data,
      };
      break;
    case GET_META_SUCCESS:
      return {
        ...state,
        listingsMetadata: action.data,
      };
      break;
    default:
      return {...state};
  }
};
