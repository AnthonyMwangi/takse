import haversine from 'haversine';
import Geolocation from 'react-native-geolocation-service';
import { Region } from 'react-native-maps';

export function getCurrentLocation(callback: (p: {}) => void) {
  Geolocation.getCurrentPosition(
    (position: any) => callback({ location: position.coords }),
    (error: any) => callback({ error: error?.message ?? 'Location Error' }),
    { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
  );
}

export function getZoomLevel(longitudeDelta: number = 0) {
  const DEFAULT_ZOOM_LEVEL = 18;
  if (longitudeDelta === 0) return DEFAULT_ZOOM_LEVEL;
  return Math.round(Math.log(360 / longitudeDelta) / Math.LN2);
}

export function getDefaultDeltas(defaultDelta?: number) {
  //const screen = Dimensions.get('window');
  const latitudeDelta = defaultDelta || 0.0922;
  //const aspectRatio = screen.width / screen.height;
  //const longitudeDelta = latitudeDelta * aspectRatio;
  return { latitudeDelta, longitudeDelta: latitudeDelta };
}

/**
 * Detect if the location has changed
 * @param coords initial location
 * @param newCoords new location
 * @param tolerance min distance (meters)
 * @returns boolean true if the location has changed
 */
export function locationChanged(
  coords: Region,
  newCoords: Region,
  tolerance = 0.001
): boolean {
  return haversine(coords, newCoords, { unit: 'meter' }) >= tolerance;
}
