import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SearchListItem from '../molecules/SearchListItem';
import {TabNavigationList} from '../../containers/navigation/TabNavigation';

type SearchListProps = {
  items: Array<string>;
};
const SearchList = ({items}: SearchListProps): JSX.Element => {
  const navigation = useNavigation<TabNavigationList>();

  return (
    <FlatList
      data={items}
      contentContainerStyle={styles.searchListContainer}
      renderItem={({item}) => (
        <SearchListItem
          onPress={() => {
            navigation.navigate('Search', {initialSearchValue: item});
          }}
          containerStyle={styles.searchListItemContainer}>
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
