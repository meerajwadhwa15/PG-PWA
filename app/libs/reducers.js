import { combineReducers } from 'redux';
import ListingReducers from '../components/modules/PropertySearch/organisams/Listings/Reducers';

export default function createReducer() {
  return combineReducers({
    ListingReducers,
  });
}
