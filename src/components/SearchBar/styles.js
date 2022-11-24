import {StyleSheet, Dimensions} from 'react-native';
const dimensions = Dimensions.get('window');
const width = dimensions.width;
const height = dimensions.height;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // marginTop: 50,
    // justifyContent: 'center',
    // backgroundColor: '#D0D2D7',
  },
  sectionList: {
    flex: 0.7,
  },
  // input: {
  //   fontSize: 20,
  //   margin: 10,
  //   padding: 10,
  //   borderRadius: 5,
  //   borderWidth: 0.2,
  //   borderColor: '#D0D2D7',
  //   elevation: 5,
  //   shadowColor: '#525252',
  //   shadowOffset: {width: 0, height: 2},
  //   shadowOpacity: 0.4,
  //   shadowRadius: 2,
  //   backgroundColor: '#D0D2D7',
  // },

  header_safe_area: {
    zIndex: 1000,
  },

  header: {
    height: 50,
    paddingHorizontal: 16,
  },

  header_inner: {
    flex: 1,
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
  },
  search_icon_box: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: '#e4e6eb',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input_box: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'white',
    width: width - 30,
  },
  back_icon_box: {
    width: 40,
    // height: 40,
    borderRadius: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    // alignContent: 'center',
    // marginRight: 5,
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    paddingHorizontal: 10,
    fontSize: 15,
  },

  content: {
    width: width,
    height: height,
    position: 'absolute',
    left: 0,
    bottom: 0,
    paddingHorizontal: 16,
    zIndex: 999,
  },
  content_safe_area: {
    flex: 1,
    backgroundColor: 'white',
  },
  content_inner: {
    flex: 1,
    paddingTop: width - 100,
  },
  separator: {
    marginTop: 5,
    height: 1,
    backgroundColor: '#e6e4eb',
  },
  image_placeholder_container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: '-50%',
  },
  image_placeholder: {
    width: 150,
    height: 113,
    alignSelf: 'center',
  },
  image_placeholder_text: {
    textAlign: 'center',
    color: 'gray',
    marginTop: 5,
  },
  search_item: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e6e4eb',
    marginLeft: 16,
    //paddingTop: 300,
  },
  item_icon: {
    marginRight: 15,
  },
  fake_result: {
    // color: '#e4e6eb',
  },
});

export default styles;
