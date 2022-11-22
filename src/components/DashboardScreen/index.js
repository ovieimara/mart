import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Pressable,
  Alert,
  SafeAreaView,
  useColorScheme,
  Dimensions,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import styles from './styles';
import SectionArea from '../SectionArea';
import SearchBar from '../SearchBar';
import {useNavigation} from '@react-navigation/native';
import Animated, {Easing} from 'react-native-reanimated';
// import { useEffect } from 'react';

const DashboardScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const navigation = useNavigation();
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // useEffect(() => {
  //   navigation.setOptions({
  //     headerLargeTitle: true,
  //     headerTitle: 'Home',
  //     headerRight: () => (
  //       <Pressable
  //         // onPress={() => navigation.navigate('Stack')}
  //         style={styles.pressable}>
  //         <Text style={styles.input}>+</Text>
  //       </Pressable>
  //     ),
  //     headerSearchBarOptions: {
  //       placeholder: 'Friends',
  //       onChangeText: event => {
  //         // searchFilterFunction(event.nativeEvent.text);
  //       },
  //     },
  //   });
  // }, [navigation]);
  return (
    <SafeAreaView style={[styles.container, backgroundStyle]}>
      <SearchBar />
      <SectionArea />
    </SafeAreaView>
  );
};

export default DashboardScreen;
