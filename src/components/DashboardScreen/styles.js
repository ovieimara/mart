import {StyleSheet, useColorScheme} from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
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
  input: {
    // alignItems: 'center',
    // justifyContent: 'center',
    // borderRadius: 5,
    // elevation: 3,
    // height: 100,
    // margin: 10,
    // padding: 10,
    //backgroundColor: '#D0D2D7',
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
  pressable: {
    backgroundColor: 'purple',
    width: 30,
    height: 30,
    borderRadius: 10,
    justifyContent: 'center',
  },
});

export default Styles;
