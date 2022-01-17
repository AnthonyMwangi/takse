import * as React from 'react';
import { Image, StatusBar, View } from 'react-native';
import Rings from '../../components/rings';
import { LocationContext } from '../../contexts/location';
import { PermissionContext } from '../../contexts/permissions';
import { colors, styles } from './styles';

declare interface Props {
  navigation: any;
}

const SplashScreen: React.FC<Props> = ({ navigation }) => {
  const permissions = React.useContext(PermissionContext);
  const { region, getUserLocation } = React.useContext(LocationContext);
  const [timeMounted, setMounted] = React.useState<number>(0);

  //check what time component mounted
  React.useEffect(() => {
    setMounted(new Date().getTime());
  }, []);

  //check for location permissions
  React.useEffect(() => {
    const { hasLocationPermission, requestLocationPermission } = permissions;
    if (!hasLocationPermission) requestLocationPermission();
  }, [permissions]);

  //get user location once permissions are granted
  React.useEffect(() => {
    if (permissions.hasLocationPermission && !region.latitude) {
      getUserLocation();
    }
  }, [getUserLocation, permissions.hasLocationPermission, region.latitude]);

  //navigate to home screen once location is found & time is greater than 3 seconds
  React.useEffect(() => {
    if (region.latitude && timeMounted) {
      const remainingTime = 3500 - (new Date().getTime() - timeMounted);
      setTimeout(() => navigation.navigate('Home'), remainingTime || 0);
    }
  }, [navigation, region.latitude, timeMounted]);

  return (
    <View style={styles.root}>
      <StatusBar
        backgroundColor={colors.primary}
        barStyle="light-content"
        hidden={false}
      />

      <View style={styles.container}>
        <Image
          width={80}
          height={80}
          style={styles.image}
          source={{ uri: 'logo_round' }}
        />
        <Rings size={100} />
      </View>
    </View>
  );
};

export default SplashScreen;
