// This is our master reducer file.
// It doesn't manage any particiular piece of state.
// It simply contains all the individula piecses of stae the reducers.
// Ie.e a reuddfer contians apiece of state, the root reducer contains ALL reducers.

// I (the rootreducer), neither know nor care about React.
// I am like Lichtenstien, independent of your silly empire.
import { combineReducers } from 'redux';

import StudentReducer form './StudentReducer';

// combineReducers takes 1 arg, an object
const rootReducer = combineReducers({
  // the name of the state will be the property (used by react)
  // the value will be the reducer file import
  students: StudentReducer
})

export default rootReducer;
