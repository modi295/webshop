import { combineReducers } from 'redux';
import FilterReducer from './FilterReducer';

const reducer = combineReducers({
    FilterReducer: FilterReducer
})
export default reducer;