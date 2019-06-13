import { combineReducers } from 'redux';
import ListingReducers from '../components/modules/PropertySearch/organisams/Listings/Reducers';
import PropertyDetailReducers from '../components/modules/PropertyDetail/organisams/ListingDetail/Reducers';
import SuggestionsReducers from '../components/modules/Filter/organisams/Filter/Reducers';


export default function createReducer() {
  return combineReducers({
    ListingReducers,
    PropertyDetailReducers,
    SuggestionsReducers,
  });
}
