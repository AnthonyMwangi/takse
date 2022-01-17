import color from 'color';
import { Dimensions } from 'react-native';
const device = Dimensions.get('screen');

export const globalStyles = {
  $rem: 20,

  $DEVICE_HEIGHT: device.height,
  $DEVICE_WIDTH: device.width,

  $primary: '#5242BC',
  $white: '#FFFFFF',
  $black: '#0B0B0B',

  $purple: '#C940EA',
  $green: '#2EA07E',
  $blue: '#4285F4',

  $gray: '#3E4550',
  $divider: '#DEDEDE',

  $text: '#464646',
  $bg: color('#F6F7F8').darken(0.05),
  $text_mute: color('#A2A5A6').darken(0.05),
  $bg_mute: color('#9599A6').darken(0.25),
  $border: color('#DDDDDD').darken(0.15),

  $boldFont: 'product_sans_bold',
  $mediumFont: 'averta_semibold',
  $regularFont: 'product_sans_regular'
};
