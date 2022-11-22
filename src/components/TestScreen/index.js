import React from 'react';
import {
  View,
  Text,
  Pressable,
  Alert,
  SafeAreaView,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import styles from './styles';
import SectionArea from '../SectionArea';
import SearchBar from '../SearchBar';

const TestScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <SearchBar />
      <SectionArea />
    </SafeAreaView>
  );
};

export default TestScreen;
