import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Import the store from redux so we can use it. The Store IS redux
import { createStore } from 'redux';

// import the provider componet from react-redux so that react and redux can talk.
// They talk through "connect", but the Provider component makes that happen
import { Provider } from 'react-redux';

// import the main reducer (rootReducer) so that we can hand it to the store
import reducers from './reducers/index';

// Make a store for redux to use. Use createStore brought in above
// pass it redcuers, which is teh export of the rootReducer file
// rootReducer file is all the little reducers together.
const theStore = createStore(reducers);

// Provider is the component that makes connect work (inside the containers)
// it takes a prop of store, which is the Redux Store.
// The redux store was made by createStore and giving it the rootReducer 
ReactDOM.render(
	<Provider store={theStore}>
		<App />
	</Provider>, 
	document.getElementById('root'));

