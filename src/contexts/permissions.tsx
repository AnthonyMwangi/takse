import React from 'react';
import { PermissionsAndroid } from 'react-native';

declare interface PermissionProps {
  hasLocationPermission: boolean;
  requestLocationPermission: () => void;
}

const DEFAULT_VALUES: PermissionProps = {
  hasLocationPermission: false,
  requestLocationPermission: () => {}
};

const PermissionContext = React.createContext(DEFAULT_VALUES);

const PermissionProvider = ({ children }: { children: React.ReactNode }) => {
  const [hasLocationPermission, setLocationPermission] = React.useState(false);

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'Takse needs access to your location data.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK'
        }
      );
      setLocationPermission(granted === PermissionsAndroid.RESULTS.GRANTED);
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <PermissionContext.Provider
      value={{
        hasLocationPermission,
        requestLocationPermission
      }}>
      {children}
    </PermissionContext.Provider>
  );
};

export { PermissionContext, PermissionProvider };
