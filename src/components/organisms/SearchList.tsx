import React from 'react';
import SearchListItem from '../molecules/SearchListItem';
import {FlatList, StyleSheet} from 'react-native';

type SearchListProps = {
  items: Array<string>;
};
const SearchList = ({items}: SearchListProps): JSX.Element => {
  return (
    <FlatList
      data={items}
      contentContainerStyle={styles.searchListContainer}
      renderItem={({item}) => (
        <SearchListItem containerStyle={styles.searchListItemContainer}>
          {item}
        </SearchListItem>
      )}
    />
  );
};

const styles = StyleSheet.create({
  searchListContainer: {
    paddingVertical: 16,
  },
  searchListItemContainer: {
    paddingVertical: 8,
  },
});

export default SearchList;
