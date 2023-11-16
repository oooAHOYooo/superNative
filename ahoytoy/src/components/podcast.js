import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const podcastsData = [
  // ... your podcasts data
];

const PodcastsList = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.description}</Text>
    </View>
  );

  return (
    <FlatList
      data={podcastsData}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 18,
  },
});

export default PodcastsList;
