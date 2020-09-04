import { applyMiddleware, createStore, compose } from "redux";
import { sessionReducer } from "../adapters/redux";
import { UserSession } from "../entities";

export type StateType = {
  session: UserSession,
};

//Store config
import thunk from 'redux-thunk';
import { persistStore, persistCombineReducers } from "redux-persist";
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';



const middlewares = [thunk];
if (process.env.NODE_ENV !== "production") {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

export const configureStore = (storage: any) => {

  const config = {
    key: "root",
    storage: storage,
    stateReconciler: autoMergeLevel2
  };

  const persistReducer = persistCombineReducers(config, {
    session: sessionReducer
  });

  const enhancers = [applyMiddleware(...middlewares)];
  const persistConfig: any = { enhancers };
  let store = createStore(persistReducer, undefined, compose(...enhancers));
  let persistor = persistStore(store, persistConfig, ()=>{});

  return {
    store, persistor
  };
}

