import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Dimensions, StyleSheet, Image } from 'react-native';
import { coffeeItems } from '../constants';

const { width, height } = Dimensions.get('window');

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const results = coffeeItems.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <TextInput
            placeholder='Search for clubs and chapters...'
            style={styles.searchInput}
            onChangeText={text => setSearchQuery(text)}
            value={searchQuery}
          />
          <TouchableOpacity
            style={styles.searchButton}
            onPress={handleSearch}
          >
            <Text style={styles.searchButtonText}>Search</Text>
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={searchResults}
        renderItem={({ item }) => (
          <View style={styles.resultCard}>
            <Image source={item.image} style={styles.clubLogo} />
            <Text style={styles.resultTitle}>{item.name}</Text>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
        ListEmptyComponent={() => (
          <View style={styles.noResults}>
            <Text style={styles.noResultsText}>No results found</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  searchContainer: {
    marginBottom: 16,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e6e6e6',
    borderRadius: 30,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchButton: {
    backgroundColor: '#ff6347',
    borderRadius: 30,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginLeft: 10,
  },
  searchButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultCard: {
    backgroundColor: '#f5f5f5',
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  clubLogo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  resultDescription: {
    color: 'gray',
  },
  noResults: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noResultsText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray',
  },
});
