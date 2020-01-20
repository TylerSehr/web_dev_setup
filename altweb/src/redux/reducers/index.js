import { combineReducers } from 'redux';
import content from './content.reducer';
// import chat from './chat.reducer'


const store = combineReducers({
  content,
  // chat
});

export default store;
