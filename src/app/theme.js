import * as Colors from 'material-ui/styles/colors';
export const brandColor = '#6FD884';
export const disabledColor = '#D8D8D8';

export default {
  base: {
    fontFamily: 'roboto, sans-serif',
    palette: {
      primary1Color: brandColor,
      accent1Color: brandColor
    }
  },

  header: {
    toolbar: {
      backgroundColor: brandColor,
      iconColor: Colors.white
    },
    iconStyle: {
      color: Colors.white
    }
  },

  button: {
    disabledBackgroundColor: '#9B9B9B',
    disabledLabelColor: 'white'
  },

  mui: {
    datePicker: {
      selectColor: brandColor,
      headerColor: brandColor
    },
    timePicker: {
      clockColor: brandColor,
      headerColor: brandColor
    }
  }
}
