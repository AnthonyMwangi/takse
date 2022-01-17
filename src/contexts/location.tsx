import * as React from 'react';
import { Region } from 'react-native-maps';
import { getCurrentLocation, getDefaultDeltas } from '../utils/getLocation';

declare interface LocationProps {
  region: Region;
  getUserLocation: () => void;
  setRegion: React.Dispatch<React.SetStateAction<Region>>;
}

const DEFAULT_VALUES: LocationProps = {
  region: { latitude: 0, longitude: 0, latitudeDelta: 0, longitudeDelta: 0 },
  getUserLocation: () => {},
  setRegion: () => {}
};

const LocationContext = React.createContext(DEFAULT_VALUES);

const LocationProvider = ({ children }: { children: React.ReactNode }) => {
  const [region, setRegion] = React.useState(DEFAULT_VALUES.region);

  const setUserLocation = (location: any = {}) => {
    const deltas = getDefaultDeltas(0.01);
    setRegion({ ...location, ...deltas });
  };

  const getUserLocation = () => {
    getCurrentLocation(({ error, location }: any) => {
      console.log(`location`, location);
      if (!error) setUserLocation(location);
    });
  };

  return (
    <LocationContext.Provider
      value={{
        region,
        setRegion,
        getUserLocation
      }}>
      {children}
    </LocationContext.Provider>
  );
};

export { LocationContext, LocationProvider };
