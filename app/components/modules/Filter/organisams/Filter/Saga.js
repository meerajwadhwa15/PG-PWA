// ?region=sg&query=a&limit=50
import { put, call, takeLatest } from 'redux-saga/effects'
import Fetch from './../../../../../libs/fetch';
import { GET_SUGGESTIONS } from './Constants';
import { getSuggestionSuccess } from './Actions';
import {AUTOCOMPLETE_API} from './../../../../../config/api';

export function* fetchSuggestion({params}) {
  try {
    // ${params.listingId}
     const data = yield call(Fetch, {
       url: `${AUTOCOMPLETE_API}/?region=sg&query=${params.query}&limit=10`
     });
     yield put(getSuggestionSuccess(data));
  } catch (e) {
      console.log(e);
  }
}

export default function* suggestion() {
  yield takeLatest(GET_SUGGESTIONS, fetchSuggestion);
}
