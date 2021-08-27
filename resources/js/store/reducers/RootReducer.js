import { combineReducers } from 'redux';
import mainReducer  from './MainReducer';
import PFReducer  from './PFReducer';

/**
 * combine reducers
 */
const rootReducer = combineReducers({
   mainReducer,
   PFReducer
});

export default rootReducer;
