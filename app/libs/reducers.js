import { combineReducers } from 'redux';
import ListingReducers from '../components/modules/modules/Listings/Reducers';

export default function createReducer() {
  return combineReducers({
    global: globalReducer,
    ListingReducers,
  });
}
