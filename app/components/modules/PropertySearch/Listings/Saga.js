import { put, call, takeEvery } from 'redux-saga/effects'
import Fetch from './../../../libs/fetch';
import { GET_LISTINGS } from './Constants';
import { getListingsSuccess, getListingDetailSuccess, getMetaSuccess } from './Actions';

export function* fetchListings(dispatch) {
  try {
     const data = yield call(Fetch, {
       url: 'http://listingsearch-sg.staging.guruestate.com/v1/listings?region=sg&locale=en&limit=20&page=1'
     });
     yield put(getListingDetailSuccess({
       total: data.total,
       totalPages: data.totalPages,
      }));
     yield put(getMetaSuccess(data.metas));
     yield put(getListingsSuccess(data.listings));
  } catch (e) {
      console.log(e);
  }
}

export default function* listings() {
  console.log('Here in sagas listings');
  yield takeEvery(GET_LISTINGS, fetchListings);
}
