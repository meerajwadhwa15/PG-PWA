import { combineReducers } from 'redux';
import ListingReducers from '../components/modules/PropertySearch/organisams/Listings/Reducers';
import PropertyDetailReducers from '../components/modules/PropertyDetail/organisams/ListingDetail/Reducers';

export default function createReducer() {
  return combineReducers({
    ListingReducers,
    PropertyDetailReducers,
  });
}
