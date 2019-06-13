import { GET_LISTING_DETAIL, GET_LISTING_DETAIL_SUCCESS, GET_LISTING_DETAIL_ERROR } from './Constants';

export const getPropertyDetail = (params) => ({
  type: GET_LISTING_DETAIL,
  params,
});

export const getPropertyDetailSuccess = (data) => ({
  type: GET_LISTING_DETAIL_SUCCESS,
  data,
});

export const getPropertyDetailError = (data) => ({
  type: GET_LISTING_DETAIL_ERROR,
  data,
});