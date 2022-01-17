import StyleSheet from 'react-native-extended-stylesheet';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: '$DEVICE_WIDTH',
    height: '$DEVICE_HEIGHT',
    background: '#fff'
  },
  mapArea: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    borderWidth: 3,
    borderColor: 'red'
  }
});
