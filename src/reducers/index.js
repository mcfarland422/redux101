// This is our master reducer file.
// It doesn't manage any partriuclar peice of state.
// It simply contains all the individual pieces of state/the reducers.
// I.e., a reducer contains a piece of state, the root reducer contains ALL reducers

// I (the rootreducer), neither know nor care about React.
// I am like Lichtenstien, independent of your silly empires. I just care about redux.

import { combineReducers } from 'redux';

// Import each individual reducer
import StudentReducer from './StudentReducer';

// Build the root reducer, using combineReducers which we imported from redux
// combineReducers takes 1 arg, an object
const rootReducer = combineReducers({
	// the name of the state will be the property (used by react)
	// the value will be the reducer file import
	students: StudentReducer
})

export default rootReducer;