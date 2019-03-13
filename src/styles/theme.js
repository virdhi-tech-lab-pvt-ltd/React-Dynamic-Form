import * as appConstants from 'app/utils/appConstants';

export default {
  base: {
    palette: {
      primary1Color: appConstants.THEME_COLOR,
      primary2Color: appConstants.THEME_COLOR,
      accent1Color: appConstants.THEME_COLOR,
      accent2Color: '#FFFFFF',      
      iconColor: appConstants.THEME_COLOR,
      borderColor: appConstants.ACTIVE_COLOR,
      textColor:'#FFFFFF',
      alternateTextColor:'#FFFFFF'
    }
  },

  header: {
    width: 100,
    palette: {
      //primary1Color: appConstants.THEME_COLOR,
      accent2Color: appConstants.THEME_COLOR,
      textColor:'#FFFFFF',
      alternateTextColor:'#FFFFFF'
    }
  },
  toolBar:{
    palette: {
        primary1Color: appConstants.THEME_COLOR,     
      }
  },
  flatButton: {
      buttonFilterColor: '#999999',
      primaryTextColor: appConstants.THEME_COLOR,
      secondaryTextColor: appConstants.THEME_COLOR
    },
    menuItem: {
      selectedTextColor: '#000'
    },
  textField: {
    focusColor: appConstants.ACTIVE_COLOR
  }
  
};
