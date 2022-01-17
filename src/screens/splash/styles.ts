import StyleSheet from 'react-native-extended-stylesheet';
import { globalStyles } from '../../styles/global';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$primary'
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  image: {
    width: '4rem',
    height: '4rem',
    position: 'absolute',
    zIndex: 10
  },
  text: {
    color: '$white',
    fontSize: '1rem',
    fontFamily: '$boldFont',
    letterSpacing: '0.05rem'
  }
});

export const colors = {
  primary: globalStyles.$primary
};
