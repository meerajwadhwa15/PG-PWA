import { GET_SUGGESTIONS_SUCCESS } from './Constants';

export default (state = {}, action = {}) => {
  switch (action.type) {
    case GET_SUGGESTIONS_SUCCESS:
      return {
        suggestion: action.data || {}, ...state
      };
      break;
    default:
      return {...state};
  }
};
