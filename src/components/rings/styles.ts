import StyleSheet from 'react-native-extended-stylesheet';

export const styles = StyleSheet.create({
  root: {
    position: 'relative'
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  container: {
    position: 'relative'
  },
  ring: {
    flex: 1,
    position: 'absolute',
    borderColor: '$white',
    borderWidth: 2
  }
});
