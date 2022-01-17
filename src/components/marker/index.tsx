import React from 'react';
import { Image, View } from 'react-native';
import { Marker, Region } from 'react-native-maps';
import Animated from 'react-native-reanimated';
import Rings from '../rings';
import { styles } from './styles';

declare interface MarkerProps {
  region: Region;
}

const AnimatedMarker = Animated.createAnimatedComponent(Marker);

const LocationTracker: React.FC<MarkerProps> = ({ region }) => {
  const ref = React.useRef<Marker>(null);
  return (
    <AnimatedMarker
      ref={ref}
      flat={true}
      coordinate={region}
      anchor={{ x: 0.5, y: 0.5 }}>
      <View style={styles.container}>
        <Rings size={45} theme="dark">
          <Image
            width={25}
            height={25}
            style={styles.tracker}
            source={{ uri: 'navigation' }}
          />
        </Rings>
      </View>
    </AnimatedMarker>
  );
};

export default LocationTracker;
