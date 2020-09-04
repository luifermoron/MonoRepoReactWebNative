export * from './redux';

import * as React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";

export const appConfig = (App: any, storeConfig: {store: any, persistor: any}) => {
    const { store, persistor } = storeConfig;

    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <App/>
        </PersistGate>
      </Provider>
      );
} 