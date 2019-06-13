import { GET_SUGGESTIONS, GET_SUGGESTIONS_SUCCESS } from './Constants';

export const getSuggestion = (params) => ({
  type: GET_SUGGESTIONS,
  params,
});

export const getSuggestionSuccess = (data) => ({
  type: GET_SUGGESTIONS_SUCCESS,
  data,
});