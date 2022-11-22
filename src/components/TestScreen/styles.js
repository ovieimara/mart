import {StyleSheet, useColorScheme} from 'react-native';

const Styles = StyleSheet.create({
  container: {
    //backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
    marginTop: 50,
  },
  text: {
    fontSize: 20,
    fontFamily:
      //   'Cochin',
      //   'lucida grande',
      //   'tahoma',
      'verdana',
    //   'arial',
    //   'sans-serif',
  },
  item: {
    backgroundColor: '#90D5C8',
  },
  touchableInput: {
    // alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    elevation: 3,
    height: 100,
    margin: 10,
    padding: 10,
    backgroundColor: '#D0D2D7',
  },
});

export default Styles;
