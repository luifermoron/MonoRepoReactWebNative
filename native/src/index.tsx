import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import App from "./navigation";
import { configureStore, appConfig } from "core";
import AsyncStorage from '@react-native-community/async-storage';

import SplashScreen from 'react-native-splash-screen';

export default () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    appConfig(App, configureStore(AsyncStorage))
  );
};
