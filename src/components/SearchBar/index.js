import React, {useRef, useState} from 'react';
import {
  Animated,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  Dimensions,
  Easing,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
// import {MaterialCommunityIcons as Icon} from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

const SearchBar = () => {
  const {Value, timing} = Animated;
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  //   const [input_box_translate_x, setInputBoxTranslateX] = useState(
  //     new Value(width),
  //   );

  const input_box_translate_x = useRef(new Animated.Value(width)).current;
  const back_button_opacity = useRef(new Animated.Value(0)).current;
  const content_translate_y = useRef(new Animated.Value(height)).current;
  const content_opacity = useRef(new Animated.Value(0)).current;
  const content_zIndex = useRef(new Animated.Value(0)).current;
  //   const [back_button_opacity, setBackButtonOpacity] = useState(new Value(0));
  //   const [content_translate_y, setContentTranslateY] = useState(
  //     new Value(height),
  //   );
  //   const [content_opacity, setContentOpacity] = useState(new Value(0));
  const [text, onChangeText] = useState('');
  const [keyword, onChangeKeyword] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const input = useRef(null);

  const onFocus = () => {
    setIsFocused(true);
    const input_box_translate_x_config = {
      duration: 200,
      toValue: 0,
      useNativeDriver: true,
      easing: Easing.inOut(Easing.ease),
    };

    const back_button_opacity_config = {
      duration: 200,
      toValue: 1,
      useNativeDriver: true,
      easing: Easing.inOut(Easing.ease),
    };

    const content_translate_y_config = {
      duration: 0,
      toValue: 0,
      useNativeDriver: true,
      easing: Easing.inOut(Easing.ease),
    };

    const content_opacity_config = {
      duration: 200,
      toValue: 1,
      useNativeDriver: true,
      easing: Easing.inOut(Easing.ease),
    };

    const content_zIndex_config = {
      duration: 200,
      toValue: 999,
      useNativeDriver: true,
      easing: Easing.inOut(Easing.ease),
    };

    // run animation

    timing(input_box_translate_x, input_box_translate_x_config).start();
    timing(back_button_opacity, back_button_opacity_config).start();
    timing(content_translate_y, content_translate_y_config).start();
    timing(content_opacity, content_opacity_config).start();
    //timing(content_zIndex, content_zIndex_config).start();

    // force focus
    input.current.focus();
  };

  const onBlur = () => {
    setIsFocused(false);
    const input_box_translate_x_config = {
      duration: 200,
      toValue: width,
      useNativeDriver: true,
      easing: Easing.inOut(Easing.ease),
    };

    const back_button_opacity_config = {
      duration: 50,
      toValue: 0,
      useNativeDriver: true,
      easing: Easing.inOut(Easing.ease),
    };

    const content_translate_y_config = {
      duration: 0,
      toValue: height,
      useNativeDriver: true,
      easing: Easing.inOut(Easing.ease),
    };

    const content_opacity_config = {
      duration: 200,
      toValue: 0,
      useNativeDriver: true,
      easing: Easing.inOut(Easing.ease),
    };

    const content_zIndex_config = {
      duration: 200,
      toValue: 0,
      useNativeDriver: true,
      easing: Easing.inOut(Easing.ease),
    };
    // run animation
    timing(input_box_translate_x, input_box_translate_x_config).start();
    timing(back_button_opacity, back_button_opacity_config).start();
    timing(content_translate_y, content_translate_y_config).start();
    // timing(content_zIndex, content_zIndex_config).start();
    timing(content_opacity, content_opacity_config).start();

    // force blur
    input.current.blur();
  };

  const changeKeyword = value => {
    onChangeKeyword(value);
    // const content_zIndex_config = {
    //   duration: 200,
    //   toValue: 0,
    //   useNativeDriver: true,
    //   easing: Easing.inOut(Easing.ease),
    // };
    // timing(content_zIndex, content_zIndex_config).start();
  };

  return (
    <>
      <SafeAreaView style={styles.header_safe_area}>
        <View style={styles.header}>
          <View style={styles.header_inner}>
            <View>
              <Image
                source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
                style={{width: 50, height: 50}}
              />
            </View>
            <TouchableHighlight
              activeOpacity={1}
              underlayColor={'#ccd0d5'}
              onPress={onFocus}
              style={styles.search_icon_box}>
              <Icon name="search" size={22} color="#000000" />
            </TouchableHighlight>
            <Animated.View
              style={[
                styles.input_box,
                {transform: [{translateX: input_box_translate_x}]},
              ]}>
              <Animated.View style={{opacity: back_button_opacity}}>
                <TouchableHighlight
                  activeOpacity={1}
                  underlayColor={'#ccd0d5'}
                  onPress={onBlur}
                  style={styles.back_icon_box}>
                  <Icon name="chevron-left" size={20} color="#000000" />
                </TouchableHighlight>
              </Animated.View>
              <TextInput
                ref={input}
                placeholder="Search"
                clearButtonMode="always"
                value={keyword}
                onChangeText={changeKeyword}
                style={styles.input}
              />
            </Animated.View>
          </View>
        </View>
        {/* <TextInput
          onChangeText={onChangeText}
          placeholder="Search"
          value={text}
          style={styles.input}
        /> */}
      </SafeAreaView>
      <Animated.View
        style={[
          styles.content,
          {
            opacity: content_opacity,
            // zIndex: content_zIndex,
            transform: [{translateY: content_translate_y}],
          },
        ]}>
        <SafeAreaView style={styles.content_safe_area}>
          <View style={styles.content_inner}>
            <View style={styles.separator} />
            {keyword === '' ? (
              <View style={styles.image_placeholder_container}>
                <Image
                  style={styles.image_placeholder}
                  source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
                />
                <Text style={styles.image_placeholder_text}>
                  Enter words to search
                </Text>
              </View>
            ) : (
              <ScrollView>
                <View style={styles.search_item}>
                  <Icon
                    style={styles.item_icon}
                    name="search"
                    size={16}
                    color="#cccccc"
                  />
                  <Text style={styles.fake_result}> Fake result 1</Text>
                </View>
                <View style={styles.search_item}>
                  <Icon
                    style={styles.item_icon}
                    name="search"
                    size={16}
                    color="#cccccc"
                  />
                  <Text style={styles.fake_result}> Fake result 2</Text>
                </View>
                <View style={styles.search_item}>
                  <Icon
                    style={styles.item_icon}
                    name="search"
                    size={16}
                    color="#cccccc"
                  />
                  <Text style={styles.fake_result}> Fake result 3</Text>
                </View>
                <View style={styles.search_item}>
                  <Icon
                    style={styles.item_icon}
                    name="search"
                    size={16}
                    color="#cccccc"
                  />
                  <Text style={styles.fake_result}> Fake result 4</Text>
                </View>
                <View style={styles.search_item}>
                  <Icon
                    style={styles.item_icon}
                    name="search"
                    size={16}
                    color="#cccccc"
                  />
                  <Text style={styles.fake_result}> Fake result 5</Text>
                </View>
              </ScrollView>
            )}
          </View>
          {/* </View> */}
        </SafeAreaView>
      </Animated.View>
    </>
  );
};

export default SearchBar;
