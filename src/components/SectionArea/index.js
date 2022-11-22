import React from 'react';
import {SafeAreaView, SectionList, Text, View} from 'react-native';
import Item from '../Item';
import styles from './styles';

const SectionArea = () => {
  const DATA = [
    {
      title: 'Banking',
      data: [
        {name: 'Stanbic IBTC', image_url: ''},
        {name: 'United Bank For Africa', image_url: ''},
        {name: 'Access Bank', image_url: ''},
      ],
    },
    {
      title: 'Property Insurance',
      data: [
        {name: 'Conerstone Insurance', image_url: ''},
        {name: 'Onion Rings', image_url: ''},
        {name: 'Fried Shrimps', image_url: ''},
      ],
    },
    {
      title: 'Health Insurance',
      data: [
        {name: 'IGI', image_url: ''},
        {name: 'Heirs', image_url: ''},
        {name: 'Reliance', image_url: ''},
      ],
    },
    {
      title: 'Asset Management',
      data: [
        {name: 'Piggy Vest', image_url: ''},
        {name: 'Bamboo', image_url: ''},
        {name: 'Chaka', image_url: ''},
      ],
    },
  ];

  const renderItem = ({item}) => (
    <Item name={item.name} image_url={item.image_url} />
  );
  const renderSectionHeader = ({section: {title}}) => (
    <Text style={styles.title}>{title}</Text>
  );

  const separator = () => <View style={styles.separator} />;

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        style={styles.sectionList}
        keyExtractor={(item, index) => item + index}
        sections={DATA}
        renderItem={renderItem}
        ItemSeparatorComponent={separator}
        renderSectionHeader={renderSectionHeader}
        // SectionSeparatorComponent={separator}
      />
    </SafeAreaView>
  );
};

export default SectionArea;
