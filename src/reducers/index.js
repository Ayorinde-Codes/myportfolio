import { combineReducers } from 'redux';
import CoronaSummary from './reducer_summary';
import CoronaSearch from './reducer_search';


const rootReducer = combineReducers({
  // state: (state = {}) => state

  summary: CoronaSummary,
  searchcorona: CoronaSearch
});

export default rootReducer;
