import * as React from 'react';
import { Image, StatusBar, View } from 'react-native';
import Map from '../../components/map';
import { LocationContext } from '../../contexts/location';
import { styles } from './styles';

const HomeScreen: React.FC = () => {
  const { region } = React.useContext(LocationContext);

  console.log(`regions`, { region });

  return (
    <View style={styles.root}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent={true}
        hidden={false}
      />

      {!region.latitude && (
        <Image
          width={80}
          height={80}
          style={styles.image}
          source={{ uri: 'logo_round' }}
        />
      )}

      {!!region.latitude && <Map initialRegion={region} />}
    </View>
  );
};

export default HomeScreen;
