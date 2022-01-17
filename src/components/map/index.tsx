import React from 'react';
import { View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Region } from 'react-native-maps';
import { getDefaultDeltas } from '../../utils/getLocation';
import LocationMarker from '../marker';
import { styles } from './styles';

declare interface MapProps {
  initialRegion: Region;
}

export default function Map({ initialRegion }: MapProps) {
  const thisMap = React.useRef<MapView>(null);
  const [mapRegion, setMapRegion] = React.useState<Region>(initialRegion);
  const [updateViewPort, setUpdateViewPort] = React.useState<boolean>(true);

  const onUserDragMapArea = () => {
    if (!updateViewPort) return null;
    return setUpdateViewPort(false);
  };

  const onMapRegionChange = async (region: Region, animate: boolean) => {
    if (!region || !region.latitude) return null;
    const newLatitudeDelta = region.latitudeDelta || mapRegion.latitudeDelta;
    const newMapRegion = { ...region, ...getDefaultDeltas(newLatitudeDelta) };
    if (animate) thisMap?.current?.animateToRegion(newMapRegion, 800);
    return setMapRegion(newMapRegion);
  };

  return (
    <View style={styles.root}>
      <MapView
        ref={thisMap}
        maxZoomLevel={20}
        showsIndoors={true}
        showsCompass={true}
        style={styles.mapArea}
        provider={PROVIDER_GOOGLE}
        onPanDrag={() => onUserDragMapArea()}
        onRegionChangeComplete={(r: Region) => onMapRegionChange(r, false)}
        onRegionChange={(r: Region) => setMapRegion(r)}
        initialRegion={mapRegion}>
        <LocationMarker region={mapRegion} />
      </MapView>
    </View>
  );
}
