import StyleSheet from 'react-native-extended-stylesheet';

export const styles = StyleSheet.create({
  container: {
    width: 45,
    height: 45,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 45
  },
  tracker: {
    top: 10,
    width: 25,
    height: 25,
    alignSelf: 'center',
    position: 'absolute',
    zIndex: 5
  }
});
