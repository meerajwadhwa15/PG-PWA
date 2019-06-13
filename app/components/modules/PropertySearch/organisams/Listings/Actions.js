import { GET_LISTINGS, GET_LISTINGS_SUCCESS, GET_LISTINGS_DETAIL_SUCCESS, GET_META_SUCCESS } from './Constants';

export const getListings = (params) => ({
  type: GET_LISTINGS,
  params,
});

export const getListingsSuccess = (data) => ({
  type: GET_LISTINGS_SUCCESS,
  data
});

export const getListingDetailSuccess = (data) => ({
  type: GET_LISTINGS_DETAIL_SUCCESS,
  data
});

export const getMetaSuccess = (data) => ({
  type: GET_META_SUCCESS,
  data
});
