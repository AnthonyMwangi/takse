import * as React from 'react';
import { View } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming
} from 'react-native-reanimated';
import { globalStyles } from '../../styles/global';
import { styles } from './styles';

declare interface Props {
  size?: number;
  theme?: 'light' | 'dark';
  children?: React.ReactNode;
}

declare interface RingProps {
  delay?: number;
  size?: number;
  color?: string;
}

const Ring: React.FC<RingProps> = ({ delay = 0, size = 80, color }) => {
  const ring = useSharedValue(0);

  const ringSize = {
    width: size,
    height: size,
    borderRadius: size / 2,
    borderColor: color
  };

  const ringStyle = useAnimatedStyle(() => {
    return {
      opacity: 0.8 - ring.value,
      transform: [
        {
          scale: interpolate(ring.value, [0, 1], [0, 4])
        }
      ]
    };
  });

  React.useEffect(() => {
    ring.value = withDelay(
      delay,
      withRepeat(
        withTiming(1, {
          duration: 4000
        }),
        -1,
        false
      )
    );
  }, [delay, ring]);

  return <Animated.View style={[styles.ring, ringSize, ringStyle]} />;
};

const RingWrapper: React.FC<Props> = ({ size = 40, theme = 'light' }) => {
  const color = theme === 'light' ? globalStyles.$white : globalStyles.$primary;
  return (
    <View style={styles.wrapper}>
      <Ring size={size} color={color} delay={0} />
      <Ring size={size} color={color} delay={1000} />
      <Ring size={size} color={color} delay={2000} />
      <Ring size={size} color={color} delay={3000} />
      <Ring size={size} color={color} delay={4000} />
    </View>
  );
};

const Rings: React.FC<Props> = ({ children, size, theme }) => {
  return (
    <View style={[styles.root, { width: size, height: size }]}>
      {!!children && children}
      <RingWrapper theme={theme} size={size} />
    </View>
  );
};

export default Rings;
