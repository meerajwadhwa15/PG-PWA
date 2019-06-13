import { put, call, takeLatest } from 'redux-saga/effects'
import Fetch from './../../../../../libs/fetch';
import { GET_LISTING_DETAIL } from './Constants';
import { getPropertyDetailSuccess, getPropertyDetailError } from './Actions';
import {PROPERTY_DETAIL_API} from './../../../../../config/api';

export function* fetchPropertyDetail({params}) {
  console.log('params', params);
  try {
     const data = yield call(Fetch, {
       url: `${PROPERTY_DETAIL_API}/${params.listingId}?region=sg&id=${params.listingId}`
     });
     yield put(getPropertyDetailSuccess(data));
  } catch (e) {
    yield put(getPropertyDetailError());
      console.log(e);
  }
}

export default function* PropertyDetail() {
  yield takeLatest(GET_LISTING_DETAIL, fetchPropertyDetail);
}
