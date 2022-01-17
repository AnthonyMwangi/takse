import React from 'react';
import { AppRegistry } from 'react-native';
import MainApplication from './app';
import { name as appName } from './app.json';
import { LocationProvider } from './src/contexts/location';
import { PermissionProvider } from './src/contexts/permissions';

const App = () => {
  return (
    <PermissionProvider>
      <LocationProvider>
        <MainApplication />
      </LocationProvider>
    </PermissionProvider>
  );
};

AppRegistry.registerComponent(appName, () => App);
