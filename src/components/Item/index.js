import React from 'react';
import {View, Text, Pressable, Alert} from 'react-native';
import styles from './styles';

const Item = ({name, image_url}) => {
  const onPress = () => {
    Alert.alert('Pressed ${name}');
  };
  return (
    <Pressable style={styles.touchableInput} onPress={onPress}>
      <Text style={styles.text}>{name}</Text>
    </Pressable>
  );
};

export default Item;
