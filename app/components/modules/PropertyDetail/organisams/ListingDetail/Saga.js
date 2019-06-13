import { put, call, takeLatest } from 'redux-saga/effects'
import Fetch from './../../../../../libs/fetch';
import { GET_LISTING_DETAIL } from './Constants';
import { getPropertyDetailSuccess } from './Actions';
import {PROPERTY_DETAIL_API} from './../../../../../config/api';

export function* fetchPropertyDetail({params}) {
  try {
    // ${params.listingId}
     const data = yield call(Fetch, {
       url: `${PROPERTY_DETAIL_API}/21834366?region=sg&id=21834366`
     });
     yield put(getPropertyDetailSuccess(data));
  } catch (e) {
      console.log(e);
  }
}

export default function* PropertyDetail() {
  yield takeLatest(GET_LISTING_DETAIL, fetchPropertyDetail);
}
