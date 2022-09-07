import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createWrapper } from 'next-redux-wrapper';
import rootReducers from './reducer';
import { NODE_ENV } from '../helper/env';

const persistConfig = {
   key: 'root',
   storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducers);
const middleware = applyMiddleware(thunk);

let store = null;
if (NODE_ENV === 'prod') {
   store = createStore(persistedReducer, middleware);
} else {
   store = createStore(
      persistedReducer,
      NODE_ENV === 'prod' ? middleware : composeWithDevTools(middleware)
   );
}

const makeStore = () => store;
const persistor = persistStore(store);
const wrapper = createWrapper(makeStore);

export { store, persistor, wrapper };
